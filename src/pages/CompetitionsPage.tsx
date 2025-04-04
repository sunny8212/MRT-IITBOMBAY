
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Calendar, MapPin } from 'lucide-react';

interface CompetitionResult {
  year: string;
  achievement: string;
  description: string;
}

interface CompetitionProps {
  title: string;
  location: string;
  description: string;
  image: string;
  results: CompetitionResult[];
}

const Competition = ({ title, location, description, image, results }: CompetitionProps) => (
  <div className="mb-16 bg-space-light/20 rounded-xl overflow-hidden border border-white/10">
    <div className="md:flex">
      <div className="md:w-1/3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-mars mr-2" />
          <span className="text-white/70">{location}</span>
        </div>
        <h2 className="text-2xl font-bold mb-3 font-technospace">{title}</h2>
        <p className="text-white/80 mb-6">{description}</p>
        
        <h3 className="text-xl font-semibold mb-4 font-technospace">Our Journey</h3>
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="flex">
              <div className="w-20 flex-shrink-0">
                <div className="bg-cosmic/20 rounded-full px-3 py-1 text-center text-white">
                  {result.year}
                </div>
              </div>
              <div className="ml-4 pl-4 border-l border-white/20">
                <h4 className="text-white font-semibold mb-1 flex items-center">
                  <Award className="h-4 w-4 text-mars mr-2" />
                  {result.achievement}
                </h4>
                <p className="text-white/70">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CompetitionsPage = () => {
  const competitions = [
    {
      title: "University Rover Challenge (URC)",
      location: "Mars Desert Research Station, Utah, USA",
      description: "The University Rover Challenge (URC) is the world's premier robotics competition for university students, challenging teams to design and build the next generation of Mars rovers. The competition takes place at the Mars Desert Research Station in southern Utah, USA, where the terrain closely resembles the Martian landscape.",
      image: "https://via.placeholder.com/600x400?text=URC",
      results: [
        {
          year: "2023",
          achievement: "1st position among Indian teams",
          description: "Our team secured the highest ranking among all Indian teams and placed 6th in the Bio-sciences task."
        },
        {
          year: "2022",
          achievement: "Top 20 Qualification",
          description: "Successfully qualified in the top 20 teams globally after the System Acceptance Review phase."
        },
        {
          year: "2021",
          achievement: "Qualification",
          description: "First-ever qualification for the competition, marking a significant milestone for our team."
        }
      ]
    },
    {
      title: "International Rover Challenge (IRC)",
      location: "Various locations in India",
      description: "The International Rover Challenge is a competition conducted by the Space Robotics Society that tests rovers' capabilities in tasks simulating real Mars mission scenarios. The competition provides a platform for students to develop and showcase innovative rover technologies.",
      image: "https://via.placeholder.com/600x400?text=IRC",
      results: [
        {
          year: "2023",
          achievement: "5th Position & Excellence Award",
          description: "Secured 5th position out of 18 teams and received Excellence Award in Autonomous category."
        },
        {
          year: "2022",
          achievement: "3rd Position",
          description: "Achieved podium finish with notable performance in navigation and science tasks."
        },
        {
          year: "2021",
          achievement: "2nd Position",
          description: "Runner-up with exceptional scores in mechanical design and autonomous operation."
        },
        {
          year: "2020",
          achievement: "4th Position",
          description: "Strong performance despite challenges in first-generation autonomous systems."
        }
      ]
    },
    {
      title: "European Rover Challenge (ERC)",
      location: "Poland",
      description: "The European Rover Challenge is one of the largest space and robotics events in Europe. It features an international Mars rover competition on one of the largest artificial Martian terrains in the world, where teams must complete various tasks simulating real Martian missions.",
      image: "https://via.placeholder.com/600x400?text=ERC",
      results: [
        {
          year: "2022",
          achievement: "Excellence Award in Navigation",
          description: "Received special recognition for our rover's navigation capabilities and innovative pathfinding algorithms."
        },
        {
          year: "2021",
          achievement: "Top 15 Qualification",
          description: "Successfully qualified for the remote competition format among top global teams."
        }
      ]
    }
  ];

  const timeline = [
    { year: "2012", event: "Mars Rover Team founded at IIT Bombay" },
    { year: "2014", event: "First rover prototype developed" },
    { year: "2016", event: "First participation in national-level competition" },
    { year: "2018", event: "First international competition participation" },
    { year: "2020", event: "Reached top 5 in IRC" },
    { year: "2021", event: "First qualification for URC" },
    { year: "2022", event: "Excellence Award at ERC" },
    { year: "2023", event: "Top Indian team at URC, 5th position at IRC" }
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
            <h1 className="section-title">Competitive Records</h1>
            <p className="section-subtitle">
              Our journey through international rover competitions and the milestones we've achieved.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="mb-20 overflow-x-auto">
            <div className="flex justify-center min-w-max">
              <div className="relative flex items-center h-20">
                {/* Timeline line */}
                <div className="absolute h-1 bg-gradient-to-r from-mars via-cosmic to-mars w-full"></div>
                
                {/* Timeline markers */}
                {timeline.map((item, index) => (
                  <div key={index} className="relative mx-8">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 whitespace-nowrap">
                      <div className="bg-mars rounded-full px-3 py-1 text-white text-sm font-medium">
                        {item.year}
                      </div>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-white relative z-10"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 w-32">
                      <p className="text-white/80 text-sm text-center">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Competition details */}
          <div className="space-y-10">
            {competitions.map((competition, index) => (
              <Competition key={index} {...competition} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CompetitionsPage;
