import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Megaphone,
  Code,
  Target,
  Palette,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";

const pageTitle = "Embroidery Services | Ashwini Vinyāsam";
const pageDescription =
  "Browse blouse, saree, lehenga, and logo embroidery services offered by Ashwini Vinyāsam in Kengeri, Bangalore.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/services",
  },
  keywords: [...siteMetadata.keywords, "embroidery services", "logo embroidery Bangalore"],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Blouse Embroidery",
      description:
        "Beautiful, custom designs for simple, bridal, and designer blouses.",
      image: "/images/services/blouse.png",
      features: ["Neck Work", "Sleeve Work", "Back Work", "Bridal Finish"],
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Saree/Lehenga Embroidery",
      description:
        "Pallu work, borders, floral patterns, and custom saree detailing.",
      image: "/images/services/saree.png",
      features: [
        "Floral Motifs",
        "Borders",
        "Pallu Work",
        "Custom Detailing",
        "Heavy Work",
      ],
    },

    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Logo Embroidery",
      description:
        "Professional logo embroidery for uniforms, shops, and businesses",
      image: "/images/services/logo.png",
      features: ["Sharp Detailing", "Durable Finish", "Bulk Orders"],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-hero.png"
            alt="Services Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/60 to-rose-800/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
            Comprehensive solutions tailored to your unique business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end solutions that
              drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Let&apos;s discuss how our services can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
