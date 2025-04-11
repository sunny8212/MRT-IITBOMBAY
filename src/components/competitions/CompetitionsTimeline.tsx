
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface TimelineEvent {
  year: string;
  event: string;
}

interface CompetitionsTimelineProps {
  events: TimelineEvent[];
}

const CompetitionsTimeline = ({ events }: CompetitionsTimelineProps) => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);
  const itemsToShow = React.useMemo(() => {
    // Show more items on larger screens
    return window.innerWidth >= 768 ? 4 : 2;
  }, []);

  const totalGroups = Math.ceil(events.length / itemsToShow);
  const visibleEvents = events.slice(visibleIndex, visibleIndex + itemsToShow);

  const goNext = () => {
    const newIndex = Math.min(visibleIndex + itemsToShow, events.length - itemsToShow);
    setVisibleIndex(newIndex);
  };

  const goPrevious = () => {
    const newIndex = Math.max(0, visibleIndex - itemsToShow);
    setVisibleIndex(newIndex);
  };

  return (
    <div className="mb-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative py-8">
          {/* Navigation buttons */}
          {visibleIndex > 0 && (
            <button 
              onClick={goPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-mars/80 text-white rounded-full p-2"
              aria-label="Previous events"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {visibleIndex + itemsToShow < events.length && (
            <button 
              onClick={goNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-mars/80 text-white rounded-full p-2"
              aria-label="Next events"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Timeline line */}
          <div className="absolute h-1 w-full bg-gradient-to-r from-mars via-cosmic to-mars top-1/2 transform -translate-y-1/2"></div>
          
          {/* Timeline events */}
          <div className="flex justify-between items-start relative">
            {visibleEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center px-2" style={{ width: `${100 / visibleEvents.length}%` }}>
                <div className="bg-mars text-white rounded-full px-4 py-2 font-bold mb-2 text-center whitespace-nowrap">
                  {event.year}
                </div>
                <div className="w-4 h-4 bg-white rounded-full border-4 border-cosmic mb-2"></div>
                <div className="text-center text-xs md:text-sm lg:text-base px-1">
                  {event.event}
                </div>
              </div>
            ))}
          </div>
          
          {/* Optional: Page indicators */}
          {totalGroups > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalGroups }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setVisibleIndex(idx * itemsToShow)}
                  className={`w-2 h-2 rounded-full ${idx * itemsToShow === visibleIndex ? 'bg-mars' : 'bg-gray-400'}`}
                  aria-label={`Go to group ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionsTimeline;
