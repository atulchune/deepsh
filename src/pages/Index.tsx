import { useState, useCallback } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import MemoryDust from '@/components/MemoryDust';
import FloatingHearts from '@/components/FloatingHearts';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import FirstMeeting from '@/components/FirstMeeting';
import FirstCall from '@/components/FirstCall';
import SpecialMeetups from '@/components/SpecialMeetups';
import Engagement from '@/components/Engagement';
import BeautifulMemories from '@/components/BeautifulMemories';
import WeddingSection from '@/components/WeddingSection';
import EndingSection from '@/components/EndingSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <MemoryDust />
        <FloatingHearts />
        <ScrollProgress />

        <main className="relative z-10">
          <HeroSection />
          <FirstMeeting />
          <FirstCall />
          <SpecialMeetups />
          <Engagement />
          <BeautifulMemories />
          <WeddingSection />
          <EndingSection />
        </main>
      </div>
    </>
  );
};

export default Index;
