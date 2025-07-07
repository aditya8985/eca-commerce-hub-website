
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, GraduationCap, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi! I'm interested in ECA courses. Can you provide more details?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      {showWhatsApp && (
        <div className="relative animate-fade-in">
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 group">
            <div 
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6" />
            </div>
            
            {/* Close button for WhatsApp */}
            <button
              onClick={() => setShowWhatsApp(false)}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          
          {/* WhatsApp tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Enroll Now Button */}
      <div className="relative animate-fade-in">
        <Button
          onClick={() => scrollTo('contact')}
          className="bg-navy-600 hover:bg-navy-700 text-white rounded-full px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center space-x-2"
        >
          <GraduationCap className="w-5 h-5" />
          <span className="font-semibold">Enroll Now</span>
        </Button>
        
        {/* Enroll tooltip */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Start your success journey
          <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      </div>

      {/* Floating pulse animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-navy-600/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-20 h-20 bg-eca-green-500/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default FloatingButtons;
