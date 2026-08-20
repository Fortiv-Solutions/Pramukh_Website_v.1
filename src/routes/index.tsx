import { createFileRoute } from "@tanstack/react-router";

import { Preloader } from "@/components/site/Preloader";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ChairmanMessage } from "@/components/site/ChairmanMessage";
import { LeadingProjects } from "@/components/site/LeadingProjects";
import { Portfolio } from "@/components/site/Portfolio";
import { Sustainability } from "@/components/site/Sustainability";
import { InvestorCorner } from "@/components/site/InvestorCorner";
import { Enquiry } from "@/components/site/Enquiry";
import { Insights } from "@/components/site/Insights";
import { Footer } from "@/components/site/Footer";
import { StickyEnquire } from "@/components/site/StickyEnquire";

const title = "Oberoi Realty — Luxury Residential & Commercial Projects in Mumbai";
const description =
  "Oberoi Realty builds premium residential, commercial, retail and hospitality developments across Mumbai — Oberoi Garden City, Sky City and Three Sixty West.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ChairmanMessage />
        <LeadingProjects />
        <Portfolio />
        <Sustainability />
        <InvestorCorner />
        <Enquiry />
        <Insights />
      </main>
      <Footer />
      <StickyEnquire />
    </div>
  );
}
