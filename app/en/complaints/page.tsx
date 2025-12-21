import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          How to File a Complaint
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-8">
            Were you not satisfied with our service? We take every feedback seriously and strive for a fair resolution.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Write down the date/time of the ride and the route.</li>
            <li>Describe the reason for your complaint in detail.</li>
            <li>Attach a photo of the receipt or any other supporting documents.</li>
            <li>Send it to us via WhatsApp or call our dispatch.</li>
          </ol>

          <p className="mb-8">
            After evaluation, we will propose a solution – an explanation, a price adjustment, or a refund.
          </p>
        </div>

        <section className="text-center bg-yellow-500/10 rounded-xl p-8 border border-yellow-500/30">
          <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421902048583">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421902048583">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
