import React from 'react';

const VideoSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full font-medium mb-6">
            Campus Life
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Experience <span className="gradient-text">ECA in Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a glimpse of our vibrant classroom environment, expert teaching methods, and student success stories.
          </p>
        </div>

        {/* YouTube Short */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1TFJSGHm-HM"
              title="ECA Academy Campus Life"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
              style={{ minHeight: '200px' }}
            ></iframe>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy-800 mb-4">
              Campus Life Gallery
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant atmosphere of our campus through these moments captured during our events and celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/lovable-uploads/ede1b95b-3bbe-4511-be57-21874d025d7e.png" 
                alt="ECA Campus Life - Students celebrating"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/lovable-uploads/ee5edfb6-cf60-41d8-a9c0-b090ff055500.png" 
                alt="ECA Campus Life - Faculty and students"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/lovable-uploads/8f515c7b-da0b-48e8-8768-5680db369951.png" 
                alt="ECA Campus Life - Professional team"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/lovable-uploads/b9148f5c-da1e-4262-96f2-00b9aff9999a.png" 
                alt="ECA Campus Life - Team celebration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/lovable-uploads/6d3ef67d-1b1c-4107-a091-15a5a2316a98.png" 
                alt="ECA Campus Life - Student group"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/lovable-uploads/04ed515d-ff10-4f32-8ef7-8f2ab7f98193.png" 
                alt="ECA Campus Life - Faculty members"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-eca-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Interactive Learning</h3>
            <p className="text-gray-600 text-sm">
              Engaging classroom sessions with hands-on learning and practical applications.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-eca-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Collaborative Environment</h3>
            <p className="text-gray-600 text-sm">
              Students working together, sharing ideas, and building lasting professional networks.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-eca-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Success Celebrations</h3>
            <p className="text-gray-600 text-sm">
              Celebrating every achievement and milestone with our successful students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;