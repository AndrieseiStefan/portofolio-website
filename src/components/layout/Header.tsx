import type { MouseEvent } from 'react';
import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { useTheme } from '../theme/ThemeProvider';
import { Container } from '../ui/Container';
import { FiverrIcon } from '../ui/FiverrIcon';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href');

    if (!href?.startsWith('#')) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();

    const headerOffset = 64;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, '', href);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-md',
        isDark ? 'border-white/5 bg-[#09090B]/92' : 'border-ink/10 bg-sand/90',
      ].join(' ')}
    >
      <Container className="h-16">
        <div className="flex h-full items-center justify-between">
          <a
            href="#hero"
            onClick={handleSectionClick}
            className="brand-link font-semibold tracking-tight text-ink dark:text-white"
            aria-label={profile.fullName}
          >
            <span className="brand-text">
              <span>Stefan A</span>
              <span className="brand-suffix" aria-hidden="true">
                ndriesei
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-ink/60 md:flex dark:text-zinc-400">
            <a
              href="#services"
              onClick={handleSectionClick}
              className="transition-colors hover:text-ink dark:hover:text-white"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={handleSectionClick}
              className="transition-colors hover:text-ink dark:hover:text-white"
            >
              Portfolio
            </a>
            <a
              href="#process"
              onClick={handleSectionClick}
              className="transition-colors hover:text-ink dark:hover:text-white"
            >
              Process
            </a>
            <a
              href="#about"
              onClick={handleSectionClick}
              className="transition-colors hover:text-ink dark:hover:text-white"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle compact />
            <a
              href="#contact"
              onClick={handleSectionClick}
              className="hidden rounded border border-ink/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Hire me on Fiverr"
              className="inline-flex items-center gap-2 rounded border border-ink/10 bg-white/70 px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <FiverrIcon className="h-4 w-auto shrink-0" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
