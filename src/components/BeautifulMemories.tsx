import { motion } from 'framer-motion';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import memory3 from '@/assets/memory-3.jpg';
import memory4 from '@/assets/memory-4.jpg';
import engagementImg from '@/assets/engagement.jpg';
import firstMeetingImg from '@/assets/first-meeting.jpg';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const images = [
  { src: memory1, alt: 'Beautiful Moment 1', span: 'row-span-2' },
  { src: memory2, alt: 'Beautiful Moment 2', span: '' },
  { src: memory3, alt: 'Beautiful Moment 3', span: 'row-span-2' },
  { src: memory4, alt: 'Beautiful Moment 4', span: '' },
  { src: engagementImg, alt: 'Beautiful Moment 5', span: '' },
  { src: firstMeetingImg, alt: 'Beautiful Moment 6', span: '' },
];

const BeautifulMemories = () => {
  return (
    <section className="cinematic-section">
      <div className="max-w-6xl w-full">
        <motion.div {...cinematicTransition} className="text-center mb-16">
          <span className="font-sans text-sm tracking-story text-muted-foreground uppercase">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-foreground mt-4 text-balance">
            Beautiful Memories
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              {...cinematicTransition}
              transition={{ ...cinematicTransition.transition, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[20px] group cursor-pointer ${image.span}`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[20px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautifulMemories;
