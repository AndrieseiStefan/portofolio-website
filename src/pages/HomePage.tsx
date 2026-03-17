import { useEffect, useState } from 'react';
import { Container } from '../components/ui/Container';
import { ProfileAvatar } from '../components/ui/ProfileAvatar';
import { contact } from '../data/contact';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const featuredServices = services.slice(0, 3);
const highlightedExperience = experience[0];
const testimonial = testimonials[0];
const aboutPreview = profile.about.intro.slice(0, 2);

export function HomePage() {
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

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
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
        onMouseMove={(event) =>
          setGlow({
            x: event.nativeEvent.offsetX,
            y: event.nativeEvent.offsetY,
            visible: true,
          })
        }
        onMouseLeave={() => setGlow((prev) => ({ ...prev, visible: false }))}
      >
        <div
          id="hero-glow"
          style={{
            left: `${glow.x}px`,
            top: `${glow.y}px`,
            opacity: glow.visible ? 1 : 0,
          }}
        />
        <div className="bg-grid pointer-events-none absolute inset-0 z-0" />

        <Container className="relative z-10">
          <div className="reveal mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for freelance & consulting
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-[#FAFAFA] md:text-7xl">
              {profile.hero.headline.split(' and clear UX feedback.')[0]}.
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                {' '}
                I refine the entire user experience.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              {profile.summary}
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
                className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-transparent px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                View Fiverr Gigs <span className="text-zinc-500">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="border-t border-white/5 py-32">
        <Container>
          <div className="reveal mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Quality beyond the checklist.</h2>
            <p className="mx-auto max-w-xl text-zinc-400">
              I bridge the gap between rigorous testing and intuitive product
              experience, so teams can ship with confidence.
            </p>
          </div>

          <div className="services-container reveal grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <article
                key={service.title}
                className="service-card group relative overflow-hidden rounded-xl border border-white/5 bg-[#18181B] p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-2xl text-[#0070F3]">
                  {index === 0 ? '◎' : index === 1 ? '◈' : '✦'}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#FAFAFA]">{service.title}</h3>
                <p className="leading-relaxed text-zinc-400">{service.shortDescription}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="portfolio" className="border-y border-white/5 bg-[#18181B] py-32">
        <Container>
          <div className="mb-20 reveal">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Impact over output.</h2>
            <p className="max-w-xl text-zinc-400">
              Proof of competence through structured thought process and
              practical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="reveal">
              <div className="mb-6 inline-block rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                {highlightedExperience.company}
              </div>
              <h3 className="mb-8 text-3xl font-bold text-[#FAFAFA]">
                {highlightedExperience.role}
              </h3>

              <div className="space-y-6">
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#0070F3]">
                  <h4 className="mb-1 font-semibold text-[#FAFAFA]">The Context</h4>
                  <p className="text-zinc-400">{highlightedExperience.projectContext}</p>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#0070F3]">
                  <h4 className="mb-1 font-semibold text-[#FAFAFA]">The Action</h4>
                  <p className="text-zinc-400">{highlightedExperience.shortSummary}</p>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-green-500">
                  <h4 className="mb-1 font-semibold text-[#FAFAFA]">The Impact</h4>
                  <p className="text-zinc-400">
                    Structured feedback, clear prioritization, and better
                    decisions before release helped teams move faster and reduce
                    rework.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0070F3]/20 to-indigo-500/20 blur-3xl opacity-50" />
              <div className="relative rotate-2 overflow-hidden rounded-xl border border-white/10 bg-[#09090B] p-6 shadow-2xl transition-transform duration-500 hover:rotate-0">
                <div className="mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 rounded bg-white/5 px-2 py-1 text-xs text-zinc-400">
                    QA Report
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                    <span className="mt-0.5 text-xl text-red-500">!</span>
                    <div>
                      <p className="mb-1 text-sm font-medium text-[#FAFAFA]">
                        Critical usability and behavior issues found
                      </p>
                      <p className="text-xs text-zinc-400">
                        Reproduction-ready steps, expected vs actual behavior,
                        and severity context for fast implementation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-[#0070F3]/20 bg-[#0070F3]/10 p-4">
                    <span className="mt-0.5 text-xl text-[#0070F3]">✦</span>
                    <div>
                      <p className="mb-1 text-sm font-medium text-[#FAFAFA]">
                        UX and product refinement suggestions
                      </p>
                      <p className="text-xs text-zinc-400">
                        Actionable improvements for clarity, flow, and edge-case
                        handling.
                      </p>
                    </div>
                  </div>
                  <div className="flex h-20 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                    <span className="font-mono text-xs text-zinc-500">
                      + more structured findings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="border-b border-white/5 py-32">
        <Container>
          <div className="reveal mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              From kickoff to better software in days.
            </h2>
            <p className="mx-auto max-w-xl text-zinc-400">
              A transparent process that integrates smoothly with your team.
            </p>
          </div>

          <div className="reveal relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
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
                      : 'bg-[#09090B] text-[#FAFAFA] shadow-[0_0_20px_rgba(0,112,243,0.3)]',
                  ].join(' ')}
                >
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="px-4 text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="py-32">
        <Container>
          <div className="reveal mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-[#18181B] md:aspect-[4/3]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#09090B] to-transparent opacity-60" />
              <div className="relative z-0 flex h-full items-center justify-center">
                <ProfileAvatar sizeClassName="h-56 w-56 sm:h-64 sm:w-64" />
              </div>
              <span className="absolute bottom-4 left-4 z-20 text-xs font-mono text-white/50">
                {profile.fullName}
              </span>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#FAFAFA] md:text-4xl">
                Obsessed with seamless journeys.
              </h2>
              <div className="space-y-4 leading-relaxed text-zinc-400">
                {aboutPreview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3 className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Trusted by teams and collaborators
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="relative rounded-xl border border-white/5 bg-[#18181B] p-8">
                <p className="relative z-10 mb-6 italic text-[#FAFAFA]">
                  "{testimonial.shortQuote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                    OB
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#FAFAFA]">{testimonial.author}</p>
                    <p className="text-xs text-zinc-400">{testimonial.relationship}</p>
                  </div>
                </div>
              </article>

              <article className="relative rounded-xl border border-white/5 bg-[#18181B] p-8">
                <p className="relative z-10 mb-6 italic text-[#FAFAFA]">
                  "Clear communication, strong structure, and practical product
                  feedback made collaboration smooth and effective."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                    QA
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#FAFAFA]">Product Collaboration</p>
                    <p className="text-xs text-zinc-400">QA + UX Mindset</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/5 py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0070F3]/5" />
        <Container>
          <div className="reveal relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[#FAFAFA] md:text-5xl">
              Ready to stop losing users to bad UX and bugs?
            </h2>
            <p className="mb-10 text-xl text-zinc-400">
              Let&apos;s refine your product. Reach out directly or hire me securely through Fiverr.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${contact.email}`}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FAFAFA] px-8 py-4 font-medium text-[#09090B] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Email Me
              </a>
              <a
                href={contact.fiverrUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-[#18181B] px-8 py-4 font-medium text-[#FAFAFA] transition-colors hover:bg-white/5 sm:w-auto"
              >
                Secure Escrow via Fiverr <span className="text-zinc-500">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
