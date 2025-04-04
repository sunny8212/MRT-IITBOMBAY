
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TimelineEvent {
  year: string;
  event: string;
}

interface CompetitionsTimelineProps {
  events: TimelineEvent[];
}

const CompetitionsTimeline = ({ events }: CompetitionsTimelineProps) => {
  return (
    <div className="mb-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative py-8">
          {/* Timeline line */}
          <div className="absolute h-1 w-full bg-gradient-to-r from-mars via-cosmic to-mars top-1/2 transform -translate-y-1/2"></div>
          
          {/* Timeline events */}
          <div className="flex justify-between items-start relative">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: `${100 / events.length}%` }}>
                <div className="bg-mars text-white rounded-full px-4 py-2 font-bold mb-2 text-center">
                  {event.year}
                </div>
                <div className="w-4 h-4 bg-white rounded-full border-4 border-cosmic mb-2"></div>
                <div className="text-center text-xs md:text-sm px-1">
                  {event.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsTimeline;
