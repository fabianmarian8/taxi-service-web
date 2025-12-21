import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";

export default function WhenToBookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          When to Book a Taxi in Advance
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-8 text-xl">
            Morning rushes, weekends, or special events. Learn when it is better to book your ride in Zvolen ahead of time.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Book in Advance (Recommended)</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Mornings (6:00–8:30)</strong> – Commuting to work or school.</li>
            <li><strong>Friday & Saturday nights</strong> – High demand due to nightlife.</li>
            <li><strong>Train stations & Events</strong> – Many people arriving at once.</li>
            <li><strong>Special requirements</strong> – Child seat, multiple stops, or large luggage.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">"Right Now" is Enough</h2>
          <p className="mb-8">
            During standard working hours on weekdays for short one-way trips within the city.
          </p>

          <div className="bg-yellow-500/10 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
            <p className="font-bold">Tip: If you are running late, let us know!</p>
            <p>Our dispatcher can hold the car for a few minutes or send another one to ensure you reach your destination.</p>
          </div>
        </div>

        <div className="text-center">
          <a href="tel:+421902048583">
            <Button size="lg" className="btn-yellow">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Ride: +421 902 048 583
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
}
