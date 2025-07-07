
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-eca-green-600" />,
      title: "Visit Us",
      details: ["123 Education Lane", "Commerce District", "Mumbai, Maharashtra 400001"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-eca-green-600" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-eca-green-600" />,
      title: "Email Us",
      details: ["info@ecaacademy.com", "admissions@ecaacademy.com"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6 text-eca-green-600" />,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      action: "Visit Schedule"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Start Your <span className="gradient-text">Success Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Get in touch with us for admissions, course details, or any queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-navy-800 mb-6">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-eca-green-50 rounded-full flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-800 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-500/20 to-eca-green-500/20"></div>
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-navy-800 mb-2">ECA Academy Location</h4>
                <p className="text-gray-600 text-sm">
                  Interactive map will be embedded here
                  <br />
                  showing our exact location
                </p>
              </div>
              
              {/* Decorative map elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-eca-green-500 rounded-full"></div>
              <div className="absolute bottom-6 right-8 w-2 h-2 bg-navy-500 rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-eca-green-400 rounded-full opacity-60"></div>
            </div>

            {/* Quick contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-eca-green-500 hover:bg-eca-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
              <Button 
                variant="outline"
                className="flex-1 border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl">
              <h3 className="text-2xl font-playfair font-bold text-navy-800 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300 focus:border-eca-green-500 focus:ring-eca-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="border-gray-300 focus:border-eca-green-500 focus:ring-eca-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="border-gray-300 focus:border-eca-green-500 focus:ring-eca-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your course interest, queries, or any specific requirements..."
                    rows={4}
                    className="border-gray-300 focus:border-eca-green-500 focus:ring-eca-green-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
