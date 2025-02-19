"use client";

import { CalendarIcon, FileTextIcon, Share2Icon } from "@radix-ui/react-icons";
import { BellIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/animated-beam-multiple-outputs";
import { AnimatedListDemo } from "@/components/ui/animated-list-demo";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description:
      "We automatically save your files as you type. Never worry about losing your work again.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05]",
              "dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {f.name}
              </figcaption>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Smart Notifications",
    description:
      "Get notified when important events happen. Customize your notification preferences for different events.",
    href: "#",
    cta: "Configure now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations Hub",
    description:
      "Connect with your favorite tools and apps. Seamlessly integrate with over 100+ services.",
    href: "#",
    cta: "Explore integrations",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Smart Calendar",
    description:
      "Schedule and manage your tasks with our intelligent calendar. Never miss an important deadline.",
    href: "#",
    cta: "Open calendar",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Calendar
        mode="single"
        className="absolute right-0 top-10 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          Features that make you more productive
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Everything you need to manage your work efficiently
        </p>
      </div>

      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
