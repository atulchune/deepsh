import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import sdpro from '@/assets/sdpro.png';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const SpecialMeetups = () => {
  return (
    <section className="cinematic-section">
      <div className="max-w-6xl w-full">
        <motion.div {...cinematicTransition} className="text-center mb-20">
          <span className="font-sans text-sm tracking-story text-muted-foreground uppercase">
            The Moment Everything Changed
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-foreground mt-4 text-balance">
            Three Magical Words 💫
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            {...cinematicTransition}
            className="story-image-container"
          >
            <div className="relative aspect-[3/4] story-image overflow-hidden">
              <motion.img
                src={sdpro}
                alt="The Special Moment"
                className="object-cover w-full h-full"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[24px]" />
            </div>
          </motion.div>

          <motion.div
            {...cinematicTransition}
            transition={{ ...cinematicTransition.transition, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="text-primary" size={24} fill="currentColor" />
              </motion.div>
              <span className="font-serif italic text-primary text-xl">6 December 2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-sans text-sm">
              <Sparkles size={14} className="text-primary" />
              <span>12:32 AM — A moment frozen in time</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight text-balance">
              "I Love You"
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg font-sans max-w-prose-story tracking-story">
              6th December 2025, 12:32 AM — this marks the third step of our journey.
              It was the moment you said those three magical words, and time seemed to
              stand still for both of us. In that instant, everything changed — feelings
              turned into something deeper, and our story found its true beginning.
            </p>
            <div className="h-px w-24 bg-primary opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMeetups;
