import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeaturedDestinations } from "@/components/landing/featured-destinations";
import { LiveOffers } from "@/components/landing/live-offers";
import { RecommendationPanels } from "@/components/landing/recommendation-panels";
import { HowItWorks } from "@/components/landing/how-it-works";
import { SaveSearchesCta } from "@/components/landing/save-searches-cta";
import { Footer } from "@/components/landing/footer";

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <LiveOffers />
      <RecommendationPanels />
      <HowItWorks />
      <SaveSearchesCta />
      <Footer />
    </main>
  );
}