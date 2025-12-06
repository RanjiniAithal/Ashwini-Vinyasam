import type { Metadata } from "next";
import { siteMetadata } from "@/lib/siteMetadata";
import ContactPageContent from "./ContactPageContent";

const pageTitle = "Contact Ashwini Vinyāsam";
const pageDescription =
  "Reach out to Ashwini Vinyāsam in Kengeri, Bangalore for custom blouse, saree, lehenga, and logo embroidery enquiries.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  keywords: [...siteMetadata.keywords, "contact Ashwini Vinyasam", "embroidery enquiries"],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
