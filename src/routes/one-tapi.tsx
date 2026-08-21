import { createFileRoute } from "@tanstack/react-router";
import { OneTapiPage } from "@/components/site/OneTapiPage";

const title =
  "One Tapi — Exclusive Riverside 5 BHK Residences & Penthouses, Piplod, Surat | Pramukh Group";
const description =
  "Discover One Tapi by Pramukh Group: Ultra-luxury 5 BHK residences and sky penthouses situated on the tranquil banks of the Tapi River in Piplod, Surat.";

export const Route = createFileRoute("/one-tapi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/images/one-tapi/one-tapi.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OneTapiRoute,
});

function OneTapiRoute() {
  return <OneTapiPage />;
}
