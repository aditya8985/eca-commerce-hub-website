
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

        {/* Video placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-navy-600 to-eca-green-500 rounded-2xl overflow-hidden shadow-2xl">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-800/40 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ECA Campus Highlights
                </h3>
                <p className="text-gray-200 max-w-2xl">
                  Watch our students excel in interactive learning sessions, expert lectures, 
                  and success celebrations that make ECA a special place to learn and grow.
                </p>
              </div>

              {/* Play button */}
              <Button
                onClick={() => setIsVideoOpen(true)}
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-sm rounded-full w-20 h-20 p-0 transition-all duration-300 hover:scale-110 group"
              >
                <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform duration-300" />
              </Button>

              <p className="mt-4 text-sm text-gray-300">Click to watch our campus highlights</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-16 right-16 w-32 h-32 bg-eca-green-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Video stats overlay */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 min-w-max">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-navy-800">2M+</div>
                <div className="text-xs text-gray-600">Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-eca-green-600">15K+</div>
                <div className="text-xs text-gray-600">Likes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-800">500+</div>
                <div className="text-xs text-gray-600">Shares</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for video (placeholder) */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full mx-4">
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Close button */}
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    onClick={() => setIsVideoOpen(false)}
                    variant="outline"
                    size="sm"
                    className="bg-white/90 hover:bg-white rounded-full w-10 h-10 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Video placeholder */}
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">ECA Campus Highlights Video</p>
                    <p className="text-sm text-gray-400">
                      This is a placeholder for your Instagram reel or campus video.
                      <br />
                      Replace this with your actual video embed code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
