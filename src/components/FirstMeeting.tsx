import { motion } from 'framer-motion';
import sd11 from '@/assets/sd11.png';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const FirstMeeting = () => {
  return (
    <section id="first-meeting" className="cinematic-section">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          {...cinematicTransition}
          className="story-image-container"
        >
          <div className="relative aspect-[4/5] story-image overflow-hidden">
            <motion.img
              src={sd11}
              alt="The First Meeting - Engagement Day"
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
          <span className="font-serif italic text-primary text-xl">2 November 2025</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight text-balance">
            The First Time<br />We Met
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-sans max-w-prose-story tracking-story">
            We first met on our engagement day — before that, we had never seen each other.
            That beautiful moment marked the beginning of our journey together. Two strangers,
            one destiny, and a bond that was written in the stars.
          </p>
          <div className="h-px w-24 bg-primary opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstMeeting;
