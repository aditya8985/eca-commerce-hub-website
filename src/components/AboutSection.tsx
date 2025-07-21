
import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Users, Award, Video, FileText, CheckSquare } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-eca-green-600" />,
      title: "Young and expert faculty",
      description: "Learn from young, dynamic professionals with real-world experience in finance, accounting, and law."
    },
    {
      icon: <Users className="w-8 h-8 text-eca-green-600" />,
      title: "Personalized attention",
      description: "Small batch sizes ensure individual attention and customized learning paths for every student."
    },
    {
      icon: <Award className="w-8 h-8 text-eca-green-600" />,
      title: "Proven track record",
      description: "95% success rate with students excelling in CA Foundation, CSEET, and Commerce exams."
    },
    {
      icon: <Video className="w-8 h-8 text-eca-green-600" />,
      title: "Unlimited views for recorded lectures",
      description: "Access recorded lectures anytime, anywhere with unlimited viewing facility for better understanding."
    },
    {
      icon: <FileText className="w-8 h-8 text-eca-green-600" />,
      title: "Colourful handwritten notes",
      description: "Comprehensive handwritten notes with colorful diagrams and illustrations for better retention."
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-eca-green-600" />,
      title: "Chapterwise test series",
      description: "Regular chapter-wise assessments to track progress and strengthen weak areas effectively."
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
            specializing in CA Foundation, CSEET, CA Intermediate, and Commerce (11th & 12th) HSC/CBSE Preparation.
          </p>
        </div>

        <div className="mb-16">
          {/* Why Choose ECA Section - Enlarged */}
          <div className="bg-gradient-to-r from-eca-green-50 to-navy-50 p-12 rounded-2xl border-l-8 border-eca-green-500 shadow-lg">
            <h3 className="text-4xl font-playfair font-bold text-navy-800 mb-8 text-center">Why Choose ECA?</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                Our unique teaching methodology combines traditional academic rigor with modern pedagogical techniques, 
                ensuring students not only pass their exams but excel in their chosen careers.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-2xl font-bold text-navy-800 mb-4">8+ Years Experience</h4>
                  <p className="text-gray-700">Proven track record of excellence in commerce education with consistent results.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-2xl font-bold text-navy-800 mb-4">1000+ Success Stories</h4>
                  <p className="text-gray-700">Thousands of students have achieved their dreams through our comprehensive programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
