
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/bcf3d8f4-a95b-4fd5-bc9b-1882487478a3.png" 
                alt="Ekartham Commerce Academy"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with world-class commerce education through expert guidance, 
              practical insights, and proven teaching methodologies.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-navy-800 hover:bg-eca-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-navy-800 hover:bg-eca-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-navy-800 hover:bg-eca-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: 'home' },
                { name: 'About Us', href: 'about' },
                { name: 'Our Courses', href: 'courses' },
                { name: 'Expert Faculty', href: 'experts' },
                { name: 'Student Reviews', href: 'reviews' },
                { name: 'Contact Us', href: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-300 hover:text-eca-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">CA Foundation</div>
                  <div className="text-sm">Chartered Accountancy Foundation</div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">CS Executive</div>
                  <div className="text-sm">Company Secretary Executive</div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">Commerce (11th & 12th)</div>
                  <div className="text-sm">Board Exam Preparation</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-eca-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  123 Education Lane,<br />
                  Commerce District,<br />
                  Mumbai, Maharashtra 400001
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-eca-green-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>+91 98765 43210</div>
                  <div>+91 87654 32109</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-eca-green-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>info@ecaacademy.com</div>
                  <div>admissions@ecaacademy.com</div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center space-x-2 bg-eca-green-600 hover:bg-eca-green-700 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">WhatsApp Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright All Rights Reserved. Powered by <a href="https://nimbusware.in" target="_blank" rel="noopener noreferrer" className="text-eca-green-400 hover:text-eca-green-300 transition-colors duration-200">nimbusware</a>. @2025.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-eca-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-eca-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-eca-green-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
