
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  achievements: string[];
  isRight?: boolean;
}

const TimelineItem = ({ year, title, description, image, achievements, isRight = false }: TimelineItemProps) => (
  <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}>
    <div className="md:w-1/2">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-mars/20 to-cosmic/20 rounded-xl blur-lg"></div>
        <img 
          src={image} 
          alt={title} 
          className="relative rounded-xl w-full h-auto z-10"
        />
      </div>
    </div>
    <div className="md:w-1/2">
      <div className="bg-mars/20 text-white text-lg font-medium py-1 px-4 rounded-full inline-block mb-4">
        {year}
      </div>
      <h2 className="text-3xl font-bold mb-4 font-technospace">{title}</h2>
      <p className="text-white/80 mb-6">{description}</p>
      
      <h3 className="text-xl font-semibold mb-3 font-technospace">Key Achievements:</h3>
      <ul className="space-y-2 mb-6">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-cosmic/30 flex-shrink-0 mr-3 mt-1"></span>
            <span className="text-white/80">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const RoverPage = () => {
  const rovers = [
    {
      year: "2018",
      title: "Rover Alpha",
      description: "Our first prototype rover designed to establish core mobility and basic operation systems. This marked the beginning of our journey into rover development.",
      image: "https://via.placeholder.com/600x400?text=Rover+Alpha",
      achievements: [
        "Established the foundation of our rover design architecture",
        "Developed basic drive systems and control mechanisms",
        "First participation in a national-level competition"
      ]
    },
    {
      year: "2019",
      title: "Rover Beta",
      description: "Building on our experience, Rover Beta featured improved mobility and our first attempt at a robotic arm system for basic manipulation tasks.",
      image: "https://via.placeholder.com/600x400?text=Rover+Beta",
      achievements: [
        "Enhanced suspension system for improved terrain handling",
        "Implemented first-generation robotic arm with 3 degrees of freedom",
        "Ranked in top 10 at IRC 2019"
      ]
    },
    {
      year: "2020",
      title: "Rover Gamma",
      description: "Gamma represented a significant advancement in our design philosophy, with a focus on robust electronics and initial autonomous capabilities.",
      image: "https://via.placeholder.com/600x400?text=Rover+Gamma",
      achievements: [
        "Developed custom PCBs for improved system integration",
        "Implemented basic autonomous navigation features",
        "Enhanced robotic arm with 5 degrees of freedom and precision grippers"
      ]
    },
    {
      year: "2021",
      title: "Rover Delta",
      description: "Delta featured a complete redesign with advanced suspension systems and significant improvements in autonomy and manipulation capabilities.",
      image: "https://via.placeholder.com/600x400?text=Rover+Delta",
      achievements: [
        "Designed and implemented a rocker-bogie suspension system",
        "Advanced computer vision system for obstacle detection",
        "Qualified for University Rover Challenge for the first time"
      ]
    },
    {
      year: "2022",
      title: "Rover Epsilon",
      description: "Epsilon pushed our technological boundaries with integrated science packages and advanced autonomous navigation using AI algorithms.",
      image: "https://via.placeholder.com/600x400?text=Rover+Epsilon",
      achievements: [
        "Integrated soil analysis and life detection capabilities",
        "Implemented neural network-based terrain classification",
        "Secured Excellence Award at ERC 2022 in Navigation Task"
      ]
    },
    {
      year: "2023",
      title: "Rover Zeta",
      description: "Our most advanced rover to date, Zeta combines years of learning with cutting-edge technology to create a truly capable extraterrestrial explorer.",
      image: "https://via.placeholder.com/600x400?text=Rover+Zeta",
      achievements: [
        "Advanced autonomous navigation with SLAM and path planning",
        "High-precision sample collection and analysis system",
        "Secured top Indian team position at URC 2023"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-space">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-space-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-mars/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-cosmic/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="section-title">Rovers Through The Years</h1>
            <p className="section-subtitle">
              Explore our journey of rover development, from our first prototype to our current competition-ready designs.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-mars via-cosmic to-mars hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {rovers.map((rover, index) => (
                <TimelineItem 
                  key={index} 
                  {...rover} 
                  isRight={index % 2 === 1}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 font-technospace">The Future of Our Rovers</h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              As we continue to innovate and push the boundaries of what's possible, 
              our next generation of rovers will feature even more advanced technologies, 
              including swarm robotics, AI-powered decision making, and advanced materials 
              designed specifically for the harsh conditions of Mars.
            </p>
            <Button className="bg-gradient-to-r from-mars to-cosmic hover:opacity-90 text-white px-8 py-6">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RoverPage;
