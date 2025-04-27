// pages/creative-side.tsx
import { motion } from "framer-motion";
import ChoreographerSection from "../components/CreativeSide/ChoreographerSection";
import ArtistManagerSection from "../components/CreativeSide/ArtistManagerSection";
import BrandCollaborationsSection from "../components/CreativeSide/BrandCollaborationsSection";

const CreativeSide = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Creative Side
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          A glimpse into my artistic journey — from choreography to artist management and brand collaborations.
        </p>
      </motion.div>

      <div className="space-y-24">
        <ChoreographerSection />
        <ArtistManagerSection />
        <BrandCollaborationsSection />
      </div>
    </div>
  );
};

export default CreativeSide;
