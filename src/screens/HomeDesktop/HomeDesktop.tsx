import React from "react";
import { ClientFeedbackSection } from "./sections/ClientFeedbackSection/ClientFeedbackSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialSection } from "./sections/TestimonialSection/TestimonialSection";

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative" data-model-id="9203:61544">
      <HeroSection />
      <HeaderSection />
      <ServicesSection />
      <ContactSection />
      <TestimonialSection />
      <ClientFeedbackSection />
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
