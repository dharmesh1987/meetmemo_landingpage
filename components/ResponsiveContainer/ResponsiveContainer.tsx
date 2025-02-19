"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import {
  Calendar,
  Plus,
  Filter,
  Share2,
  MoreHorizontal,
  Menu,
} from "lucide-react";

const ShimmerLoader = () => (
  <div className="w-full h-full p-4 space-y-8">
    <motion.div
      className="animate-pulse space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header Shimmer - Match navbar layout */}
      <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 bg-gray-800 rounded-lg" /> {/* Logo */}
          <div className="h-8 w-32 bg-gray-800 rounded-lg" /> {/* Nav items */}
        </div>
        <div className="flex items-center gap-3">
          <div className="h-8 w-64 bg-gray-800 rounded-lg" /> {/* Search */}
          <div className="h-8 w-8 bg-gray-800 rounded-lg" /> {/* Avatar */}
        </div>
      </div>

      {/* Stats Grid Shimmer - Match exact stats layout */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { width: "w-full", height: "h-24" },
          { width: "w-full", height: "h-24" },
          { width: "w-full", height: "h-24" },
          { width: "w-full", height: "h-24" },
        ].map((dims, i) => (
          <div
            key={`shimmer-stat-${i}`}
            className={`${dims.width} ${dims.height} bg-gray-800 rounded-xl p-4`}
          >
            <div className="h-4 w-24 bg-gray-700 rounded mb-4" />
            <div className="h-6 w-16 bg-gray-700 rounded" />
          </div>
        ))}
      </div>

      {/* Tasks Header Shimmer */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="h-8 w-48 bg-gray-800 rounded-lg" /> {/* Title */}
          <div className="flex gap-3">
            <div className="h-8 w-24 bg-gray-800 rounded-lg" /> {/* Filter */}
            <div className="h-8 w-24 bg-gray-800 rounded-lg" /> {/* Add */}
          </div>
        </div>

        {/* Tasks Grid Shimmer */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={`shimmer-task-${i}`}
              className="bg-gray-800 rounded-xl p-4 h-[280px]"
            >
              <div className="space-y-4">
                <div className="h-6 w-3/4 bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-700 rounded" />
                <div className="h-32 w-full bg-gray-700 rounded-lg" />
                <div className="flex justify-between items-center">
                  <div className="h-6 w-20 bg-gray-700 rounded" />
                  <div className="h-6 w-20 bg-gray-700 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

interface LogoProps {
  isHeader?: boolean;
  scrollProgress?: MotionValue<number>;
}

const Logo: React.FC<LogoProps> = ({ isHeader = false, scrollProgress }) => {
  // Only create transforms if scrollProgress is provided
  const logoX = scrollProgress
    ? useTransform(scrollProgress, [0, 0.1], ["0%", "0%"])
    : null;
  const logoY = scrollProgress
    ? useTransform(scrollProgress, [0, 0.1], ["0%", "-50vh"])
    : null;
  const logoScale = scrollProgress
    ? useTransform(scrollProgress, [0, 0.1], [2, 1])
    : null;
  const logoOpacity = scrollProgress
    ? useTransform(scrollProgress, [0, 0.1], [1, 0])
    : null;

  return (
    <motion.div
      initial={isHeader ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
      animate={isHeader ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      style={
        !isHeader && scrollProgress
          ? {
              x: logoX ? logoX : undefined,
              y: logoY ? logoY : undefined,
              scale: logoScale ? logoScale : undefined,
              opacity: logoOpacity ? logoOpacity : undefined,
            }
          : undefined
      }
      className={`flex items-center gap-2 ${
        !isHeader
          ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          : "scale-90"
      }`}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className={`bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold ${
            isHeader ? "w-8 h-8 text-lg" : "w-10 h-10 text-xl"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Q
        </motion.div>
        <motion.span
          className={`font-bold text-white ${
            isHeader ? "text-xl" : "text-2xl"
          }`}
        >
          QCLAY
        </motion.span>
      </div>
    </motion.div>
  );
};

interface Task {
  title: string;
  description: string;
  tags: string[];
  progress: number;
  time: string;
}

interface TaskCardProps {
  task: Task;
  isFirst?: boolean;
  scrollProgress?: MotionValue<number>;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  isFirst,
  scrollProgress,
}) => (
  <div className="flex flex-col h-full relative">
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div>
        <h3 className="text-white font-semibold mb-1">{task.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{task.description}</p>
      </div>
      <button className="p-1.5 hover:bg-gray-700 rounded-lg transition-colors">
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </button>
    </div>
    {isFirst && scrollProgress && (
      <motion.div
        className="relative inset-0 w-[90%] rounded-xl overflow-hidden"
        style={{
          opacity: useTransform(scrollProgress, [0.35, 0.4], [0, 1]),
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://qclay.design/video/create/land-poster.webp"
        >
          <source
            src="https://qclay.design/video/create/land.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    )}
    <div className="mt-auto space-y-4 relative z-10">
      {/* <div className="flex flex-wrap gap-2">
        {task.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2.5 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div> */}

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-gray-300">{task.progress}%</span>
        </div>
        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${task.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-gray-800 bg-gray-700"
            />
          ))}
        </div>
        <span className="text-gray-400">{task.time}</span>
      </div>
    </div>
  </div>
);

const ShimmerTaskCard = () => (
  <div className="animate-pulse space-y-4 h-full">
    <div className="flex justify-between items-start">
      <div className="space-y-2 flex-1">
        <div className="h-5 bg-gray-800 rounded-lg w-2/3" />
        <div className="h-4 bg-gray-800 rounded-lg w-full" />
      </div>
      <div className="w-8 h-8 bg-gray-800 rounded-lg ml-4" />
    </div>

    <div className="flex gap-2">
      {[1, 2].map((i) => (
        <div key={i} className="h-5 bg-gray-800 rounded-full w-16" />
      ))}
    </div>

    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="h-4 bg-gray-800 rounded w-20" />
        <div className="h-4 bg-gray-800 rounded w-12" />
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full" />
    </div>

    <div className="flex justify-between items-center">
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-6 h-6 bg-gray-800 rounded-full" />
        ))}
      </div>
      <div className="h-4 bg-gray-800 rounded w-14" />
    </div>
  </div>
);

const MobileMenu = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="absolute top-full left-0 right-0 bg-gray-900 mt-2 p-4 rounded-xl shadow-xl"
  >
    <div className="flex flex-col space-y-2">
      <button className="w-full text-left px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors">
        Planning
      </button>
      <button className="w-full text-left px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors">
        Calendar
      </button>
    </div>
  </motion.div>
);

const NavLink = ({
  children,
  isActive = false,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <button
    className={`px-4 py-1.5 rounded-md text-sm transition-colors ${
      isActive ? "text-white font-medium" : "text-gray-400 hover:text-gray-200"
    }`}
  >
    {children}
  </button>
);

const RightMenu = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    className="absolute top-full right-0 mt-2 w-64 p-4 bg-gray-900 rounded-xl shadow-xl"
  >
    <div className="flex flex-col space-y-4">
      <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg transition-colors">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-sm font-medium text-white">K</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-white">Kenny Smith</div>
          <div className="text-xs text-gray-400">kenny@example.com</div>
        </div>
      </div>
      <div className="h-px bg-gray-800" />
      <button className="flex items-center gap-3 p-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors">
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>
      <button className="flex items-center gap-3 p-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span>Layers</span>
      </button>
    </div>
  </motion.div>
);

const MobileHeaderImage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="lg:hidden absolute -top-4 -right-4 w-32 h-32 pointer-events-none z-10"
  >
    <motion.img
      src="https://qclay.design/images/whatCreate/interface/mobile-header.webp"
      alt="Mobile header decoration"
      className="w-full h-full rounded-2xl object-cover"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    />
  </motion.div>
);

const ResponsiveContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video transforms - updated to match shimmer timing
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.35, 0.4, 0.45, 0.47],
    [0.8, 1.4, 0.5, 0.3, 0.25, 0.05, 0.0001] // Full screen -> card size
  );

  const videoX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.35, 0.4, 0.45, 0.47],
    ["100vw", "0vw", "-32vw", "-32vw", "-32vw", "-24vw", "-18.1vw"] // Right -> center -> card position
  );

  const vidRad = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.35, 0.4, 0.45],
    ["0rem", "0rem", "0rem", "0rem", "0.8rem", "0.8rem"] // Stay square then round corners
  );

  const videoY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.35, 0.4, 0.45, 0.47],
    ["0vh", "0vh", "-25vh", "-25vh", "-20vh", "20vh", "40vh"] // Stay centered then move to card
  );

  // Keep video visible through shimmer
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.4, 0.4, 0.45, 0.47],
    [1, 1, 1, 0.7, 1, 1, 0] // Stay visible, slight fade during shimmer, then back
  );

  // Dashboard transforms - start large and shrink
  const dashboardScale = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    [3, 2, 1] // Start at 300% -> shrink to normal
  );

  const dashboardOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [0, 1] // Fade in
  );

  // Update the task container width and scroll behavior
  const taskContainerWidth = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.8],
    ["100%", "690px", "360px"]
  );

  // Existing dashboard transforms - adjust timing
  const width = useTransform(scrollYProgress, [0.3, 0.8], ["90vw", "90vw"]);
  const maxWidth = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    ["1200px", "400px"]
  );
  const height = useTransform(scrollYProgress, [0.3, 0.8], ["750px", "700px"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    ["24px", "20px"]
  );
  const scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Stage transitions - updated timing
  const logoOpacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);
  const loaderOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45],
    [0, 1, 0]
  );
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

  // Overflow behavior for main content
  const contentOverflowY = useTransform(
    scrollYProgress,
    [0.3, 0.47, 0.5],
    ["hidden", "hidden", "auto"]
  );

  // Header layout transforms
  const headerLayout = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["flex-row", "flex-row", "flex-col"] // Header layout changes
  );

  // Search bar width transform
  const searchWidth = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["264px", "200px", "100%"] // Search bar width changes
  );

  // Navbar visibility transform
  const navbarOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 1, 0] // Navbar fade out
  );

  // Task grid transforms
  const taskGridColumns = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"] // Grid layout changes
  );

  const taskGridGap = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["1.5rem", "1rem", "0.75rem"] // Grid gap changes
  );

  const taskCards = [
    {
      id: 1,
      title: "Web Dashboard Design",
      description:
        "Create a responsive dashboard layout with dark mode support and real-time data visualization components.",
      time: "27 min",
      tags: ["Design", "Dashboard"],
      progress: 68,
      assignees: ["John", "Sarah", "Mike"],
    },
    {
      id: 2,
      title: "Animate Illustration",
      description:
        "Design and implement smooth animations for the product landing page illustrations using Lottie.",
      time: "1.5 hr",
      tags: ["Animation", "Design"],
      progress: 45,
      assignees: ["Emma", "Alex"],
    },
    {
      id: 3,
      title: "Mobile App UI/UX",
      description:
        "Design user-friendly mobile interfaces with focus on accessibility and performance optimization.",
      time: "54 min",
      tags: ["Mobile", "UI/UX"],
      progress: 32,
      assignees: ["Lisa", "Tom", "David"],
    },
    {
      id: 4,
      title: "API Integration",
      description:
        "Implement RESTful API endpoints with proper error handling and response caching mechanisms.",
      time: "2 hr",
      tags: ["Backend", "API"],
      progress: 89,
      assignees: ["Chris", "Anna"],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  // Add this new transform for the task header layout
  const taskHeaderLayout = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["row", "row", "column"] // Changes from row to column based on scroll
  );

  // Add this new transform for the section padding
  const sectionPadding = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["1.5rem", "1rem", "0.75rem"] // From larger to smaller padding
  );

  // Update the navbar transforms
  const navbarHeight = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["64px", "56px", "48px"] // Height gets smaller on scroll
  );

  const navbarPadding = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["1rem", "0.75rem", "0.5rem"] // Padding gets smaller on scroll
  );

  // Add this new transform for the card padding
  const cardPadding = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["1.5rem", "1rem", "0.75rem"] // From larger to smaller padding
  );

  // Define transforms for the div
  const gap = useTransform(scrollYProgress, [0, 1], ["1rem", "0.5rem"]);
  const flexDirection = useTransform(
    scrollYProgress,
    [0, 1],
    ["row", "column"]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] bg-[#0A0A0A] px-4 md:px-8 w-full"
    >
      <div className="sticky top-8 h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Video Container - updated z-index to show during shimmer */}
        <motion.div
          className="absolute w-screen h-screen z-40"
          style={{
            scale: videoScale,
            x: videoX,
            y: videoY,
            opacity: videoOpacity,
            position: "fixed",
            borderRadius: vidRad,
          }}
        >
          <motion.div
            className="relative w-full h-full aspect-video"
            style={{
              borderRadius: useTransform(
                scrollYProgress,
                [0, 0.2, 0.3],
                ["0px", "0px", "12px"]
              ),
              overflow: "hidden",
            }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              poster="https://qclay.design/video/create/land-poster.webp"
            >
              <source
                src="https://qclay.design/video/create/land.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          style={{
            width,
            maxWidth,
            height,
            borderRadius,
            scale: dashboardScale,
            opacity: dashboardOpacity,
          }}
          className="bg-gray-900 relative overflow-hidden shadow-2xl z-30"
        >
          {/* <MobileHeaderImage /> */}

          <AnimatePresence mode="wait">
            {/* Logo Stage */}
            <motion.div
              key="logo-stage"
              style={{ opacity: logoOpacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Logo scrollProgress={scrollYProgress} />
            </motion.div>

            {/* Loader Stage */}
            <motion.div
              key="loader-stage"
              style={{ opacity: loaderOpacity }}
              className="absolute inset-0"
            >
              <ShimmerLoader />
            </motion.div>

            {/* Main Content Stage */}
            <motion.div
              key="content-stage"
              style={{ opacity: contentOpacity, overflowY: contentOverflowY }}
              className="absolute inset-0 m-4"
            >
              <div className="flex flex-col space-y-8">
                {/* Header */}
                <motion.div
                  style={{
                    flexDirection: headerLayout as any,
                  }}
                  className="flex justify-between items-center gap-4  bg-gray-900/50 backdrop-blur-sm sticky -top-3 p-2 rounded-xl"
                >
                  <div className="flex items-center justify-between w-full lg:w-auto">
                    <div className="flex items-center gap-2">
                      {/* <motion.button
                        className='lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        animate={{
                          rotate: isMobileMenuOpen ? 90 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className='w-6 h-6 text-gray-400' />
                      </motion.button> */}
                      <Logo isHeader={true} />
                    </div>

                    <motion.div
                      className="hidden lg:flex items-center ml-8 gap-1"
                      style={{ opacity: navbarOpacity }}
                    >
                      <NavLink isActive={false}>Projects</NavLink>
                      <NavLink isActive>Planning</NavLink>
                      <motion.div className="relative">
                        <NavLink isActive={false}>Calendar</NavLink>
                        <motion.span
                          className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"
                          layoutId="nav-indicator"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center gap-3"
                    style={{
                      width: useTransform(
                        scrollYProgress,
                        [0.3, 0.7],
                        ["auto", "100%"]
                      ),
                    }}
                  >
                    <motion.div
                      className="relative flex-1"
                      style={{
                        width: searchWidth,
                      }}
                    >
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0014 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Active Tasks..."
                        className="w-full bg-gray-800/50 rounded-lg pl-10 pr-4 py-2 text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div
                      className="hidden lg:flex items-center gap-2"
                      style={{ opacity: navbarOpacity }}
                    >
                      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </button>
                      <button className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium flex items-center gap-2 transition-colors">
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add Task</span>
                      </button>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium text-white">
                        K
                      </div>
                    </motion.div>

                    {/* Mobile Right Menu Button */}
                    <div className="lg:hidden">
                      <motion.button
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setRightMenuOpen(!rightMenuOpen)}
                        animate={{
                          rotate: rightMenuOpen ? -90 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6 text-gray-400" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Mobile Menus */}
                  <AnimatePresence>
                    {isMobileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-2 p-4 bg-gray-900 rounded-xl shadow-xl"
                      >
                        <div className="flex flex-col space-y-2">
                          <NavLink isActive={false}>Projects</NavLink>
                          <NavLink isActive>Planning</NavLink>
                          <NavLink isActive={false}>Calendar</NavLink>
                        </div>
                      </motion.div>
                    )}
                    {rightMenuOpen && <RightMenu />}
                  </AnimatePresence>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: useTransform(
                      scrollYProgress,
                      [0.3, 0.8],
                      ["24px", "16px"]
                    ),
                  }}
                  className="w-full"
                >
                  {[
                    { label: "New Projects", value: "+15", trend: "up" },
                    { label: "Upcoming", value: "20", trend: "+37%" },
                  ].map((stat, index) => (
                    <motion.div
                      key={`stat-${stat.label}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-gray-800/50 p-4 md:p-6 rounded-xl"
                    >
                      <div className="text-gray-400 text-sm md:text-base mb-2">
                        {stat.label}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl md:text-2xl font-bold text-white">
                          {stat.value}
                        </span>
                        <div className="text-xs md:text-sm text-green-500">
                          {stat.trend}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Tasks Section */}
                <motion.div
                  style={{
                    padding: sectionPadding,
                  }}
                  className="rounded-xl"
                >
                  <motion.div
                    style={{
                      flexDirection: taskHeaderLayout as any,
                    }}
                    className="flex justify-between items-start gap-4 mb-6"
                  >
                    <div className="text-xl font-bold text-white">
                      Today Tasks
                    </div>
                    <div className="flex gap-2 md:gap-4">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800">
                        <Calendar className="w-4 h-4" />
                        <span>Today</span>
                      </button>
                      <button className="p-2 rounded-lg bg-blue-500">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    style={{
                      width: taskContainerWidth,
                      display: "grid",
                      gridTemplateColumns: taskGridColumns,
                      gap: taskGridGap,
                    }}
                    className="overflow-x-auto"
                  >
                    {taskCards.map((task, index) => (
                      <motion.div
                        key={`task-${task.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 * index,
                          duration: 0.3,
                        }}
                        style={{
                          padding: cardPadding,
                          height: "100%",
                        }}
                        className="bg-gray-800 rounded-xl relative overflow-hidden"
                      >
                        <TaskCard
                          task={task as Task}
                          isFirst={index === 0}
                          scrollProgress={scrollYProgress}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
