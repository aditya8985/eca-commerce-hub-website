
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
import Footer from '@/components/Footer';

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
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
