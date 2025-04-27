// components/CreativeSide/BrandCollaborationsSection.tsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import switchitImage from "../../assets/Collabs/switchit.jpeg";
import rutmusicImage from "../../assets/Collabs/rutmusic.jpeg";

const brands = [
  {
    name: "Switch It",
    image: switchitImage,
    description: "Fashion & Lifestyle Brand",
    link: "https://perspectivee.company.site/",
  },
  {
    name: "Rut Music",
    image: rutmusicImage,
    description: "Music Production & Distribution",
    link: "https://rutmusic.com/?i=1",
  },
];

const BrandCollaborationsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/80 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Brand Collaborations
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Proudly collaborated with some of the world's leading brands in fashion, fitness, and lifestyle.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-72 h-96 rounded-xl overflow-hidden group flex-shrink-0 snap-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{brand.name}</h3>
                <p className="text-zinc-300 text-sm mb-3">{brand.description}</p>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Many More Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-72 h-96 rounded-xl overflow-hidden bg-zinc-800/50 border border-zinc-700 flex items-center justify-center flex-shrink-0 snap-center"
          >
            <p className="text-zinc-400">and many more...</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BrandCollaborationsSection;
