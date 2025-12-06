import type { Metadata } from "next";
import { siteMetadata } from "@/lib/siteMetadata";
import GalleryPageContent from "./GalleryPageContent";

const pageTitle = "Embroidery Gallery | Ashwini Vinyāsam";
const pageDescription =
  "View embroidery samples and project highlights from Ashwini Vinyāsam, showcasing blouse, saree, lehenga, and logo work.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/gallery",
  },
  keywords: [...siteMetadata.keywords, "embroidery gallery", "embroidery samples"],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/gallery",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
