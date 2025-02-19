import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  LayoutGrid,
  Share2Icon,
  TabletSmartphone,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/animated-beam-multiple-outputs";
import { AnimatedListDemo } from "@/components/ui/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import Iphone15Pro from "../ui/iphone-15-pro";

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
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    className:
      "col-span-1 row-span-2 hidden md:block md:row-span-3 lg:row-span-2",
    background: (
      <div className="relative">
        <Iphone15Pro className="size-full" videoSrc="/clips/app.mp4" />,
      </div>
    ),
  },
  {
    Icon: TabletSmartphone,
    name: "Mobile App",
    description:
      "Take Meetings in Motion Anytime, Anywhere Be it online or in-person, meetings on the go are always within reach with Meet memo app",
    href: "#",
    className: "col-span-2 md:col-span-1 md:row-span-2 lg:row-span-1",
    background: <div className="relative"></div>,
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-2 md:col-span-1 md:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div>
        <Calendar
          mode="single"
          selected={new Date(2022, 4, 11, 0, 0, 0)}
          className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    Icon: LayoutGrid,
    name: "Spaces",
    description: "Organize your Meetings in spaces.",
    href: "#",
    className:
      "col-span-2 md:col-span-2 md:row-span-1 lg:row-span-1 lg:col-span-2",
    background: <div></div>,
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 lg:col-span-2",
    background: (
      <div>
        <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className:
      "col-span-2 md:col-span-1 md:row-span-1 lg:row-span-1 lg:col-span-1",
    background: (
      <div>
        <AnimatedListDemo className="absolute -right-24 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" />
      </div>
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="p-10 mx-auto max-w-[72rem]">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
