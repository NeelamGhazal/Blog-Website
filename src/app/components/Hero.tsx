"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the type for each slide
interface Slide {
  title: string;
  description: string;
  imageUrl: string;
}

// Props interface for the HeroSlider component
interface HeroSliderProps {
  slides: Slide[];
}

const Hero: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative h-[60vh] mb-8 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <Link
                href="/all-blogs"
                className="bg-pink-500 text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600 transition-colors inline-block"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
