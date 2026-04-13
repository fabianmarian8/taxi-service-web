"use client";

import { useState, type ChangeEvent } from "react";
import { Building2, Mail, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/config";
import type { Language } from "@/lib/translations";

interface CorporateRideFormProps {
  language: Language;
}

interface FormState {
  companyName: string;
  contactPerson: string;
  contact: string;
  routeFrom: string;
  routeTo: string;
  frequency: string;
  invoiceDetails: string;
  notes: string;
}

const defaultState: FormState = {
  companyName: "",
  contactPerson: "",
  contact: "",
  routeFrom: "",
  routeTo: "",
  frequency: "",
  invoiceDetails: "",
  notes: "",
};

type SendStatus = "idle" | "sending" | "sent" | "error";

export default function CorporateRideForm({ language }: CorporateRideFormProps) {
  const [form, setForm] = useState<FormState>(defaultState);
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");

  const content =
    language === "en"
      ? {
          badge: "B2B request",
          title: "Send your company ride request",
          description:
            "Fill in the route and billing details. We will open email or WhatsApp with all ride information prefilled.",
          companyName: "Company name",
          contactPerson: "Contact person",
          contact: "Phone or email",
          routeFrom: "Pickup location",
          routeTo: "Destination",
          frequency: "Ride frequency",
          invoiceDetails: "Billing details / company ID",
          notes: "Extra notes",
          placeholderCompany: "Example Hotel Polana",
          placeholderPerson: "Example: Front desk / office manager",
          placeholderContact: "Example: +421..., office@company.com",
          placeholderFrom: "Zvolen city center / hotel / office",
          placeholderTo: "Bratislava Airport / city route / client address",
          placeholderInvoice: "Company ID, VAT ID, billing address",
          placeholderNotes: "Shift changes, guest transport, regular airport pickups...",
          help: "Best for hotels, offices, production teams, and recurring guest transport.",
          email: "Open email request",
          whatsapp: "Open WhatsApp request",
          subject: "Corporate rides and invoice billing",
          ready: "Ready to send",
          waiting: "Complete company, contact, pickup, and destination first.",
          frequencies: [
            { value: "", label: "Select frequency" },
            { value: "one-time", label: "One-time request" },
            { value: "weekly", label: "Several times per week" },
            { value: "daily", label: "Daily rides" },
            { value: "custom", label: "Custom schedule" },
          ],
        }
      : {
          badge: "B2B dopyt",
          title: "Pošlite dopyt na firemné jazdy",
          description:
            "Vyplňte trasu a fakturačné údaje. Otvoríme email alebo WhatsApp s predvyplnenými informáciami o jazde.",
          companyName: "Názov firmy",
          contactPerson: "Kontaktná osoba",
          contact: "Telefón alebo email",
          routeFrom: "Miesto nástupu",
          routeTo: "Cieľ jazdy",
          frequency: "Frekvencia jázd",
          invoiceDetails: "Fakturačné údaje / IČO",
          notes: "Poznámka",
          placeholderCompany: "Napríklad Hotel Poľana",
          placeholderPerson: "Napríklad recepcia / office manažér",
          placeholderContact: "Napríklad +421..., office@firma.sk",
          placeholderFrom: "Centrum Zvolen / hotel / kancelária",
          placeholderTo: "Letisko Bratislava / mestská trasa / adresa klienta",
          placeholderInvoice: "IČO, DIČ, fakturačná adresa",
          placeholderNotes: "Zmenové jazdy, preprava hostí, pravidelné letiskové transfery...",
          help: "Vhodné pre hotely, kancelárie, výrobné firmy aj pravidelnú prepravu hostí.",
          email: "Otvoriť email dopyt",
          whatsapp: "Otvoriť WhatsApp dopyt",
          subject: "Firemné jazdy a platba na faktúru",
          ready: "Pripravené na odoslanie",
          waiting: "Najprv doplňte firmu, kontakt, miesto nástupu a cieľ jazdy.",
          frequencies: [
            { value: "", label: "Vyberte frekvenciu" },
            { value: "one-time", label: "Jednorazový dopyt" },
            { value: "weekly", label: "Niekoľkokrát týždenne" },
            { value: "daily", label: "Denne" },
            { value: "custom", label: "Individuálny režim" },
          ],
        };

  const isReady =
    form.companyName.trim() &&
    form.contact.trim() &&
    form.routeFrom.trim() &&
    form.routeTo.trim();

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const message = [
    content.subject,
    "",
    `${content.companyName}: ${form.companyName || "-"}`,
    `${content.contactPerson}: ${form.contactPerson || "-"}`,
    `${content.contact}: ${form.contact || "-"}`,
    `${content.routeFrom}: ${form.routeFrom || "-"}`,
    `${content.routeTo}: ${form.routeTo || "-"}`,
    `${content.frequency}: ${
      content.frequencies.find((item) => item.value === form.frequency)?.label || "-"
    }`,
    `${content.invoiceDetails}: ${form.invoiceDetails || "-"}`,
    `${content.notes}: ${form.notes || "-"}`,
  ].join("\n");

  const whatsappHref = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsappRaw}&text=${encodeURIComponent(
    message
  )}`;

  const handleSendEmail = async () => {
    if (!isReady || sendStatus === "sending") return;
    setSendStatus("sending");
    try {
      const frequencyLabel =
        content.frequencies.find((item) => item.value === form.frequency)?.label || "";
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, frequency: frequencyLabel, language }),
      });
      if (!res.ok) throw new Error("Send failed");
      setSendStatus("sent");
      setForm(defaultState);
      setTimeout(() => setSendStatus("idle"), 5000);
    } catch {
      setSendStatus("error");
      setTimeout(() => setSendStatus("idle"), 4000);
    }
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-black/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
          <Building2 className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{content.badge}</p>
          <h3 className="text-2xl font-bold text-white">{content.title}</h3>
        </div>
      </div>

      <p className="mb-6 text-sm leading-6 text-white/70 md:text-base">{content.description}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">{content.companyName}</label>
          <Input value={form.companyName} onChange={updateField("companyName")} placeholder={content.placeholderCompany} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">{content.contactPerson}</label>
          <Input value={form.contactPerson} onChange={updateField("contactPerson")} placeholder={content.placeholderPerson} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">{content.contact}</label>
          <Input value={form.contact} onChange={updateField("contact")} placeholder={content.placeholderContact} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">{content.frequency}</label>
          <select
            value={form.frequency}
            onChange={updateField("frequency")}
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-white shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {content.frequencies.map((option) => (
              <option key={option.value || "empty"} value={option.value} className="bg-black text-white">
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">{content.routeFrom}</label>
          <Input value={form.routeFrom} onChange={updateField("routeFrom")} placeholder={content.placeholderFrom} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">{content.routeTo}</label>
          <Input value={form.routeTo} onChange={updateField("routeTo")} placeholder={content.placeholderTo} />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium text-white">{content.invoiceDetails}</label>
        <Textarea
          value={form.invoiceDetails}
          onChange={updateField("invoiceDetails")}
          placeholder={content.placeholderInvoice}
          className="min-h-[96px]"
        />
      </div>

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium text-white">{content.notes}</label>
        <Textarea
          value={form.notes}
          onChange={updateField("notes")}
          placeholder={content.placeholderNotes}
          className="min-h-[120px]"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          className="w-full sm:w-auto btn-yellow"
          disabled={!isReady || sendStatus === "sending"}
          onClick={handleSendEmail}
        >
          {sendStatus === "sending" ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
          ) : sendStatus === "sent" ? (
            <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          ) : (
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
          )}
          {sendStatus === "sent"
            ? language === "sk"
              ? "Dopyt odoslaný ✓"
              : "Request sent ✓"
            : sendStatus === "error"
              ? language === "sk"
                ? "Chyba – skúste znova"
                : "Error – try again"
              : content.email}
        </Button>
        <a href={isReady ? whatsappHref : "#corporate-form"} className="w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full text-black sm:w-auto"
            style={{ backgroundColor: "#25D366" }}
            disabled={!isReady}
          >
            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            {content.whatsapp}
          </Button>
        </a>
      </div>

      <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/70">
        <p className="font-medium text-white">{isReady ? content.ready : content.waiting}</p>
        <p className="mt-1">{content.help}</p>
      </div>
    </div>
  );
}
