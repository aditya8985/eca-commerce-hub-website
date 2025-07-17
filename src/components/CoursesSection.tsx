
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calculator, FileText, Clock, Users } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "11th & 12th HSC",
      icon: <GraduationCap className="w-8 h-8 text-eca-green-600" />,
      description: "Comprehensive HSC Commerce program with focus on state board excellence and conceptual clarity.",
      subjects: ["Accounts", "Economics", "Organization of commerce and management (O.C.M)", "Business Mathematics", "Secretarial Practice (S.P.)"],
      duration: "2 Years",
      batchSize: "20-25 Students",
      features: ["Case Study Analysis", "Industry Expert Sessions", "Regular Assessments", "Career Guidance", "Recorded lectures"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "11th & 12th CBSE",
      icon: <GraduationCap className="w-8 h-8 text-eca-green-600" />,
      description: "Comprehensive CBSE Commerce program designed for national board excellence and strong foundation building.",
      subjects: ["Accounts", "Economics", "Organization of commerce and management (O.C.M)", "Business Mathematics", "Secretarial Practice (S.P.)"],
      duration: "2 Years",
      batchSize: "20-25 Students",
      features: ["Case Study Analysis", "Industry Expert Sessions", "Regular Assessments", "Career Guidance", "Recorded lectures"],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "CA Foundation",
      icon: <Calculator className="w-8 h-8 text-eca-green-600" />,
      description: "Comprehensive preparation for Chartered Accountancy Foundation level with expert guidance and practice.",
      subjects: ["Accounts", "Law", "Mathematics", "Economics"],
      duration: "6-12 Months",
      batchSize: "15-20 Students",
      features: ["Case Study Analysis", "Industry Expert Sessions", "Regular Assessments", "Career Guidance", "Recorded lectures"],
      color: "bg-eca-green-500"
    },
    {
      id: 4,
      title: "CA Intermediate - Part 1",
      icon: <Calculator className="w-8 h-8 text-eca-green-600" />,
      description: "Advanced preparation for CA Intermediate Part 1 with comprehensive coverage of all subjects.",
      subjects: ["Advanced Accounting", "Corporate Laws", "Cost Management", "Taxation"],
      duration: "3 Months",
      batchSize: "12-18 Students",
      features: ["Case Study Analysis", "Industry Expert Sessions", "Regular Assessments", "Career Guidance", "Recorded lectures"],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "CA Intermediate - Part 2",
      icon: <Calculator className="w-8 h-8 text-eca-green-600" />,
      description: "Advanced preparation for CA Intermediate Part 2 with comprehensive coverage of all subjects.",
      subjects: ["Auditing", "Financial Management", "Advanced Taxation", "Corporate Laws"],
      duration: "3 Months",
      batchSize: "12-18 Students",
      features: ["Case Study Analysis", "Industry Expert Sessions", "Regular Assessments", "Career Guidance", "Recorded lectures"],
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "CS EET",
      icon: <FileText className="w-8 h-8 text-eca-green-600" />,
      description: "Complete preparation for Company Secretary Executive Entrance Test with focused training and practice.",
      subjects: ["Business communication", "Logical reasoning and legal aptitude", "Economics and business environment", "Current affairs and quantitative aptitude"],
      duration: "3 Months",
      batchSize: "15-20 Students",
      features: ["Case Study Analysis", "Industry Expert Sessions", "Regular Assessments", "Career Guidance", "Recorded lectures"],
      color: "bg-teal-500"
    }
  ];

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full font-medium mb-6">
            Our Courses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Specialized <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully designed courses that cater to different career paths in commerce and finance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={course.id} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
              {/* Header with gradient */}
              <div className={`${course.color} p-6 text-white relative`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                </div>
                <p className="text-gray-100 text-sm leading-relaxed">{course.description}</p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full opacity-50"></div>
                <div className="absolute -bottom-2 -right-4 w-24 h-24 bg-white/5 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-eca-green-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-eca-green-600" />
                    <span>{course.batchSize}</span>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-800 mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-eca-green-600" />
                    Key Subjects
                  </h4>
                  <div className="space-y-2">
                    {course.subjects.map((subject, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-800 mb-3">Course Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-eca-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollTo('contact')}
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 bg-gradient-to-r from-navy-50 to-eca-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-navy-800 mb-4">
              Not Sure Which Course is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert counselors are here to help you choose the perfect course based on your career goals and academic background.
            </p>
            <Button 
              onClick={() => scrollTo('contact')}
              size="lg"
              className="bg-eca-green-500 hover:bg-eca-green-600 text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get Free Counseling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
