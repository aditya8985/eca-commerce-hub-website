
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c993ba84-2fcd-4d50-8c3e-a3f26f9b1a54.png')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-eca-green-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-navy-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-eca-green-300/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-eca-green-100 text-eca-green-800 rounded-full font-medium mb-6">
            <span className="w-2 h-2 bg-eca-green-500 rounded-full mr-2 animate-pulse"></span>
            Premier Commerce Education
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            <span className="block">Ekartham</span>
            <span className="block text-eca-green-400">
              Commerce Academy
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Shaping Future Commerce Leaders
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering students with world-class education in CA Foundation, CS EET, CA Intermediate, and Commerce (11th & 12th) HSC/CBSE Preparation through expert guidance and practical insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-32">
            <Button 
              onClick={() => scrollTo('test-series')}
              size="default"
              className="bg-eca-green-500 hover:bg-eca-green-600 text-white px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Test Series
            </Button>
            <Button 
              onClick={() => scrollTo('courses')}
              variant="outline"
              size="default"
              className="border-2 border-white text-navy-800 bg-white hover:bg-white hover:text-navy-800 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl"
            >
              Explore Courses
            </Button>
            <Button 
              onClick={() => scrollTo('contact')}
              variant="outline"
              size="default"
              className="border-2 border-white text-navy-800 bg-white hover:bg-white hover:text-navy-800 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl"
            >
              Free Counseling
            </Button>
          </div>
        </div>
      </div>

      {/* Stats section at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-300">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">6+</div>
              <div className="text-sm text-gray-300">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">4</div>
              <div className="text-sm text-gray-300">Specialized Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
