import React from 'react';
import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const ExpertsSection = () => {
  const experts = [
    {
      id: 1,
      name: "CA Sejal Mittal",
      credentials: "CA, B.Com",
      speciality: "Accounting, Taxation, Audit",
      image: "/lovable-uploads/e025a292-3f98-4493-8bcb-8a8ce6060e07.png",
      quote: "Work on YOU and Work for YOU.",
      experience: "9+ Years",
      students: "350+",
      expertise: ["Advanced Accounting", "GST & Tax Planning", "Internal Audit", "Financial Reporting"]
    },
    {
      id: 2,
      name: "Prof. Asif Khan",
      speciality: "Mathematics & Statistics", 
      image: "/lovable-uploads/022e96be-9ed6-45ec-ba36-7588b1cb7ceb.png",
      quote: "Let's take the fear out of numbers and turn learning into an exciting, rewarding experience!",
      experience: "8+ Years",
      students: "500+",
      expertise: ["Business Mathematics", "Statistics", "Quantitative Techniques", "Data Analysis"]
    },
    {
      id: 3,
      name: "Adv. Priya Patni",
      credentials: "B.Com, LLM",
      speciality: "Corporate & Legal Education",
      image: "/lovable-uploads/708e0f81-4137-4846-9cea-cae1b60f9915.png",
      quote: "Mentoring over 500 students with practical legal insights.",
      experience: "6+ Years",
      students: "500+",
      expertise: ["Corporate Law", "Business Laws", "Contract Law", "Legal Compliance"]
    },
    {
      id: 4,
      name: "Prof. Priyanka Pal",
      speciality: "Economics",
      image: "/lovable-uploads/8c8f0f2f-17bd-4b3e-9e42-11999a065373.png",
      quote: "Bringing clarity to complex economic concepts.",
      experience: "11+ Years",
      students: "400+",
      expertise: ["Micro & Macro Economics", "Economic Analysis", "Business Economics"]
    },
    {
      id: 5,
      name: "CA Ritesh Pal",
      credentials: "CA, M.Com, LLB",
      speciality: "Taxation, Auditing, Law",
      image: "/lovable-uploads/dd1fdcc5-0124-4ce8-b02e-612fdff5db14.png",
      quote: "Building strong financial foundations for future success.",
      experience: "8+ Years",
      students: "500+",
      expertise: ["Direct & Indirect Taxation", "Financial Audit", "Corporate Law", "Financial Planning"]
    },
    {
      id: 6,
      name: "CA. Priyam Taneja",
      credentials: "CA, BCom",
      speciality: "Finance, Taxation, Auditing, Accounting",
      image: "/lovable-uploads/9c6de008-e938-48bb-a0c4-91859c1e1e58.png",
      quote: "Worked at Morgan Stanley & UBS. My success mantra: Chase excellence.",
      experience: "8+ Years",
      students: "200+",
      expertise: ["Investment Banking", "Financial Analysis", "Advanced Taxation", "Audit & Assurance"],
      highlight: "Ex-Morgan Stanley & UBS"
    }
  ];

  return (
    <section id="experts" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full font-medium mb-6">
            Our Expert Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Learn from <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished faculty brings decades of combined experience from top institutions and corporations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card key={expert.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
              {/* Header with image */}
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                

                {/* Highlight badge if exists */}
                {expert.highlight && (
                  <div className="absolute bottom-4 left-4 bg-eca-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {expert.highlight}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name and credentials */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy-800 mb-1">{expert.name}</h3>
                  {expert.credentials && (
                    <p className="text-sm font-medium text-eca-green-600 mb-1">{expert.credentials}</p>
                  )}
                  <p className="text-sm text-gray-600">{expert.speciality}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center bg-navy-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-navy-800">{expert.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                  <div className="text-center bg-eca-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-eca-green-700">{expert.students}</div>
                    <div className="text-xs text-gray-600">Students Taught</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-eca-green-200" />
                  <p className="text-sm text-gray-700 italic leading-relaxed pl-6">
                    "{expert.quote}"
                  </p>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-sm font-semibold text-navy-800 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="mt-16 text-center bg-gradient-to-r from-navy-600 to-eca-green-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Ready to Learn from the Best?
          </h3>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers under the guidance of our expert faculty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span>4.9/5 Average Faculty Rating</span>
            </div>
            <div className="text-sm">•</div>
            <div className="text-sm">500+ Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
