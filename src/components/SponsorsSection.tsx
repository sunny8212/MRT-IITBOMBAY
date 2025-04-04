
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+1",
      url: "#"
    },
    {
      name: "Sponsor 2",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+2",
      url: "#"
    },
    {
      name: "Sponsor 3",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+3",
      url: "#"
    },
    {
      name: "Sponsor 4",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+4",
      url: "#"
    },
    {
      name: "Sponsor 5",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+5",
      url: "#"
    },
    {
      name: "Sponsor 6",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+6",
      url: "#"
    },
    {
      name: "Sponsor 7",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+7",
      url: "#"
    },
    {
      name: "Sponsor 8",
      logo: "https://via.placeholder.com/200x100?text=Sponsor+8",
      url: "#"
    }
  ];

  return (
    <section id="sponsors" className="section-padding bg-space-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-cosmic/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-mars/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Sponsors</h2>
          <p className="section-subtitle">
            We are grateful for the support of our sponsors who make our projects possible.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-space-light/30 rounded-xl p-6 flex items-center justify-center hover:bg-space-light/50 transition-colors"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-w-full max-h-16 filter grayscale hover:grayscale-0 transition-filter duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
