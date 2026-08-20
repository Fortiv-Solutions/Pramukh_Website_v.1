import { createFileRoute } from "@tanstack/react-router";

import { Preloader } from "@/components/site/Preloader";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { FunFacts } from "@/components/site/FunFacts";
import { ChairmanMessage } from "@/components/site/ChairmanMessage";
import { LeadingProjects } from "@/components/site/LeadingProjects";
import { Portfolio } from "@/components/site/Portfolio";
import { Sustainability } from "@/components/site/Sustainability";
import { InvestorCorner } from "@/components/site/InvestorCorner";
import { Enquiry } from "@/components/site/Enquiry";
import { Insights } from "@/components/site/Insights";
import { Footer } from "@/components/site/Footer";
import { StickyEnquire } from "@/components/site/StickyEnquire";

const title = "Pramukh Group — Building Class, Developing Excellence | Premium Projects in Gujarat";
const description =
  "Pramukh Group is a premier real estate developer with 60+ delivered projects across Surat, Vapi, Silvassa and Gandhinagar. Discover Pramukh Satva, Pramukh Zenith & Pramukh Swagat.";

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
        <FunFacts />
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
