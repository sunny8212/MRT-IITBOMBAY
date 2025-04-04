
import React from 'react';

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
      <div className="w-full h-auto overflow-hidden">
        <img 
          src="/lovable-uploads/5d7d4563-0109-4a59-9a4f-f234750a1674.png" 
          alt="MRT Competition Timeline" 
          className="w-full max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default CompetitionsTimeline;
