import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const cinematicTransition = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const HeroSection = () => {
  const scrollToStory = () => {
    document.getElementById('first-meeting')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsla(36,33%,98%,0.3), hsla(36,33%,98%,0.7), hsla(36,33%,98%,0.95))' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-primary opacity-50" />
            <span className="font-sans text-sm tracking-story text-muted-foreground uppercase">
              A Love Story
            </span>
            <div className="h-px w-16 bg-primary opacity-50" />
          </div>
        </motion.div>

        <motion.h1
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.6 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground tracking-tight-story text-balance leading-none mb-6"
        >
          Deepak{' '}
          <Heart className="inline-block text-primary mx-2" size={48} fill="currentColor" />
          {' '}Shweta
        </motion.h1>

        <motion.p
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.9 }}
          className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-12"
        >
          A Love Story Written By Destiny
        </motion.p>

        <motion.button
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 1.2 }}
          onClick={scrollToStory}
          className="group inline-flex flex-col items-center gap-3 cursor-pointer"
        >
          <span className="font-sans text-sm tracking-story text-primary uppercase border-b border-primary pb-1 group-hover:pb-2 transition-all duration-500">
            Begin Our Story
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="text-primary" size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
