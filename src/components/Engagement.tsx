import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import sdhand1 from '@/assets/sdhand1.jpg';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const Engagement = () => {
  return (
    <section className="cinematic-section bg-cream-dark">
      <div className="max-w-6xl w-full">
        <motion.div {...cinematicTransition} className="text-center mb-16">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto">
              <Heart className="text-primary" size={32} fill="currentColor" />
            </div>
          </motion.div>
          <span className="font-serif italic text-primary text-xl block mb-4">2 November 2025</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-foreground text-balance">
            Our Engagement 💍
          </h2>
        </motion.div>

        <motion.div
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.3 }}
          className="story-image-container max-w-4xl mx-auto"
        >
          <div className="relative aspect-[3/4] md:aspect-video story-image overflow-hidden">
            <motion.img
              src={sdhand1}
              alt="Engagement"
              className="object-cover w-full h-full"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[24px]" />
          </div>
        </motion.div>

        <motion.p
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.5 }}
          className="text-center text-muted-foreground leading-relaxed text-lg font-sans max-w-prose-story mx-auto mt-12 tracking-story"
        >
          The day two strangers became one story. Our engagement day was not just a ceremony —
          it was the first time we looked into each other's eyes and knew that destiny had
          something beautiful planned for us.
        </motion.p>
      </div>
    </section>
  );
};

export default Engagement;
