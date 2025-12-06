import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Palette,
  Sparkles,
  Shield,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";
import { siteMetadata } from "@/lib/siteMetadata";

const pageTitle = "Custom Embroidery Services in Kengeri";
const pageDescription =
  "Explore custom blouse, saree, lehenga, and logo embroidery by Ashwini Vinyāsam in Kengeri, Bangalore.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [...siteMetadata.keywords, "embroidery Kengeri", "custom embroidery"],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function Home() {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Blouse Embroidery",
      description:
        "Beautiful, custom designs for simple, bridal, and designer blouses.",
      image: "/images/services/blouse.png",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Saree/Lehenga Embroidery",
      description:
        "Pallu work, borders, floral patterns, and custom saree detailing.",
      image: "/images/services/saree.png",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Logo Embroidery",
      description:
        "Professional logo embroidery for uniforms, shops, and businesses",
      image: "/images/services/logo.png",
    },
  ];

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      value: "Quality",
      label: "",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "Affordable",
      label: "",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "Reliable",
      label: "",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      value: "Detailing",
      label: "",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero/hero.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Embroidery Partner
            <br />
            <span className="text-rose-300">For Every Occasion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Beautiful embroidery for blouses, sarees, lehengas, dresses and
            more, trusted by boutiques, tailors and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-rose-700 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-rose-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beautiful embroidery services crafted to enhance every outfit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="ghost"
                    className="group-hover:text-primary"
                  >
                    <Link href="/services">
                      Learn More{" "}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-slide-in">
              <Image
                src="/images/team/about-1.png"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose{" "}
                <span className="gradient-text">Ashwini Vinyāsam</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a strong focus on quality embroidery and clean finishing,
                we help tailors, boutiques, and customers bring their outfits to
                life with beautiful, detailed designs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expertise, modern machine work, and commitment to perfection
                ensure embroidery that not only meets expectations but
                consistently exceeds them.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Expert Artistry
                    </h3>
                    <p className="text-gray-600">
                      Precision embroidery with specialized experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Quality & Timeliness
                    </h3>
                    <p className="text-gray-600">
                      Clean finishing and on-time delivery for every project
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="mt-6">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Elevate Your Brand Together
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Let&apos;s discuss how we can help you achieve your goals
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
