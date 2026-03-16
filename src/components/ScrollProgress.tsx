import { motion, useScroll } from 'framer-motion';
import { Heart } from 'lucide-react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="fixed right-6 top-0 bottom-0 z-40 flex flex-col items-center pointer-events-none">
      {/* The Destiny Line */}
      <div className="relative w-px h-full bg-secondary">
        <motion.div
          className="absolute top-0 left-0 w-full gradient-gold origin-top"
          style={{ scaleY: scrollYProgress, height: '100%' }}
        />
      </div>

      {/* Heart tracker */}
      <motion.div
        className="absolute text-primary"
        style={{ top: '50%' }}
      >
        <motion.div
          style={{ y: scrollYProgress }}
          className="animate-heart-beat"
        >
          <Heart size={16} fill="currentColor" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollProgress;
