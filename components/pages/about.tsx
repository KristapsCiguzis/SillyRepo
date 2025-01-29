'use client';

import { useTranslations } from "next-intl";
import React from "react";
import Footer from "../Footer";
import AnimatedMicrobit from "../AnimatedMicrobit";

const AboutContent = () => {
  const t = useTranslations("AboutPage");

  const title = t("title") || "Default Title";
  const text1 = t("text1") || "Default text 1";
  const text2 = t("text2") || "Default text 2";
  const text3 = t("text3") || "Default text 3";
  const text4 = t("text4") || "Default text 4";

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 py-8">
            {/* Left column - Text content */}
            <div>
              <h1 className="text-4xl font-bold mb-8 text-blue-500">{title}</h1>
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">{text1}</p>
                <p className="leading-relaxed">{text2}</p>
                <p className="leading-relaxed">{text3}</p>
                <p className="leading-relaxed">{text4}</p>
              </div>
            </div>

            {/* Right column - Visual content */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                  <AnimatedMicrobit />
                </div>
                <div className="absolute top-10 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutContent;