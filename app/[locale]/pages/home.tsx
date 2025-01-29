"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Footer from "@/components/Footer";
import AnimatedMicrobit from "@/components/AnimatedMicrobit";

const HomeContent = () => {
  const t = useTranslations("HomePage");
  const description = t("description");

  return (
    <div style={{backgroundColor: '#141414'}} className="min-h-screen flex flex-col relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden flex-grow">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="relative z-10">
              <h1 className="text-8xl font-bold mb-8"> {/* Changed from text-7xl to text-8xl */}
                <span className="text-white">{t("headingPart1")}.</span>
                <br />
                <span className="text-blue-500">{t("headingPart2")}.</span>
              </h1>
              <p className="text-3xl text-gray-300 mb-10 max-w-2xl leading-relaxed"> {/* Changed from text-2xl to text-3xl and max-w-xl to max-w-2xl */}
                {description}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3"> {/* Changed from text-lg to text-xl */}
                {t("startLearning")}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Changed from w-5 h-5 to w-6 h-6 */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right column - Visual content */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <AnimatedMicrobit />
              </div>
              <div className="absolute top-10 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>

        
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeContent;