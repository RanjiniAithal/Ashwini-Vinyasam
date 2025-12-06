const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteMetadata = {
  name: "Ashwini Vinyāsam",
  legalName: "Ashwini Vinyāsam",
  description:
    "Ashwini Vinyāsam delivers custom blouse, saree, lehenga, and logo embroidery for boutiques, tailors, and individuals in Kengeri, Bangalore.",
  slogan: "Fine embroidery and clean finishing for every garment.",
  url: rawSiteUrl ?? "https://www.ashwinivinyasam.com",
  locale: "en_IN",
  keywords: [
    "Ashwini Vinyasam",
    "embroidery services",
    "blouse embroidery",
    "saree embroidery",
    "lehenga embroidery",
    "logo embroidery",
    "custom embroidery Bangalore",
    "Kengeri embroidery shop",
    "bridal embroidery",
  ],
  contact: {
    phone: "+91 9880000226",
    email: "ashwini.aithal20@gmail.com",
  },
  address: {
    street: "No 45, Ground Floor, Behind Gutte Anjeneya Swamy Temple",
    locality: "Kengeri",
    city: "Bangalore",
    region: "Karnataka",
    postalCode: "560060",
    country: "IN",
    latitude: 12.9048046,
    longitude: 77.4899336,
  },
  socialProfiles: [
    "https://maps.google.com/?q=12.9048046,77.4899336",
  ],
  ogImage: "/images/hero/hero.png",
  logo: "/images/logo/logo.png",
};
