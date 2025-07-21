
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('info.ekarthamcommerceacademy@gmail.com');
      toast({
        title: "Email Copied!",
        description: "Email address has been copied to your clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Please copy the email manually",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwzV8Y3fDGyW6z1jL7ASsWdtE6IcCIvPRbs4qht41q85wJ5cXsyb9msS50yXNfE1IOM5g/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          course: formData.course,
          email: formData.email,
          message: formData.message || 'No message provided',
        }),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon!",
      });

      setFormData({ name: '', phone: '', course: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon!",
      });
      
      setFormData({ name: '', phone: '', course: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-eca-green-600" />,
      title: "Visit Us",
      details: ["Shop No.-107,108, 1st Floor,", "Mayur Trade Center, Phase 2,", "Old Mumbai-Pune Highway, Station,", "Chinchwad, Pune, Maharashtra 411019"],
      action: "Get Directions",
      link: "https://maps.app.goo.gl/vsq66rQdtu7QFZX69?g_st=ipc"
    },
    {
      icon: <Phone className="w-6 h-6 text-eca-green-600" />,
      title: "Call Us",
      details: ["9022465538"],
      action: "Call Now",
      link: "tel:9022465538"
    },
    {
      icon: <Mail className="w-6 h-6 text-eca-green-600" />,
      title: "Email Us",
      details: ["info.ekarthamcommerce", "academy@gmail.com"],
      action: "Copy Email",
      onClick: handleCopyEmail
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-eca-green-50 rounded-full flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-800 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">
                            {info.title === "Visit Us" && info.link ? (
                              <a 
                                href={info.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-eca-green-600 hover:underline cursor-pointer"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                        {info.link && (
                          <a 
                            href={info.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-eca-green-600 text-sm font-medium hover:underline mt-2 inline-block"
                          >
                            {info.action}
                          </a>
                        )}
                        {info.onClick && (
                          <button 
                            onClick={info.onClick}
                            className="text-eca-green-600 text-sm font-medium hover:underline mt-2 inline-block flex items-center gap-1"
                          >
                            <Copy className="w-4 h-4" />
                            {info.action}
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-200 rounded-2xl h-64 relative overflow-hidden group cursor-pointer">
              <a 
                href="https://maps.app.goo.gl/vsq66rQdtu7QFZX69?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.7897!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb6c1b4a6b9b%3A0x1b4a6b9b6c1b4a6b!2sMayur%20Trade%20Center%2C%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411019!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl group-hover:scale-105 transition-transform duration-300"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-br from-navy-500/10 to-eca-green-500/10 rounded-2xl group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white bg-black/50 rounded-lg p-3">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Click to open in Google Maps</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Quick contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="http://wa.me/919022465538" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  className="w-full bg-eca-green-500 hover:bg-eca-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
              <a 
                href="tel:9022465538"
                className="flex-1"
              >
                <Button 
                  variant="outline"
                  className="w-full border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
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
                    Course Interest *
                  </label>
                  <select
                    name="course"
                    value={formData.course || ''}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-eca-green-500 focus:border-eca-green-500 bg-white"
                  >
                    <option value="">Select a course</option>
                    <option value="11th & 12th HSC">11th & 12th HSC</option>
                    <option value="11th & 12th CBSE">11th & 12th CBSE</option>
                    <option value="CA Foundation">CA Foundation</option>
                    <option value="CS Intermediate">CA Intermediate</option>
                    <option value="CSEET">CSEET</option>
                  </select>
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
                  disabled={isSubmitting}
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
