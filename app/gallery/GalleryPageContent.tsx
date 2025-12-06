'use client';

import Image from "next/image";
import { useState } from "react";
import { Award, TrendingUp, Target, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "/images/hero/about-hero.png",
    alt: "Embroidery Work",
    category: "Work",
  },
  {
    src: "/images/hero/hero.png",
    alt: "Embroidery Design",
    category: "Work",
  },
  {
    src: "/images/services/blouse.png",
    alt: "Blouse Embroidery",
    category: "Blouse",
  },
  {
    src: "/images/services/saree.png",
    alt: "Saree Embroidery",
    category: "Saree",
  },
  {
    src: "/images/services/logo.png",
    alt: "Logo Embroidery",
    category: "Logo",
  },
  {
    src: "/images/services/service-hero.png",
    alt: "Service Collection",
    category: "Work",
  },
  {
    src: "/images/team/about-1.png",
    alt: "Embroidery Details",
    category: "Work",
  },
  {
    src: "/images/team/about.jpg",
    alt: "Studio View",
    category: "Studio",
  },
  {
    src: "/images/hero/about-hero.png",
    alt: "Embroidery Collection",
    category: "Work",
  },
  {
    src: "/images/services/blouse.png",
    alt: "Blouse Work Detail",
    category: "Blouse",
  },
  {
    src: "/images/hero/hero.png",
    alt: "Embroidery Showcase",
    category: "Work",
  },
  {
    src: "/images/services/saree.png",
    alt: "Saree Detail Work",
    category: "Saree",
  },
  {
    src: "/images/services/service-hero.png",
    alt: "Service Portfolio",
    category: "Work",
  },
  {
    src: "/images/services/logo.png",
    alt: "Logo Work Sample",
    category: "Logo",
  },
  {
    src: "/images/hero/hero.png",
    alt: "Innovation Session",
    category: "Events",
  },
];

export default function GalleryPageContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/gallery-hero.png"
            alt="Gallery Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/60 to-rose-800/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
            A visual journey through our projects, team, and achievements
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Moments That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing the essence of our work, culture, and success stories
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-medium mb-1">{image.category}</p>
                      <p className="text-lg font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Full size gallery image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

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
