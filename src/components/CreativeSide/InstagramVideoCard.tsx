import { motion } from "framer-motion";

interface InstagramVideoCardProps {
  url: string;
}

const InstagramVideoCard = ({ url }: InstagramVideoCardProps) => {
  // Extract the post/reel ID from the URL
  const postId = url.split('/').pop()?.split('?')[0];
  const isReel = url.includes('/reel/');
  const embedUrl = isReel 
    ? `https://www.instagram.com/reel/${postId}/embed`
    : `https://www.instagram.com/p/${postId}/embed`;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-all duration-300 flex-shrink-0"
    >
      <div className="w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] px-2">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          style={{ border: 'none' }}
        />
      </div>
    </motion.div>
  );
};

export default InstagramVideoCard; 