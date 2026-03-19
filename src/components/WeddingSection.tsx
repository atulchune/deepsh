import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import sd21 from '@/assets/sd21.png';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const WeddingSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full bleed background */}
      <div className="absolute inset-0">
        <motion.img
          src={sd21}
          alt="The Wedding"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsla(20,10%,15%,0.85), hsla(20,10%,15%,0.4), hsla(20,10%,15%,0.6))' }} />
      </div>

      {/* Fireworks-like sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 4,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          >
            <Sparkles className="text-gold-light" size={12 + Math.random() * 12} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          {...cinematicTransition}
          className="mb-6"
        >
          <span className="font-sans text-sm tracking-story uppercase" style={{ color: 'hsl(38, 50%, 75%)' }}>
            14 May 2026 — The Grand Celebration
          </span>
        </motion.div>

        <motion.h2
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-balance"
          style={{ color: 'hsl(36, 33%, 98%)' }}
        >
          Deepak ❤️ Shweta
        </motion.h2>

        <motion.p
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.6 }}
          className="font-serif italic text-2xl md:text-3xl mt-6"
          style={{ color: 'hsl(38, 50%, 75%)' }}
        >
          Forever Begins 💍
        </motion.p>

        <motion.p
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.8 }}
          className="mt-8 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'hsl(36, 33%, 85%)' }}
        >
          The day our hearts become one and our souls promise forever.
          From strangers to soulmates, our journey now turns into a forever story —
          hand in hand, heart to heart, always and forever.
        </motion.p>

        <motion.div
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 1 }}
          className="mt-12"
        >
          <div className="h-px w-32 mx-auto" style={{ background: 'linear-gradient(to right, transparent, hsl(38,50%,75%), transparent)' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingSection;
