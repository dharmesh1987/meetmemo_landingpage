'use client';

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  pauseOnHover?: boolean;
}

const Marquee = ({ className, children, pauseOnHover = false }: MarqueeProps) => {
  return (
    <div 
      className={cn(
        "relative flex overflow-x-hidden",
        pauseOnHover && "[&:hover_>_*]:pause",
        className
      )}
    >
      <div className="animate-marquee whitespace-nowrap py-12">
        {children}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {children}
      </div>
    </div>
  );
};

export default Marquee;