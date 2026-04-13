/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string;
}

interface FormData {
  companyName: string;
  contactPerson: string;
  contact: string;
  routeFrom: string;
  routeTo: string;
  frequency: string;
  invoiceDetails: string;
  notes: string;
  language: "sk" | "en";
}

const RECIPIENTS = ["fabianmarian8@gmail.com", "info@zvolen-taxi.sk"];
const SENDER = "noreply@zvolen-taxi.sk";

function buildEmailHtml(data: FormData): string {
  const isSk = data.language === "sk";
  const labels = isSk
    ? {
        subject: "Nový firemný dopyt – Taxi Zvolen",
        heading: "Nový dopyt na firemné jazdy",
        companyName: "Firma",
        contactPerson: "Kontaktná osoba",
        contact: "Telefón / email",
        routeFrom: "Miesto nástupu",
        routeTo: "Cieľ jazdy",
        frequency: "Frekvencia",
        invoiceDetails: "Fakturačné údaje",
        notes: "Poznámka",
      }
    : {
        subject: "New corporate ride request – Taxi Zvolen",
        heading: "New corporate ride request",
        companyName: "Company",
        contactPerson: "Contact person",
        contact: "Phone / email",
        routeFrom: "Pickup",
        routeTo: "Destination",
        frequency: "Frequency",
        invoiceDetails: "Billing details",
        notes: "Notes",
      };

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#333;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 12px;color:#555">${value}</td></tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5">
  <div style="max-width:600px;margin:24px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
    <div style="background:#1a1a1a;padding:24px 32px">
      <h1 style="margin:0;color:#f5a623;font-size:20px">${labels.heading}</h1>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse">
        ${row(labels.companyName, data.companyName)}
        ${row(labels.contactPerson, data.contactPerson)}
        ${row(labels.contact, data.contact)}
        ${row(labels.routeFrom, data.routeFrom)}
        ${row(labels.routeTo, data.routeTo)}
        ${row(labels.frequency, data.frequency)}
        ${row(labels.invoiceDetails, data.invoiceDetails)}
        ${row(labels.notes, data.notes)}
      </table>
    </div>
    <div style="padding:16px 32px;background:#fafafa;font-size:12px;color:#999;text-align:center">
      Odoslané z formulára na zvolen-taxi.sk
    </div>
  </div>
</body>
</html>`;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://zvolen-taxi.sk",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data: FormData = await context.request.json();

    if (!data.companyName || !data.contact || !data.routeFrom || !data.routeTo) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const isSk = data.language === "sk";
    const subject = isSk
      ? `Firemný dopyt: ${data.companyName}`
      : `Corporate request: ${data.companyName}`;

    const emailPayload = {
      from: `Taxi Zvolen Web <${SENDER}>`,
      reply_to: data.contact.includes("@") ? data.contact : undefined,
      subject,
      html: buildEmailHtml(data),
    };

    const sendEmail = (to: string) =>
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...emailPayload, to: [to] }),
      });

    const results = await Promise.allSettled(
      RECIPIENTS.map((r) => sendEmail(r))
    );

    const anyOk = results.some(
      (r) => r.status === "fulfilled" && r.value.ok
    );

    if (!anyOk) {
      console.error("All sends failed:", results);
      return new Response(JSON.stringify({ error: "Email sending failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    console.error("Function error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://zvolen-taxi.sk",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
};
