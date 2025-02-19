"use client";
import SparklesText from "@/components/ui/sparkles-text";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Scroll = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [endX, setEndX] = useState("0%");

  useEffect(() => {
    const updateEndX = () => {
      if (scrollContainerRef.current && targetRef.current) {
        const containerWidth = scrollContainerRef.current.scrollWidth; // Total width of all cards
        const viewportWidth = window.innerWidth; // Width of the viewport
        const scrollableWidth = containerWidth - viewportWidth + 50; // Scrollable distance
        const endPercentage = -((scrollableWidth / containerWidth) * 100); // Convert to percentage
        setEndX(`${endPercentage}%`);
      }
    };

    updateEndX();
    window.addEventListener("resize", updateEndX); // Recalculate on window resize

    return () => window.removeEventListener("resize", updateEndX);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={scrollContainerRef}
          style={{ x }}
          className="flex gap-4 md:gap-8 p-4 md:p-8"
        >
          {cards.map((card, index) => (
            <Card card={card} key={card.id} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card, index }: { card: CardType; index: number }) => {
  const isFirstCard = card.id === 0;
  const hasVideo = !!card.videoUrl;

  return (
    <motion.div
      key={card.id}
      className={`group relative h-[450px] sm:h-[550px] md:h-[650px] ${
        isFirstCard
          ? "w-[300px] sm:w-[550px] md:w-[850px]"
          : "w-[300px] sm:w-[550px] md:w-[850px]"
      } rounded-3xl overflow-hidden`}
      style={{ backgroundColor: card.bgColor }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: index * 0.1,
      }}
    >
      {hasVideo && (
        <video
          src={card.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover z-0"
        />
      )}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`absolute inset-0 z-0 transition-transform duration-300 ${
          !isFirstCard && "bg-black/5 "
        }`}
      ></div>
      <motion.div
        className={`px-8 py-4 absolute ${
          isFirstCard
            ? "bottom-1/4"
            : "bottom-0  bg-gradient-to-t from-black to-transparent shadow-lg opacity-95"
        } flex gap-y-2 md:gap-y-4 flex-col w-full `}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      >
        {isFirstCard ? (
          <SparklesText text={card.head} className="font-normal" />
        ) : (
          <p
            className={`font-normal ${
              isFirstCard
                ? "text-black text-6xl font-semibold leading-tight max-w-xl"
                : "text-white max-w-3xl text-xl"
            } `}
          >
            {card.head}
          </p>
        )}
        {/* {!isFirstCard && (
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-4/5">
              <p className="text-sm md:text-xl font-normal capitalize text-gray-800">
                {card.description}
              </p>
            </div>
            <div className="w-full md:w-1/5 flex items-end justify-start md:justify-end mt-2 md:mt-0">
              <p className="text-4xl md:text-6xl font-normal capitalize text-gray-800">
                0{card.id}
              </p>
            </div>
          </div>
        )} */}
      </motion.div>
    </motion.div>
  );
};

export default Scroll;

type CardType = {
  url: string;
  title: string;
  id: number;
  head: string;
  description: string;
  bgColor: string;
  videoUrl?: string;
};

const cards: CardType[] = [
  {
    url: "",
    title: "Smooth Scrolling Text",
    head: "Automate Meeting notes like magic",
    description: "",
    id: 0,
    bgColor: "",
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    head: "Sync your Calendar to stay upto date and assign your meetings to collaborative Spaces",
    description:
      "Easily import your projects from Asana, Notion, or Linear into one place with just a single click. It's a quick and easy way to keep everything organized and save time, so you can focus on getting things done.",
    id: 1,
    bgColor: "#F7F4F4",
    videoUrl: "/clips/transcription.mp4",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    head: "Impromptu meetings, Even if a meeting is scheduled at the last minute, this productivity assistant is ready.",
    description:
      "Once the meeting wraps up, you'll get a clear, concise summary right away. Our AI highlights the key points, decisions, and insights, saving you hours of going through notes. Plus, you'll also get chapter-wise summaries for a quick overview!",
    id: 2,
    bgColor: "#EFFBF9",
    videoUrl: "/clips/impromptu.mp4",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    head: "Smart summaries - Every word, idea, and decision—captured seamlessly. Every detail is recorded, giving you the freedom to stay engaged in the conversation.",
    description:
      "Once the meeting wraps up, you'll get a clear, concise summary right away. Our AI highlights the key points, decisions, and insights, saving you hours of going through notes. Plus, you'll also get chapter-wise summaries for a quick overview!",
    id: 3,
    bgColor: "#EFFBF9",
    videoUrl: "/clips/summary.mp4",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    head: "Meeting templates that are customized for your team's needs and goals.",
    description:
      "Get your meetings off to a great start with customizable agenda templates. Work with your team to set clear goals and structure discussions that keep everyone focused and moving toward meaningful results.",
    id: 4,
    bgColor: "#F2EDF4",
    videoUrl: "/clips/templates.mp4",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    head: "Knowledge Hub- Spaces: This AI powerhouse acts as your productivity assistant, and collective team memory, where all your meetings are organized in spaces.",
    description:
      "Stay on top of important conversations by setting priority topics and keywords. This way, you'll make sure every key point gets the attention it deserves, no more missing out on crucial details.",
    id: 5,
    bgColor: "#F7F4F4",
    videoUrl: "/clips/spaces.mp4",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    head: "Got Questions? Ask Memo.ry.. Memo.ry is your team’s collective memory. Just ask, and it delivers clear, accurate insights in seconds, keeping you effortlessly informed.",
    description:
      "Stay on top of important conversations by setting priority topics and keywords. This way, you'll make sure every key point gets the attention it deserves, no more missing out on crucial details.",
    id: 6,
    bgColor: "#F7F4F4",
    videoUrl: "/clips/qna.mp4",
  },
];
