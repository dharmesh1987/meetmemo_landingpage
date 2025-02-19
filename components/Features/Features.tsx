"use client"
import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Features = () => {
  return (
    <>
      <SwapColumnFeatures />
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className="-mt-[100vh] hidden md:block" />
      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">~</span> Show a part of your product
          that explains what{" "}
          <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
            "{featureInView.title}"
          </span>{" "}
          means.
        </p>
      </div>
      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <featureInView.Icon />
      </span>
    </div>
  );
};

export default Features;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Plan",
    title: "Effortless Project Integration",
    description:
      "Easily import your projects from Asana, Notion, or Linear into one place with just a single click. Save time and keep everything organized.",
    contentPosition: "r",
    Icon: FiSearch,
  },
  {
    id: 2,
    callout: "Capture",
    title: "Automatic Transcription",
    description:
      "No need to worry about taking notes. Our smart speaker recognition creates clear transcripts so you can focus on the conversation.",
    contentPosition: "l",
    Icon: FiEye,
  },
  {
    id: 3,
    callout: "Act",
    title: "Smart Task Assignment",
    description:
      "Watch as meeting discussions turn into real progress. Tasks are automatically assigned to the right team members with clear deadlines.",
    contentPosition: "r",
    Icon: FiDollarSign,
  },
  {
    id: 4,
    callout: "Boost Efficiency",
    title: "Pre-Meeting Agenda Templates",
    description:
      "Set clear goals and structured discussions with customizable agenda templates, keeping everyone focused and moving toward results.",
    contentPosition: "l",
    Icon: FiPlay,
  },
  {
    id: 5,
    callout: "Collaborate",
    title: "Simpler Team Collaboration",
    description:
      "Interact with notes, tasks, and updates in real-time, making team collaboration seamless and productive.",
    contentPosition: "r",
    Icon: FiEye,
  },
];
