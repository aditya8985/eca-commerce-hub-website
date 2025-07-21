
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sejal",
      course: "CA Foundation",
      image: "/lovable-uploads/7a738f0f-d125-49a5-af45-47e1cf635641.png",
      rating: 5,
      review: "ECA transformed my understanding of accounting. The faculty's teaching method made complex concepts simple. I cleared CA Foundation in first attempt with distinction!",
      achievement: "CA Foundation - First Attempt with Distinction",
      date: "2024"
    },
    {
      id: 2,
      name: "Asif",
      course: "CS Executive",
      image: "/lovable-uploads/c58eba38-3156-4ef6-9688-a07b0afedf5c.png",
      rating: 5,
      review: "The practical approach and case studies at ECA gave me real-world insights. The doubt clearing sessions were incredibly helpful. Highly recommend for CS preparation!",
      achievement: "CS Executive - All Papers Cleared",
      date: "2024"
    },
    {
      id: 3,
      name: "Priya",
      course: "Commerce 12th",
      image: "/lovable-uploads/cb4bfde7-dee8-49bd-90f6-3b98df9c8a75.png",
      rating: 5,
      review: "Scored 94% in 12th boards thanks to ECA's systematic approach. The teachers are not just knowledgeable but also very supportive and encouraging.",
      achievement: "12th Commerce - 94% Score",
      date: "2024"
    },
    {
      id: 4,
      name: "Priyanka",
      course: "CA Foundation",
      image: "/lovable-uploads/1c6ba47a-1557-47f3-b0f3-600857f3b7a7.png",
      rating: 5,
      review: "ECA's mock tests and regular assessments kept me on track. The individual attention from faculty helped me overcome my weak areas effectively.",
      achievement: "CA Foundation - Top 10 Rank",
      date: "2023"
    },
    {
      id: 5,
      name: "Ritesh",
      course: "CS Executive",
      image: "/lovable-uploads/6af683b3-cc53-4b61-a652-1212ce54716d.png",
      rating: 5,
      review: "The faculty at ECA brings industry experience to classroom. This practical knowledge was invaluable for my CS Executive preparation and career growth.",
      achievement: "CS Executive + Job at MNC",
      date: "2023"
    },
    {
      id: 6,
      name: "Priyam",
      course: "Commerce 11th",
      image: "/lovable-uploads/415bbe7a-07b0-4a0b-a58c-742b0cb95b43.png",
      rating: 5,
      review: "ECA built my foundation strong in commerce. The conceptual clarity I gained here is helping me excel in advanced courses. Great teaching methodology!",
      achievement: "11th Commerce - 96% Score",
      date: "2024"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full font-medium mb-6">
            Student Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful students have to say about their ECA experience.
          </p>
        </div>

        {/* Main Review Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden bg-gradient-to-br from-navy-50 to-eca-green-50 border-0 shadow-xl">
            <div className="p-8 md:p-12 relative">
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-eca-green-200" />
              
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Student image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-eca-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-lg font-bold">{currentReview + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Review content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start items-center space-x-1 mb-4">
                    {renderStars(reviews[currentReview].rating)}
                    <span className="ml-2 text-sm text-gray-600">({reviews[currentReview].rating}/5)</span>
                  </div>

                  {/* Review text */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{reviews[currentReview].review}"
                  </p>

                  {/* Student info */}
                  <div>
                    <h4 className="text-xl font-bold text-navy-800 mb-1">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-eca-green-600 font-medium mb-2">
                      {reviews[currentReview].course}
                    </p>
                    <div className="inline-flex items-center bg-white/60 px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-navy-700">
                        {reviews[currentReview].achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4">
                <button
                  onClick={prevReview}
                  className="bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ArrowLeft className="w-5 h-5 text-navy-600" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4">
                <button
                  onClick={nextReview}
                  className="bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5 text-navy-600" />
                </button>
              </div>
            </div>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview
                    ? 'bg-eca-green-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="bg-gradient-to-r from-navy-600 to-eca-green-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm text-gray-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-200">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-sm text-gray-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8+</div>
              <div className="text-sm text-gray-200">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
