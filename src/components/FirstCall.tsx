import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import sd21 from '@/assets/sd21.png';

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
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <MessageCircle className="text-primary" size={24} />
            </motion.div>
            <span className="font-serif italic text-primary text-xl">23 November 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight text-balance">
            The First Conversations
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-sans max-w-prose-story tracking-story">
            On 23rd November, we started talking on WhatsApp and calls — this became
            the second step of our journey together. Hours felt like minutes, words flowed
            like poetry neither had rehearsed. That night, two souls discovered they spoke
            the same language of the heart.
          </p>
          <div className="h-px w-24 bg-primary opacity-40" />
        </motion.div>

        <motion.div
          {...cinematicTransition}
          className="story-image-container order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] story-image overflow-hidden">
            <motion.img
              src={sd21}
              alt="Our Journey Begins"
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
