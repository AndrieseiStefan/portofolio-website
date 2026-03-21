import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Container } from '../components/ui/Container';
import { ProfileAvatar } from '../components/ui/ProfileAvatar';
import { contact } from '../data/contact';
import { profile } from '../data/profile';
import { portfolioCases } from '../data/portfolio';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const featuredServices = services.slice(0, 3);
const testimonial = testimonials[0];
const aboutNarrative = [
  "I’m Stefan, based in Iasi, Romania.",
  "I’ve been working in QA for over 8 years across web and mobile products. What I’ve always been drawn to, though, is the part beyond just testing — understanding how things actually feel for real users.",
  "I think about products from a user perspective. Not just whether something works, but whether it makes sense, feels clear, and flows naturally.",
  "That means getting involved early — questioning features, helping clarify decisions, and thinking through edge cases before they become real problems.",
  "I care about clarity. Clear features, clear flows, clear expectations.",
  "And when I work with teams, I keep things simple and direct. No noise, no overcomplication — just useful input that helps move things forward.",
];

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

  const renderPortfolioGraphic = (id: (typeof portfolioCases)[number]['id']) => {
    if (id === 'portfolio-website') {
      return (
        <div className="portfolio-graphic-shell mx-auto w-full max-w-[26rem]">
          <div className="portfolio-graphic-glow from-[#0070F3]/18 to-cyan-400/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d10] p-4 shadow-2xl">
            <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-400">
                Portfolio structure
              </span>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 flex gap-2">
                  <span className="rounded-full bg-[#0070F3]/12 px-3 py-1 text-[11px] text-[#8dc0ff]">
                    Home
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                    About
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                    Portfolio
                  </span>
                </div>
                <div className="h-3 w-3/4 rounded-full bg-white/10" />
                <div className="mt-3 h-3 w-full rounded-full bg-white/5" />
                <div className="mt-2 h-3 w-5/6 rounded-full bg-white/5" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Clarity', 'UX', 'Product'].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-4 text-center text-xs text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-[#0070F3]/20 bg-[#0070F3]/10 p-4">
                <div className="text-sm font-medium text-white">Clean content hierarchy</div>
                <div className="mt-2 text-xs leading-6 text-zinc-300">
                  Scannable sections, stronger CTA flow, and a calmer reading rhythm.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="portfolio-graphic-shell mx-auto w-full max-w-[22rem]">
        <div className="portfolio-graphic-glow from-violet-500/18 to-fuchsia-400/10" />
        <div className="portfolio-phone relative mx-auto h-[27rem] w-[16rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0d0e12] p-3 shadow-2xl">
          <div className="mx-auto mb-4 h-6 w-24 rounded-full bg-white/6" />
          <div className="h-full rounded-[1.7rem] border border-white/8 bg-gradient-to-b from-[#151722] via-[#101117] to-[#0d0e12] p-4">
            <div className="portfolio-breathe mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <div className="h-16 w-16 rounded-full border border-violet-300/40 bg-violet-300/8" />
            </div>
            <div className="mt-8 text-center">
              <div className="text-sm uppercase tracking-[0.28em] text-zinc-500">Absolutely Nothing</div>
              <div className="mt-4 text-xl font-semibold text-white">A calm interaction loop</div>
              <div className="mt-3 text-sm leading-7 text-zinc-400">
                Subtle timing, quiet motion, and a UX that feels intentionally different.
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                Motion paced to reduce friction
              </div>
              <div className="rounded-2xl border border-violet-400/15 bg-violet-400/8 px-4 py-3 text-sm text-zinc-200">
                Minimal interface, higher sensitivity to interaction details
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <section
        id="hero"
        className="scroll-mt-16 relative flex min-h-screen items-center justify-center overflow-hidden bg-sand pt-20 dark:bg-[#09090B]"
        onMouseEnter={updateGlow}
        onMouseMove={updateGlow}
        onMouseLeave={hideGlow}
      >
        <div id="hero-glow" ref={glowRef} style={{ left: '-9999px', top: '-9999px' }} />
        <div className="bg-grid pointer-events-none absolute inset-0 z-0" />

        <Container className="relative z-10">
          <div className="reveal mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink/60 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
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

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-ink/65 dark:text-zinc-400 md:text-xl">
              {profile.hero.supportingText}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
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

      <section id="services" className="scroll-mt-16 border-t border-ink/10 py-32 dark:border-white/5">
        <Container>
          <div className="reveal mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Quality beyond the checklist.</h2>
            <p className="mx-auto max-w-xl text-ink/65 dark:text-zinc-400">
              I bridge the gap between rigorous testing and intuitive product
              experience, so teams can ship with confidence.
            </p>
          </div>

          <div className="services-container reveal grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <article
                key={service.title}
                className="service-card group relative overflow-hidden rounded-xl border border-ink/10 bg-white/70 p-8 dark:border-white/5 dark:bg-[#18181B]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-ink/10 bg-white text-2xl text-[#0070F3] dark:border-white/10 dark:bg-white/5">
                  {index === 0 ? '◎' : index === 1 ? '◈' : '✦'}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-ink dark:text-[#FAFAFA]">{service.title}</h3>
                <p className="leading-relaxed text-ink/65 dark:text-zinc-400">{service.shortDescription}</p>
              </article>
            ))}
          </div>

          <div className="reveal relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0070F3]/20 to-indigo-500/20 blur-3xl opacity-50" />
            <div className="relative rotate-2 overflow-hidden rounded-xl border border-ink/10 bg-white/85 p-6 shadow-2xl transition-transform duration-500 hover:rotate-0 dark:border-white/10 dark:bg-[#09090B]">
              <div className="mb-6 flex items-center gap-2 border-b border-ink/10 pb-4 dark:border-white/5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-4 rounded bg-ink/5 px-2 py-1 text-xs text-ink/55 dark:bg-white/5 dark:text-zinc-400">
                  QA Report
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                  <span className="mt-0.5 text-xl text-red-500">!</span>
                  <div>
                      <p className="mb-1 text-sm font-medium text-ink dark:text-[#FAFAFA]">
                      Critical usability and behavior issues found
                    </p>
                      <p className="text-xs text-ink/55 dark:text-zinc-400">
                      Reproduction-ready steps, expected vs actual behavior,
                      and severity context for fast implementation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-[#0070F3]/20 bg-[#0070F3]/10 p-4">
                  <span className="mt-0.5 text-xl text-[#0070F3]">✦</span>
                  <div>
                      <p className="mb-1 text-sm font-medium text-ink dark:text-[#FAFAFA]">
                      UX and product refinement suggestions
                    </p>
                      <p className="text-xs text-ink/55 dark:text-zinc-400">
                      Actionable improvements for clarity, flow, and edge-case
                      handling.
                    </p>
                  </div>
                </div>
                <div className="flex h-20 items-center justify-center rounded-lg border border-ink/10 bg-ink/[0.03] dark:border-white/5 dark:bg-white/5">
                  <span className="font-mono text-xs text-ink/35 dark:text-zinc-500">
                    + more structured findings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="portfolio" className="scroll-mt-16 border-y border-ink/10 bg-white/35 py-32 dark:border-white/5 dark:bg-[#18181B]">
        <Container>
          <div className="mb-20 reveal text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Impact over output.</h2>
            <p className="mx-auto max-w-xl text-ink/65 dark:text-zinc-400">
              Proof of competence through structured thought process and
              practical outcomes.
            </p>
          </div>

          <div className="reveal mx-auto max-w-4xl">
            <div className="mb-8 flex justify-end">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPreviousCase}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/75 text-lg text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  aria-label="Previous portfolio case"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goToNextCase}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/75 text-lg text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  aria-label="Next portfolio case"
                >
                  →
                </button>
              </div>
            </div>

            <div className="portfolio-carousel-container rounded-[1.75rem] border border-ink/10 bg-white/80 shadow-2xl dark:border-white/10 dark:bg-[#101013]">
              <div
                className="portfolio-carousel-track"
                style={{ transform: `translateX(-${activeCaseIndex * 100}%)` }}
              >
                {portfolioCases.map((item, index) => (
                  <article
                    key={item.title}
                    className={[
                      'portfolio-carousel-slide',
                      index === activeCaseIndex ? 'portfolio-slide-active' : '',
                    ].join(' ')}
                  >
                    <div className="grid items-center gap-12 px-6 py-8 lg:grid-cols-2 lg:px-8 lg:py-10">
                      <div className="portfolio-slide-content space-y-6">
                        <p
                          className={[
                            'inline-flex rounded-full border px-3 py-1 text-xs font-medium',
                            item.accent === 'blue'
                              ? 'border-[#0070F3]/20 bg-[#0070F3]/10 text-[#0053b3] dark:text-[#8dc0ff]'
                              : 'border-violet-400/20 bg-violet-400/10 text-violet-700 dark:text-violet-200',
                          ].join(' ')}
                        >
                          {item.category}
                        </p>
                        <h3 className="max-w-xl text-3xl font-bold text-ink dark:text-[#FAFAFA] sm:text-4xl">
                          {item.title}
                        </h3>
                        <div className="max-w-xl space-y-4 text-base leading-8 text-ink/65 dark:text-zinc-400">
                          {item.description.split('\n\n').map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      <div className="portfolio-slide-graphic relative flex items-center justify-center">
                        {renderPortfolioGraphic(item.id)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {portfolioCases.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Go to ${item.title}`}
                  onClick={() => setActiveCaseIndex(index)}
                  className={[
                    'h-2.5 rounded-full transition-all',
                    index === activeCaseIndex
                      ? 'w-8 bg-[#0070F3]'
                      : 'w-2.5 bg-ink/20 hover:bg-ink/35 dark:bg-white/20 dark:hover:bg-white/40',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-16 border-b border-ink/10 py-32 dark:border-white/5">
        <Container>
          <div className="reveal mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              From kickoff to better software in days.
            </h2>
            <p className="mx-auto max-w-xl text-ink/65 dark:text-zinc-400">
              A transparent process that integrates smoothly with your team.
            </p>
          </div>

          <div className="reveal relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent dark:via-white/10 md:block" />
            {[
              {
                step: '01',
                title: 'Context Sync',
                desc: 'We align on product goals, risk areas, and user journey priorities.',
              },
              {
                step: '02',
                title: 'Deep Exploration',
                desc: 'I test workflows, edge cases, and usability heuristics with a product lens.',
              },
              {
                step: '03',
                title: 'Actionable Delivery',
                desc: 'You get a prioritized report with clear next steps your team can ship fast.',
              },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div
                  className={[
                    'relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#18181B] font-bold',
                    index === 2
                      ? 'bg-[#0070F3] text-white shadow-[0_0_20px_rgba(0,112,243,0.3)]'
                      : 'bg-white text-ink shadow-[0_0_20px_rgba(0,112,243,0.12)] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:shadow-[0_0_20px_rgba(0,112,243,0.3)]',
                  ].join(' ')}
                >
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="px-4 text-sm text-ink/65 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="about"
        className="scroll-mt-16 border-t border-ink/10 bg-white/45 py-32 dark:border-white/5 dark:bg-[#101013]"
      >
        <Container>
          <div className="reveal mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-white/70 dark:border-white/5 dark:bg-[#18181B] md:aspect-[4/3]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-sand/60 to-transparent opacity-70 dark:from-[#09090B] dark:opacity-60" />
              <div className="relative z-0 flex h-full items-center justify-center">
                <ProfileAvatar sizeClassName="h-56 w-56 sm:h-64 sm:w-64" />
              </div>
              <span className="absolute bottom-4 left-4 z-20 text-xs font-mono text-ink/45 dark:text-white/50">
                {profile.fullName}
              </span>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-ink dark:text-[#FAFAFA] md:text-4xl">
                Obsessed with seamless journeys.
              </h2>
              <div className="max-w-2xl space-y-5 leading-relaxed text-ink/65 dark:text-zinc-400">
                {aboutNarrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3 className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-ink/50 dark:text-zinc-400">
              Trusted by teams and collaborators
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="relative rounded-xl border border-ink/10 bg-white/70 p-8 dark:border-white/5 dark:bg-[#18181B]">
                <p className="relative z-10 mb-6 italic text-ink dark:text-[#FAFAFA]">
                  "{testimonial.shortQuote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/8 text-xs font-bold dark:bg-white/10">
                    OB
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink dark:text-[#FAFAFA]">{testimonial.author}</p>
                    <p className="text-xs text-ink/55 dark:text-zinc-400">{testimonial.relationship}</p>
                  </div>
                </div>
              </article>

              <article className="relative rounded-xl border border-ink/10 bg-white/70 p-8 dark:border-white/5 dark:bg-[#18181B]">
                <p className="relative z-10 mb-6 italic text-ink dark:text-[#FAFAFA]">
                  "Clear communication, strong structure, and practical product
                  feedback made collaboration smooth and effective."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/8 text-xs font-bold dark:bg-white/10">
                    QA
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink dark:text-[#FAFAFA]">Product Collaboration</p>
                    <p className="text-xs text-ink/55 dark:text-zinc-400">QA + UX Mindset</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-16 relative overflow-hidden border-t border-ink/10 py-32 dark:border-white/5">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0070F3]/5 dark:to-[#0070F3]/5" />
        <Container>
          <div className="reveal relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-ink dark:text-[#FAFAFA] md:text-5xl">
              Ready to stop losing users to bad UX and bugs?
            </h2>
            <p className="mb-10 text-xl text-ink/65 dark:text-zinc-400">
              Let&apos;s refine your product. Reach out directly or hire me securely through Fiverr.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${contact.email}`}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-ink px-8 py-4 font-medium text-white transition-colors hover:bg-ink/90 dark:bg-[#FAFAFA] dark:text-[#09090B] dark:hover:bg-white/90 sm:w-auto"
              >
                Email Me
              </a>
              <a
                href={contact.fiverrUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-ink/10 bg-white/70 px-8 py-4 font-medium text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-[#18181B] dark:text-[#FAFAFA] dark:hover:bg-white/5 sm:w-auto"
              >
                Hire Me via Fiverr <span className="text-ink/35 dark:text-zinc-500">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
