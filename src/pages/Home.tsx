import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import ProblemsSection from "@/components/ProblemsSection";
import UsersSection from "@/components/UsersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CredibilitySection from "@/components/CredibilitySection";
import ChatbotSection from "@/components/ChatbotSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <ProblemsSection />
        <UsersSection />
        <HowItWorksSection />
        <CredibilitySection />
        <ChatbotSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
