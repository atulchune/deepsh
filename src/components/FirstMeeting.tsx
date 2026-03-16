import { motion } from 'framer-motion';
import firstMeetingImg from '@/assets/first-meeting.jpg';

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
              src={firstMeetingImg}
              alt="The First Meeting"
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
          <span className="font-serif italic text-primary text-xl">12 March 2021</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight text-balance">
            The First Time<br />We Met
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-sans max-w-prose-story tracking-story">
            In a crowded room, the world went quiet. A single glance that felt like
            a thousand conversations already had. That moment changed everything.
          </p>
          <div className="h-px w-24 bg-primary opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstMeeting;
