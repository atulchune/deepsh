import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import firstCallImg from '@/assets/first-call.jpg';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const FirstCall = () => {
  return (
    <section className="cinematic-section bg-cream-dark">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          {...cinematicTransition}
          transition={{ ...cinematicTransition.transition, delay: 0.2 }}
          className="space-y-6 order-2 md:order-1"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Phone className="text-primary" size={24} />
            </motion.div>
            <span className="font-serif italic text-primary text-xl">18 March 2021</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight text-balance">
            The First Call
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-sans max-w-prose-story tracking-story">
            Hours felt like minutes. Words flowed like poetry neither had rehearsed.
            That night, two souls discovered they spoke the same language of the heart.
          </p>
          <div className="h-px w-24 bg-primary opacity-40" />
        </motion.div>

        <motion.div
          {...cinematicTransition}
          className="story-image-container order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] story-image overflow-hidden">
            <motion.img
              src={firstCallImg}
              alt="The First Call"
              className="object-cover w-full h-full"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[24px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstCall;
