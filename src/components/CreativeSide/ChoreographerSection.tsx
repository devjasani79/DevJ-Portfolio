// components/CreativeSide/ChoreographerSection.tsx
import { motion } from "framer-motion";
import { Users2, Trophy, CalendarDays } from "lucide-react";
import InstagramVideoCard from "./InstagramVideoCard";

const ChoreographerSection = () => {
  const stats = [
    { icon: Users2, value: "50+", label: "Students Trained" },
    { icon: Trophy, value: "10+", label: "Events Judged" },
    { icon: CalendarDays, value: "35+", label: "Events Organized" },
  ];

  const videos = [
    "https://www.instagram.com/reel/C45OdUtgAv0",
    "https://www.instagram.com/reel/DFIMLjRBZnD",
    "https://www.instagram.com/reel/C7bnLGjvTdJ",
    "https://www.instagram.com/reel/C9ADaWgNcx1"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/80 backdrop-blur-sm" />
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Choreography</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Experience my journey as a choreographer through these performances and workshops.
          </p>
        </div>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-800/50 p-6 rounded-lg text-center"
            >
              <stat.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative p-4">
          <div className="overflow-x-auto -mx-4 pb-4 ">
            <div className="flex gap-6 w-max px-2">
              {videos.map((video, index) => (
                <InstagramVideoCard key={index} url={video} />
              ))}
            </div>
          </div>
          <p className="text-xl text-zinc-400 text-center py-2">
            and many more...
          </p>
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />
        </div>      
    </motion.section>
  );
};

export default ChoreographerSection;
