import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { HomeAbout } from '../components/sections/home/HomeAbout';
import { HomeContact } from '../components/sections/home/HomeContact';
import { HomeHero } from '../components/sections/home/HomeHero';
import { HomePortfolio } from '../components/sections/home/HomePortfolio';
import { HomeProcess } from '../components/sections/home/HomeProcess';
import { HomeServices } from '../components/sections/home/HomeServices';
import { portfolioCases } from '../data/portfolio';

export function HomePage() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const updateGlow = (event: MouseEvent<HTMLElement>) => {
    if (!glowRef.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
    glowRef.current.style.opacity = '1';
  };

  const hideGlow = () => {
    if (!glowRef.current) {
      return;
    }

    glowRef.current.style.opacity = '0';
  };

  const goToPreviousCase = () => {
    setActiveCaseIndex((current) =>
      current === 0 ? portfolioCases.length - 1 : current - 1,
    );
  };

  const goToNextCase = () => {
    setActiveCaseIndex((current) =>
      current === portfolioCases.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const reveal = () => {
      const blocks = document.querySelectorAll<HTMLElement>('.reveal');
      blocks.forEach((block) => {
        const top = block.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          block.classList.add('active');
        }
      });
    };

    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <HomeHero
        glowRef={glowRef}
        onMouseEnter={updateGlow}
        onMouseMove={updateGlow}
        onMouseLeave={hideGlow}
      />
      <HomeServices />
      <HomePortfolio
        activeCaseIndex={activeCaseIndex}
        onPrevious={goToPreviousCase}
        onNext={goToNextCase}
        onSelectCase={setActiveCaseIndex}
      />
      <HomeProcess />
      <HomeAbout />
      <HomeContact />
    </>
  );
}
