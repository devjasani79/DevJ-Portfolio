import { motion } from 'framer-motion';
import { Instagram, Youtube, ExternalLink, FileText } from 'lucide-react';
import { SiSpotify } from 'react-icons/si';
import { artists, brands, choreographyStats, artistManagementStats } from '../../data/creative';

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6 text-center">
    <div className="text-3xl font-bold text-blue-400 mb-2">{value}</div>
    <div className="text-zinc-400">{label}</div>
  </div>
);

const ArtistCard = ({ artist }: { artist: typeof artists[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden min-w-[160px] sm:min-w-[180px]"
  >
    <div className="relative h-32 sm:h-36">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
    </div>
    <div className="p-3">
      <h3 className="text-base font-semibold mb-1 text-white">{artist.name}</h3>
      <p className="text-blue-400 text-xs mb-2">{artist.role}</p>
      <div className="flex gap-2">
        {artist.socialLinks.instagram && (
          <a
            href={artist.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
          >
            <Instagram className="w-3 h-3" />
          </a>
        )}
        {artist.socialLinks.spotify && (
          <a
            href={artist.socialLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
          >
            <SiSpotify className="w-3 h-3" />
          </a>
        )}
        {artist.socialLinks.youtube && (
          <a
            href={artist.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
          >
            <Youtube className="w-3 h-3" />
          </a>
        )}
        {artist.socialLinks.file && (
          <a
            href={artist.socialLinks.file}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
          >
            <FileText className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const BrandCard = ({ brand }: { brand: typeof brands[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden min-w-[200px] sm:min-w-[240px]"
  >
    <div className="relative h-48 sm:h-56">
      <img
        src={brand.image}
        alt={brand.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1 text-white">{brand.name}</h3>
      <p className="text-zinc-400 text-sm mb-3">{brand.description}</p>
      <a
        href={brand.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
      >
        Visit Website <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </motion.div>
);

const CreativeSection = () => {
  return (
    <section id="creative" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Choreography Journey */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Choreography Journey
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Creating innovative choreography and training aspiring dancers in various styles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {choreographyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden">
              <video
                src="/path/to/your/choreography-trailer.mp4"
                className="w-full h-full object-cover"
                controls
                poster="/path/to/your/poster-image.jpg"
              />
            </div>
          </div>
        </div>

        {/* Artist Management */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Artist Management
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Managing and developing artists, coordinating events, and building brand partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {artistManagementStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>

          <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
            <div className="flex gap-6 min-w-max">
              {artists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ArtistCard artist={artist} />
                </motion.div>
              ))}
            </div>
            <p className="text-xl text-zinc-400 text-center mt-4">and many more...</p>
          </div>
        </div>

        {/* Brand Collaborations */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Brand Collaborations
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Building strong partnerships with brands to create impactful dance and music experiences.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
            <div className="flex gap-6 min-w-max">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BrandCard brand={brand} />
                </motion.div>
              ))}
            </div>
            <p className="text-xl text-zinc-400 text-center mt-4">and many more...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection; 