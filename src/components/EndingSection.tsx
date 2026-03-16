import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const EndingSection = () => {
  return (
    <section className="cinematic-section bg-cream-dark">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div {...cinematicTransition}>
          <Heart className="text-primary mx-auto mb-8 animate-heart-beat" size={48} fill="currentColor" />
        </motion.div>

        <motion.blockquote
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.3 }}
          className="mb-12"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed text-balance">
            "In all the world, there is no heart for me like yours.
            In all the world, there is no love for you like mine."
          </p>
          <cite className="block mt-6 font-sans text-sm tracking-story text-muted-foreground not-italic">
            — Maya Angelou
          </cite>
        </motion.blockquote>

        <motion.div
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="h-px w-32 mx-auto bg-primary opacity-30" />

          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground text-balance leading-relaxed">
            Two hearts. One story.<br />
            A lifetime together.
          </h2>

          <img
            src={logo}
            alt="Shweta Weds Deepak"
            className="w-24 h-24 object-contain mx-auto opacity-60"
          />

          <p className="font-sans text-sm tracking-story text-muted-foreground">
            Made with ❤️ for Deepak & Shweta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EndingSection;
