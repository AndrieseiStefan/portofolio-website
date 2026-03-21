import { Container } from '../../ui/Container';

const processSteps = [
  {
    step: '01',
    title: 'Context Sync',
    desc: 'We align on product goals, risk areas, and user journey priorities.',
  },
  {
    step: '02',
    title: 'Deep Exploration',
    desc: 'I test real user flows, edge cases, and identify usability issues that impact experience.',
  },
  {
    step: '03',
    title: 'Actionable Delivery',
    desc: 'You get a clear, prioritized report with exact issues and what to fix next.',
  },
] as const;

export function HomeProcess() {
  return (
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
          {processSteps.map((item, index) => (
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
  );
}
