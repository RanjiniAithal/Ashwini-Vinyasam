import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Eye,
  Users,
  Award,
  Zap,
  Heart,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://source.unsplash.com/400x400/?portrait,business,woman,professional",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://source.unsplash.com/400x400/?portrait,business,man,asian",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Marketing",
      image:
        "https://source.unsplash.com/400x400/?portrait,professional,woman,latina",
    },
    {
      name: "David Kumar",
      role: "Lead Consultant",
      image:
        "https://source.unsplash.com/400x400/?portrait,business,man,indian",
    },
  ];

  const values = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge solutions to stay ahead.",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Integrity",
      description:
        "Honesty and transparency form the foundation of all our client relationships.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Collaboration",
      description:
        "We believe in the power of collaboration and partnership to achieve excellence.",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in everything we do.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/about-hero.png"
            alt="About Us Banner"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-rose-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
            Crafting beautiful embroidery with passion, precision, and artistry
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ashwini Vinyāsam began with a passion for embroidery and a
                commitment to delivering exceptional artistry. Every stitch we
                create reflects the energy, care, and dedication poured into
                each order.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in blouse embroidery, saree and lehenga detailing,
                and professional logo embroidery for businesses. Each piece we
                create reflects our dedication to precision and artistic
                excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to serve tailors, boutiques, and
                individual customers who value quality embroidery that
                transforms ordinary garments into extraordinary pieces. Your
                vision becomes our craft.
              </p>
            </div>

            <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src="/images/team/about.jpg"
                alt="Our Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-t-4 border-t-primary animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600">
                  To be the most trusted name in embroidery services, known for
                  exceptional craftsmanship, creative excellence, and unwavering
                  commitment to quality. We envision making beautiful, detailed
                  embroidery accessible to everyone who values fine artwork and
                  personalized designs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-2xl transition-all duration-300 border-t-4 border-t-rose-700 animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-rose-700" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600">
                  To bring every design to life with precision embroidery,
                  modern techniques, and traditional artistry. We are committed
                  to delivering clean finishes, intricate detailing, and timely
                  service that makes every garment special and every customer
                  satisfied.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg mb-4 group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-rose-700 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">Quality</div>
              <div className="text-sm text-rose-100"></div>
            </div>
            <div className="text-center text-white">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">Affordable</div>
              <div className="text-sm text-rose-100"></div>
            </div>
            <div className="text-center text-white">
              <div className="flex justify-center mb-3">
                <Target className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">Reliable</div>
              <div className="text-sm text-rose-100"></div>
            </div>
            <div className="text-center text-white">
              <div className="flex justify-center mb-3">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">Detailing</div>
              <div className="text-sm text-rose-100"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
