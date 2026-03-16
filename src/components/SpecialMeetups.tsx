import { motion } from 'framer-motion';
import { Coffee, Film, MapPin } from 'lucide-react';
import coffeeImg from '@/assets/coffee-date.jpg';
import movieImg from '@/assets/movie-date.jpg';
import tripImg from '@/assets/first-trip.jpg';

const cinematicTransition = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const meetups = [
  {
    icon: Coffee,
    date: 'April 2021',
    title: 'First Coffee',
    description: 'A simple coffee turned into a three-hour conversation. The lattes went cold, but their hearts grew warm.',
    image: coffeeImg,
  },
  {
    icon: Film,
    date: 'June 2021',
    title: 'First Movie',
    description: 'In the darkness of the cinema, their hands found each other. The real story was happening in their seats.',
    image: movieImg,
  },
  {
    icon: MapPin,
    date: 'August 2021',
    title: 'First Trip Together',
    description: 'Mountains witnessed what words couldn\'t express. Two souls, one horizon, infinite possibilities.',
    image: tripImg,
  },
];

const SpecialMeetups = () => {
  return (
    <section className="cinematic-section">
      <div className="max-w-6xl w-full">
        <motion.div {...cinematicTransition} className="text-center mb-20">
          <span className="font-sans text-sm tracking-story text-muted-foreground uppercase">
            Chapters of Us
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-foreground mt-4 text-balance">
            Special Moments
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full h-full destiny-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-20 md:space-y-32">
            {meetups.map((meetup, index) => {
              const Icon = meetup.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={meetup.title}
                  {...cinematicTransition}
                  transition={{ ...cinematicTransition.transition, delay: index * 0.15 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
                >
                  <div className={`space-y-4 ${isEven ? '' : 'md:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <Icon className="text-primary" size={20} />
                      <span className="font-serif italic text-primary">{meetup.date}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                      {meetup.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-sans max-w-prose-story tracking-story">
                      {meetup.description}
                    </p>
                  </div>

                  <div className={`story-image-container ${isEven ? '' : 'md:order-1'}`}>
                    <div className="relative aspect-square story-image overflow-hidden">
                      <motion.img
                        src={meetup.image}
                        alt={meetup.title}
                        className="object-cover w-full h-full"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[24px]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMeetups;
