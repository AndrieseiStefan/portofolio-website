import { Container } from '../../ui/Container';
import { services } from '../../../data/services';

const featuredServices = services.slice(0, 3);

export function HomeServices() {
  return (
    <section id="services" className="scroll-mt-16 border-t border-ink/10 py-32 dark:border-white/5">
      <Container>
        <div className="reveal mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Quality beyond the checklist.</h2>
          <p className="mx-auto max-w-xl text-ink/65 dark:text-zinc-400">
            I bridge the gap between rigorous testing and intuitive product experience, so teams can ship with confidence.
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
                    Reproduction-ready steps, expected vs actual behavior, and severity context for fast implementation.
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
                    Actionable improvements for clarity, flow, and edge-case handling.
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
  );
}
