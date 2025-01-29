'use client';

import { useTranslations } from "next-intl";
import React from "react";
import Footer from "../Footer";
import Image from "next/image";

const ContactContent = () => {
  const t = useTranslations("ContactPage");

  const title = t("title") || "Default Title";
  const intro = t("intro") || "Default Intro Text";
  const email = t("email") || "Email";
  const emailAddress = t("emailAddress") || "contact@example.com";
  const hours = t("hours") || "Operating Hours";
  const hoursText = t("hoursText") || "Mon-Fri: 9am - 5pm";

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 py-8">
            {/* Left column - Text content */}
            <div>
              <h1 className="text-4xl font-bold mb-8 text-blue-500">{title}</h1>
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">{intro}</p>
                <div className="space-y-4">
                  <p>
                    <strong className="text-white">{email}:</strong><br />
                    {emailAddress}
                  </p>
                  <p>
                    <strong className="text-white">{hours}:</strong><br />
                    {hoursText}
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Visual content */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/microbit-robot.png"
                    alt="Microbit Robot"
                    width={280}
                    height={240}
                    className="mx-auto object-contain"
                  />
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

export default ContactContent;