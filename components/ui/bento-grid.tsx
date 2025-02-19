import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name?: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[13.5rem] md:auto-rows-[14rem] lg:auto-rows-[20rem] [@media(min-width:1035px)]:auto-rows-[21rem] [@media(min-width:1146px)]:auto-rows-[21.5rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      Icon && description && name && "bg-gradient-to-br border shadow-md",
      className
    )}
  >
    <>{background}</>
    {name && description && Icon && (
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
        <Icon className="h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className=" text-neutral-400">{description}</p>
      </div>
    )}

    {/* <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div> */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    {Icon && description && name && <BorderBeam />}
  </div>
);

export { BentoCard, BentoGrid };
