
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cog, Code, Flask, Presentation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SubsystemsPage = () => {
  const subsystems = [
    {
      id: "mechanical",
      title: "Mechanical",
      icon: <Cog className="h-6 w-6 text-mars" />,
      color: "text-mars",
      bgColor: "bg-mars/20",
      description: "Designing and building the physical structure of the rover",
      content: [
        {
          title: "Mobility System",
          description: "Our rovers use a customized rocker-bogie suspension system that provides excellent terrain adaptability. The six-wheel drive ensures the rover can traverse over obstacles up to 1.5 times the wheel diameter."
        },
        {
          title: "Robotic Arm",
          description: "The 5 degree-of-freedom robotic arm is designed for precision tasks including sample collection, equipment manipulation, and scientific instrument positioning."
        },
        {
          title: "Chassis Design",
          description: "The lightweight yet durable chassis is made from aerospace-grade aluminum, providing optimal strength-to-weight ratio needed for competition requirements."
        },
        {
          title: "Manufacturing",
          description: "We utilize advanced manufacturing techniques including CNC machining, 3D printing, and composite fabrication to create precise and reliable components."
        }
      ]
    },
    {
      id: "electronics",
      title: "Electronics & Control",
      icon: <Cog className="h-6 w-6 text-cosmic" />,
      color: "text-cosmic",
      bgColor: "bg-cosmic/20",
      description: "Developing the electrical systems and control mechanisms",
      content: [
        {
          title: "Power Management",
          description: "Our power system uses high-capacity lithium-polymer batteries with custom power distribution units designed for efficiency and reliability during long missions."
        },
        {
          title: "Motor Control",
          description: "We develop custom motor controllers with current sensing, temperature monitoring, and dynamic torque adjustment for optimal performance in varied terrain."
        },
        {
          title: "Sensor Integration",
          description: "The rover incorporates multiple sensors including IMUs, GPS, wheel encoders, current sensors, and environment sensors for comprehensive data collection and control."
        },
        {
          title: "Communication",
          description: "Our rovers use a robust communication system with redundant radio links operating at different frequencies to ensure reliable command and telemetry transmission."
        }
      ]
    },
    {
      id: "software",
      title: "Software & Automation",
      icon: <Code className="h-6 w-6 text-mars" />,
      color: "text-mars",
      bgColor: "bg-mars/20",
      description: "Creating algorithms and software for autonomous operation",
      content: [
        {
          title: "Autonomy",
          description: "Our software stack includes advanced path planning, obstacle avoidance, and SLAM (Simultaneous Localization and Mapping) for autonomous navigation in unknown terrain."
        },
        {
          title: "Computer Vision",
          description: "We develop computer vision algorithms for feature detection, terrain classification, and object recognition to support autonomous decision-making."
        },
        {
          title: "Control Systems",
          description: "Our control architecture implements various algorithms including PID, model predictive control, and reinforcement learning for precise movements and adaptability."
        },
        {
          title: "User Interface",
          description: "We create intuitive control interfaces that provide real-time telemetry, sensor data visualization, and command issuing for competition operations."
        }
      ]
    },
    {
      id: "biosciences",
      title: "Biosciences",
      icon: <Flask className="h-6 w-6 text-cosmic" />,
      color: "text-cosmic",
      bgColor: "bg-cosmic/20",
      description: "Implementing scientific analysis and experiments",
      content: [
        {
          title: "Life Detection",
          description: "Our rovers incorporate various methods to detect potential bio-signatures, including spectroscopic analysis and specialized sampling techniques."
        },
        {
          title: "Soil Analysis",
          description: "We develop systems capable of collecting, preparing, and analyzing soil samples for moisture content, pH levels, and chemical composition."
        },
        {
          title: "Environmental Monitoring",
          description: "Our scientific payload includes sensors for atmospheric analysis, measuring temperature, pressure, humidity, and detecting specific gas concentrations."
        },
        {
          title: "Sample Collection",
          description: "We've designed specialized end effectors and containers for collecting, storing, and preserving various types of samples for later analysis."
        }
      ]
    },
    {
      id: "media",
      title: "Media, Design, Marketing & Business",
      icon: <Presentation className="h-6 w-6 text-mars" />,
      color: "text-mars",
      bgColor: "bg-mars/20",
      description: "Managing team representation, outreach and sponsorships",
      content: [
        {
          title: "Design",
          description: "Our design team creates compelling visuals including renders, technical drawings, and presentations that communicate our rover's capabilities effectively."
        },
        {
          title: "Marketing",
          description: "We develop comprehensive marketing strategies to promote our team, including social media presence, event participation, and outreach activities."
        },
        {
          title: "Sponsorship",
          description: "We work to establish and maintain relationships with sponsors, creating partnership opportunities and ensuring our team has the resources needed to compete."
        },
        {
          title: "Media Production",
          description: "Our media team documents the rover development process, competition participation, and creates promotional videos and photographs."
        }
      ]
    }
  ];

  const [activeSubsystem, setActiveSubsystem] = useState(subsystems[0].id);

  const selectedSubsystem = subsystems.find(sub => sub.id === activeSubsystem);

  return (
    <div className="min-h-screen bg-space">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-space-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-mars/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-cosmic/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="section-title">Our Subsystems</h1>
            <p className="section-subtitle">
              Specialized teams working together to create advanced rovers for extraterrestrial exploration.
            </p>
          </div>
          
          {/* Subsystem tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {subsystems.map((subsystem) => (
              <button
                key={subsystem.id}
                onClick={() => setActiveSubsystem(subsystem.id)}
                className={`py-3 px-5 rounded-xl flex items-center space-x-2 transition-colors ${
                  activeSubsystem === subsystem.id 
                    ? `${subsystem.bgColor} ${subsystem.color} border border-white/20` 
                    : "bg-space-light/30 text-white/70 hover:text-white"
                }`}
              >
                {subsystem.icon}
                <span>{subsystem.title}</span>
              </button>
            ))}
          </div>
          
          {/* Subsystem content */}
          {selectedSubsystem && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className={`inline-flex p-4 rounded-full ${selectedSubsystem.bgColor} mb-6`}>
                  {selectedSubsystem.icon}
                </div>
                <h2 className={`text-3xl font-bold mb-4 font-technospace ${selectedSubsystem.color}`}>
                  {selectedSubsystem.title}
                </h2>
                <p className="text-white/80 text-lg">
                  {selectedSubsystem.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {selectedSubsystem.content.map((item, index) => (
                  <Card key={index} className="bg-space-light/30 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/80 text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SubsystemsPage;
