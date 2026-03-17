import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';
import { FiverrIcon } from '../ui/FiverrIcon';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-md">
      <Container className="h-16">
        <div className="flex h-full items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-white">
            {profile.displayName}
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#portfolio" className="transition-colors hover:text-white">
              Portfolio
            </a>
            <a href="#process" className="transition-colors hover:text-white">
              Process
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Hire me on Fiverr"
              className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <FiverrIcon className="h-4 w-auto shrink-0" />
              <span>Hire me</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
