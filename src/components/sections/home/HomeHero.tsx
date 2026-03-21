import type { MouseEvent, MouseEventHandler, RefObject } from 'react';
import { Container } from '../../ui/Container';
import { contact } from '../../../data/contact';
import { profile } from '../../../data/profile';

export function HomeHero({
  glowRef,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: {
  glowRef: RefObject<HTMLDivElement>;
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseMove: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
}) {
  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector<HTMLElement>('#contact');
    if (!target) {
      return;
    }

    event.preventDefault();

    window.history.replaceState(null, '', '#contact');
    window.scrollTo({
      top: Math.max(0, target.offsetTop),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-16 relative flex min-h-screen items-start justify-center overflow-hidden bg-sand pb-16 pt-28 md:items-center md:pb-0 md:pt-20 dark:bg-[#09090B]"
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div id="hero-glow" ref={glowRef} style={{ left: '-9999px', top: '-9999px' }} />
      <div className="bg-grid pointer-events-none absolute inset-0 z-0" />

      <Container className="relative z-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/12 bg-[#f7f1e8] px-3 py-1 text-xs font-medium text-ink/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for freelance & consulting
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-ink dark:text-[#FAFAFA] md:text-7xl">
            Better user experiences start with better testing, sharper product thinking,
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-ink to-ink/50 bg-clip-text text-transparent dark:from-white dark:to-zinc-400">
              {' '}and clear UX feedback.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-ink/72 dark:text-zinc-400 md:text-xl">
            {profile.hero.supportingText}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="w-full rounded-md bg-[#0070F3] px-8 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(0,112,243,0.3)] transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,112,243,0.5)] sm:w-auto"
            >
              Audit My Product
            </a>
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-ink/10 bg-white/60 px-8 py-3.5 font-medium text-ink transition-colors hover:bg-white sm:w-auto dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
            >
              View Fiverr Gigs <span className="text-ink/35 dark:text-zinc-500">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
