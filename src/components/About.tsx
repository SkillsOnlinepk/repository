import React from 'react';
import { Sparkles, Users, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Skills Online
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of digital creativity with AI-powered content generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              We democratize creative content creation by making cutting-edge AI technology accessible to everyone. 
              Our platform empowers creators, businesses, and individuals to produce stunning visual content without 
              traditional barriers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <Target className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the leading marketplace for AI-generated digital assets, fostering a community where 
              technology and creativity converge to produce extraordinary results that inspire and transform.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Why Choose Skills Online?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Premium Quality</h4>
              <p className="text-gray-300">Every asset is carefully curated and meets our high standards for quality and originality.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Community Driven</h4>
              <p className="text-gray-300">Join a vibrant community of creators and innovators pushing the boundaries of digital art.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-gray-300">We continuously invest in the latest AI technologies to deliver cutting-edge results.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Creative Process?</h3>
          <p className="text-gray-300 mb-6">
            Join thousands of creators who have already discovered the power of AI-generated content.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
            Start Creating Today
          </button>
        </div>
      </div>
    </section>
  );
}