
import React from 'react';
import { Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  website?: string;
}

const TeamMember = ({ name, role, image, linkedin, website }: TeamMemberProps) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-xl mb-4 bg-space-light/20">
      <div className="absolute inset-0 bg-gradient-to-t from-space via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex space-x-2">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-cosmic/20 hover:bg-cosmic/40 rounded-full text-white transition-colors">
              <Linkedin size={16} />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="p-2 bg-mars/20 hover:bg-mars/40 rounded-full text-white transition-colors">
              <Globe size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
    <h3 className="text-lg font-bold font-technospace">{name}</h3>
    <p className="text-white/70 text-sm">{role}</p>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arjun Kumar",
      role: "Team Lead",
      image: "https://via.placeholder.com/300x300?text=A",
      linkedin: "#",
      website: "#"
    },
    {
      name: "Priya Sharma",
      role: "Mechanical Lead",
      image: "https://via.placeholder.com/300x300?text=P",
      linkedin: "#"
    },
    {
      name: "Rahul Patel",
      role: "Electronics Lead",
      image: "https://via.placeholder.com/300x300?text=R",
      linkedin: "#",
      website: "#"
    },
    {
      name: "Sanya Gupta",
      role: "Software Lead",
      image: "https://via.placeholder.com/300x300?text=S",
      linkedin: "#"
    },
    {
      name: "Vikram Singh",
      role: "Science Lead",
      image: "https://via.placeholder.com/300x300?text=V",
      website: "#"
    },
    {
      name: "Neha Reddy",
      role: "Operations Lead",
      image: "https://via.placeholder.com/300x300?text=N",
      linkedin: "#"
    },
    {
      name: "Aditya Shah",
      role: "Mechanical Engineer",
      image: "https://via.placeholder.com/300x300?text=A",
      linkedin: "#"
    },
    {
      name: "Meera Joshi",
      role: "Software Engineer",
      image: "https://via.placeholder.com/300x300?text=M",
      linkedin: "#"
    }
  ];

  const subTeams = [
    "Mechanical", "Electrical", "Software", "Science", "Operations"
  ];

  return (
    <section id="team" className="section-padding bg-space-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-cosmic/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-mars/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the brilliant minds behind our Mars rover designs and innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 font-technospace">Our Sub-Teams</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {subTeams.map((team, index) => (
              <div 
                key={index} 
                className="py-2 px-4 rounded-full bg-space-light/30 text-white/90 border border-white/10"
              >
                {team}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 font-technospace">Join Our Team</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Are you passionate about space exploration and rover technology? We're always looking for talented 
            students to join our team and help us build the next generation of Mars rovers.
          </p>
          <Button className="bg-gradient-to-r from-mars to-cosmic hover:opacity-90 text-white px-8 py-6">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
