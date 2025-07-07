
import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-eca-green-600" />,
      title: "Expert-Led Learning",
      description: "Learn from industry professionals with real-world experience in finance, accounting, and law."
    },
    {
      icon: <Users className="w-8 h-8 text-eca-green-600" />,
      title: "Personalized Attention",
      description: "Small batch sizes ensure individual attention and customized learning paths for every student."
    },
    {
      icon: <Award className="w-8 h-8 text-eca-green-600" />,
      title: "Proven Track Record",
      description: "95% success rate with students excelling in CA Foundation, CS Executive, and Commerce exams."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-eca-green-600" />,
      title: "Comprehensive Curriculum",
      description: "Updated curriculum aligned with latest exam patterns and industry requirements."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full font-medium mb-6">
            About ECA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Premier Commerce <span className="gradient-text">Coaching Academy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ECA (Ekartham Commerce Academy) is a leading institution dedicated to excellence in commerce education, 
            specializing in CA Foundation, CS Executive, and Commerce (11th & 12th) preparation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-navy-800 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Empowering students with comprehensive, real-world education in finance, accounting, law, and economics. 
              We bridge the gap between theoretical knowledge and practical application, preparing students for successful 
              careers in commerce and finance.
            </p>
            
            <div className="bg-gradient-to-r from-eca-green-50 to-navy-50 p-6 rounded-xl border-l-4 border-eca-green-500">
              <h4 className="font-semibold text-navy-800 mb-2">Why Choose ECA?</h4>
              <p className="text-gray-700">
                Our unique teaching methodology combines traditional academic rigor with modern pedagogical techniques, 
                ensuring students not only pass their exams but excel in their chosen careers.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-600 to-eca-green-500 rounded-2xl p-8 text-white">
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-2">Our Vision</h4>
                <p className="text-gray-100 leading-relaxed">
                  To be the most trusted and respected commerce education institution, 
                  known for producing confident, competent, and successful professionals.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-eca-green-300">8+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-eca-green-300">1000+</div>
                  <div className="text-sm text-gray-200">Success Stories</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-eca-green-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-eca-green-100 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-navy-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
