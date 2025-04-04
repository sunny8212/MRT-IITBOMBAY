
import React from 'react';
import { Rocket, Globe, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Feature = ({ icon, title, description, className }: FeatureProps) => (
  <div className={cn("bg-space-light/50 rounded-xl p-6 backdrop-blur-sm", className)}>
    <div className="mb-4 inline-block p-3 bg-gradient-to-br from-mars/20 to-cosmic/20 rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 font-technospace">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-space-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-mars/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cosmic/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            We are a team of passionate students from IIT Bombay dedicated to building rovers
            that can explore the harsh Martian terrain and conduct scientific research.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Feature 
            icon={<Rocket className="h-6 w-6 text-mars" />}
            title="Innovation"
            description="Pushing the boundaries of rover technology with cutting-edge designs and solutions."
            className="transform hover:-translate-y-2 transition-transform duration-300"
          />
          <Feature 
            icon={<Globe className="h-6 w-6 text-cosmic" />}
            title="Collaboration"
            description="Working with industry experts and researchers to create rovers that meet real mission requirements."
            className="transform hover:-translate-y-2 transition-transform duration-300 lg:mt-8"
          />
          <Feature 
            icon={<Star className="h-6 w-6 text-mars" />}
            title="Excellence"
            description="Consistently achieving high standards in international rover competitions and challenges."
            className="transform hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
        
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 font-technospace">Our Journey</h3>
            <p className="text-white/80 mb-4">
              Founded in 2014, the IIT Bombay Mars Rover Team has been at the forefront of 
              student-led space exploration initiatives in India. We started with a simple goal:
              to build a functioning Mars rover prototype.
            </p>
            <p className="text-white/80 mb-4">
              Today, we've evolved into a multidisciplinary team that designs, builds, and 
              tests rovers that can navigate challenging terrains, collect samples, and perform
              sophisticated scientific experiments.
            </p>
            <div className="flex space-x-6 mt-8">
              <div>
                <p className="text-3xl font-bold text-mars">25+</p>
                <p className="text-white/70">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cosmic">8+</p>
                <p className="text-white/70">Competitions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-mars">5+</p>
                <p className="text-white/70">Rover Prototypes</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-mars/20 to-cosmic/20 rounded-xl blur-xl"></div>
            <img 
              src="https://via.placeholder.com/600x400?text=Team+Working" 
              alt="Team Working on Rover" 
              className="relative rounded-xl shadow-lg"
            />
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 border border-mars/30 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border border-cosmic/30 rounded-lg -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
