import { Container } from '../../ui/Container';
import { contact } from '../../../data/contact';

export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-16 relative overflow-hidden border-t border-ink/12 py-32 dark:border-white/5">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0070F3]/5 dark:to-[#0070F3]/5" />
      <Container>
        <div className="reveal relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-ink dark:text-[#FAFAFA] md:text-5xl">
            Ready to stop losing users to bad UX and bugs?
          </h2>
          <p className="mb-10 text-xl text-ink/72 dark:text-zinc-400">
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
              className="flex w-full items-center justify-center gap-2 rounded-md border border-ink/12 bg-[#f7f1e8] px-8 py-4 font-medium text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-[#18181B] dark:text-[#FAFAFA] dark:hover:bg-white/5 sm:w-auto"
            >
              Hire Me via Fiverr <span className="text-ink/35 dark:text-zinc-500">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
