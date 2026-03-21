import { Container } from '../../ui/Container';
import { portfolioCases } from '../../../data/portfolio';
import { HomePortfolioGraphic } from './HomePortfolioGraphic';

export function HomePortfolio({
  activeCaseIndex,
  onPrevious,
  onNext,
  onSelectCase,
}: {
  activeCaseIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelectCase: (index: number) => void;
}) {
  return (
    <section id="portfolio" className="scroll-mt-16 border-y border-ink/10 bg-white/35 py-32 dark:border-white/5 dark:bg-[#18181B]">
      <Container>
        <div className="mb-20 reveal text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Impact over output.</h2>
          <p className="mx-auto max-w-xl text-ink/65 dark:text-zinc-400">
            Proof of competence through structured thought process and practical outcomes.
          </p>
        </div>

        <div className="reveal mx-auto max-w-4xl">
          <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onPrevious}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/75 text-lg text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                aria-label="Previous portfolio case"
              >
                ←
              </button>
              <button
                type="button"
                onClick={onNext}
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
                      <HomePortfolioGraphic id={item.id} />
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
                onClick={() => onSelectCase(index)}
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
  );
}
