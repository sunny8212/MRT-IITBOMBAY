
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronLeft, Circle } from 'lucide-react';
import { ChartContainer } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";

interface TimelineEvent {
  year: string;
  event: string;
}

interface CompetitionsTimelineProps {
  events: TimelineEvent[];
}

const TimelineEvent = ({ year, event, isActive }: TimelineEvent & { isActive: boolean }) => (
  <div className={cn(
    "flex flex-col items-center transition-all duration-300",
    isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
  )}>
    <div className={cn(
      "rounded-full px-6 py-2 text-white font-bold mb-3 transition-all",
      isActive ? "bg-mars" : "bg-mars/70"
    )}>
      {year}
    </div>
    
    <div className="relative flex items-center justify-center mb-3">
      <Circle 
        className={cn(
          "size-4 fill-cosmic stroke-none",
          isActive ? "opacity-100" : "opacity-70"
        )} 
      />
    </div>
    
    <div className={cn(
      "text-center transition-all text-sm md:text-base",
      isActive ? "text-white" : "text-white/80"
    )}>
      {event}
    </div>
  </div>
);

const CompetitionsTimeline = ({ events }: CompetitionsTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState<TimelineEvent[]>([]);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Handle window resize to adjust visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerView(4);
      else if (window.innerWidth >= 768) setItemsPerView(3);
      else setItemsPerView(2);
      
      updateVisibleEvents(activeIndex);
    };

    const updateVisibleEvents = (index: number) => {
      const start = Math.max(0, Math.min(index, events.length - itemsPerView));
      setVisibleEvents(events.slice(start, start + itemsPerView));
      setActiveIndex(start);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [events, activeIndex, itemsPerView]);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && activeIndex > 0) {
      const newIndex = Math.max(0, activeIndex - 1);
      setActiveIndex(newIndex);
      setVisibleEvents(events.slice(newIndex, newIndex + itemsPerView));
    } else if (direction === 'next' && activeIndex < events.length - itemsPerView) {
      const newIndex = Math.min(events.length - itemsPerView, activeIndex + 1);
      setActiveIndex(newIndex);
      setVisibleEvents(events.slice(newIndex, newIndex + itemsPerView));
    }
  };

  return (
    <ChartContainer 
      config={{}} 
      className="bg-space-dark/50 rounded-2xl p-8 mb-16 backdrop-blur-sm border border-white/5"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient font-technospace">Competition Timeline</h3>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          {activeIndex > 0 && (
            <button
              onClick={() => navigate('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cosmic/80 text-white rounded-full p-2 shadow-lg hover:bg-cosmic transition-colors"
              aria-label="Previous events"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {activeIndex < events.length - itemsPerView && (
            <button
              onClick={() => navigate('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cosmic/80 text-white rounded-full p-2 shadow-lg hover:bg-cosmic transition-colors"
              aria-label="Next events"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Timeline container */}
          <div className="relative py-8 px-10">
            {/* Timeline line */}
            <div className="absolute top-[3.75rem] left-0 right-0 h-1 bg-gradient-to-r from-mars/30 via-cosmic to-mars/30"></div>
            
            {/* Timeline events */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visibleEvents.map((event, idx) => (
                <TimelineEvent 
                  key={`${event.year}-${idx}`}
                  year={event.year}
                  event={event.event}
                  isActive={idx === Math.floor(itemsPerView / 2) - (itemsPerView % 2 === 0 ? 1 : 0)}
                />
              ))}
            </div>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: Math.max(1, events.length - itemsPerView + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setVisibleEvents(events.slice(idx, idx + itemsPerView));
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  idx === activeIndex ? "bg-mars w-4" : "bg-white/30"
                )}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </ChartContainer>
  );
};

export default CompetitionsTimeline;
