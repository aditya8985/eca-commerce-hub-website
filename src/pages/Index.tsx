
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestSeriesSection from '@/components/TestSeriesSection';
import CoursesSection from '@/components/CoursesSection';
import ExpertsSection from '@/components/ExpertsSection';
import ReviewsSection from '@/components/ReviewsSection';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestSeriesSection />
        <CoursesSection />
        <ExpertsSection />
        <ReviewsSection />
        <VideoSection />
        <ContactSection />
      </main>
      
      {/* Simple Copyright Footer */}
      <footer className="bg-navy-900 text-center py-6">
        <p className="text-gray-400 text-sm">
          Copyright All Rights Reserved. Powered by <a href="https://nimbusware.in" target="_blank" rel="noopener noreferrer" className="text-eca-green-400 hover:text-eca-green-300 transition-colors duration-200">nimbusware</a>. @2025.
        </p>
      </footer>
      
      <FloatingButtons />
    </div>
  );
};

export default Index;
