import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteMetadata } from "@/lib/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: `${siteMetadata.name} | Custom Embroidery in Bangalore`,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  generator: "Next.js",
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.legalName, url: siteMetadata.url }],
  creator: siteMetadata.legalName,
  publisher: siteMetadata.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteMetadata.name} | Custom Embroidery in Bangalore`,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    locale: siteMetadata.locale,
    type: "website",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.name} showroom and embroidery work samples`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.name} | Custom Embroidery in Bangalore`,
    description: siteMetadata.description,
    creator: siteMetadata.legalName,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Embroidery Services",
  icons: {
    icon: siteMetadata.logo,
    apple: siteMetadata.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadataBase = new URL(siteMetadata.url);
  const absoluteLogo = new URL(siteMetadata.logo, metadataBase).toString();
  const absoluteOgImage = new URL(siteMetadata.ogImage, metadataBase).toString();

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteMetadata.name,
    description: siteMetadata.description,
    url: siteMetadata.url,
    telephone: siteMetadata.contact.phone,
    email: siteMetadata.contact.email,
    image: absoluteOgImage,
    logo: absoluteLogo,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.locality,
      addressRegion: siteMetadata.address.region,
      postalCode: siteMetadata.address.postalCode,
      addressCountry: siteMetadata.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteMetadata.address.latitude,
      longitude: siteMetadata.address.longitude,
    },
    areaServed: ["Bangalore", "Kengeri"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: siteMetadata.socialProfiles,
  } as const;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StructuredData data={businessJsonLd} />
      </body>
    </html>
  );
}
