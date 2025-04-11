
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  image?: string;
  align?: 'left' | 'right';
}

const TimelineItem = ({ date, title, description, image, align = 'right' }: TimelineItemProps) => {
  return (
    <div className="relative pb-20">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-mars to-cosmic"></div>
      
      {/* Date marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-space-dark border-2 border-mars z-10"></div>
      
      {/* Content container */}
      <div className={cn(
        "flex items-start gap-8",
        align === 'left' ? 'flex-row' : 'flex-row-reverse'
      )}>
        {/* Empty space for alignment */}
        <div className="w-1/2"></div>
        
        {/* Content */}
        <div className={cn(
          "w-1/2 bg-space-dark/40 p-6 rounded-xl border border-white/10",
          align === 'left' ? 'text-right' : 'text-left'
        )}>
          <div className="bg-mars text-white text-lg font-medium py-1 px-4 rounded-full inline-block mb-4">
            {date}
          </div>
          <h3 className="text-2xl font-bold mb-3 font-technospace">{title}</h3>
          <p className="text-white/80 mb-4">{description}</p>
          
          {image && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mars/20 to-cosmic/20 rounded-xl blur-lg"></div>
              <img 
                src={image} 
                alt={title} 
                className="relative rounded-xl w-full h-auto max-h-60 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface RoverTimelineProps {
  events: {
    date: string;
    title: string;
    description: string;
    image?: string;
  }[];
}

const RoverTimeline = ({ events }: RoverTimelineProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="section-title">The story of how we got started</h2>
        <p className="section-subtitle">
          MRT was started by 5 students with the same mission.<br />
          Our story starts 11 years ago... Step in.
        </p>
      </div>
      
      <div className="relative mt-20">
        {events.map((event, index) => (
          <TimelineItem 
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            image={event.image}
            align={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </div>
  );
};

export default RoverTimeline;
