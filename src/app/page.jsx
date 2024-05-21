"use client"
import { useState, useEffect } from "react";
import { About } from "@/components/landing page/AboutOverview";
import { HeroSection } from "@/components/landing page/HeroSection";

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Hide the alert after 3 seconds
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showAlert && (
        <div role="alert" className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>This website is on development</span>
        </div>
      )}
      <main>
        <HeroSection />
        <About />
      </main>
    </>
  );
}
