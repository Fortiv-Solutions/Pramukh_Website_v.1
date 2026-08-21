import { createFileRoute } from "@tanstack/react-router";
import { SuratPage } from "@/components/site/SuratPage";

const title =
  "Surat Residential & Commercial Projects | Luxury Real Estate | Pramukh Group";
const description =
  "Explore Pramukh Group's landmark residential, commercial, industrial, and hospitality developments in Surat. Over 13 years of trusted real estate excellence across Vesu, Piplod, and Pal.";

export const Route = createFileRoute("/surat")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/images/projects/agastya.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SuratRoute,
});

function SuratRoute() {
  return <SuratPage />;
}
