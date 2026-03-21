import { useEffect, useRef, useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    window.addEventListener('resize', closeMenuOnDesktop);

    return () => window.removeEventListener('resize', closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (!target) {
        return;
      }

      if (mobileMenuRef.current?.contains(target)) {
        return;
      }

      if (mobileMenuButtonRef.current?.contains(target)) {
        return;
      }

      setIsMobileMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isMobileMenuOpen]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);

    const href = event.currentTarget.getAttribute('href');

    if (!href?.startsWith('#')) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();

    const isContactSection = href === '#contact';

    if (isContactSection) {
      window.history.replaceState(null, '', href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    const headerOffset = window.innerWidth < 1024 ? 52 : 64;
    const sectionContentOffset = window.innerWidth < 1024 ? 88 : 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset + sectionContentOffset;

    window.history.replaceState(null, '', href);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={[
        'site-header fixed inset-x-0 top-0 z-[100] border-b',
        isDark ? 'border-white/5 bg-[#09090B]' : 'border-ink/12 bg-[#f3ebdf]',
      ].join(' ')}
    >
      <Container className="h-16">
        <div className="flex h-full items-center justify-between gap-3 md:gap-6">
          <a
            href="#hero"
            onClick={handleSectionClick}
            className="brand-link shrink-0 font-semibold tracking-tight text-ink dark:text-white"
            aria-label={profile.fullName}
          >
            <span className="brand-text">
              <span>Stefan A</span>
              <span className="brand-suffix" aria-hidden="true">
                ndriesei
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-ink/75 md:flex lg:gap-8 dark:text-zinc-400">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleSectionClick}
                className="transition-colors hover:text-ink dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle compact />
            <a
              href="#contact"
              onClick={handleSectionClick}
              className="hidden h-10 items-center rounded border border-ink/12 bg-[#f7f1e8] px-4 text-sm font-medium text-ink transition-colors hover:bg-white md:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Hire me on Fiverr"
              className="inline-flex h-10 items-center gap-2 rounded border border-ink/12 bg-[#f7f1e8] px-3 text-sm font-medium text-ink transition-colors hover:bg-white max-[349px]:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <FiverrIcon className="h-4 w-auto shrink-0" />
              <span>Hire Me</span>
            </a>
            <button
              ref={mobileMenuButtonRef}
              type="button"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-ink/12 bg-[#f7f1e8] text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070F3] focus-visible:ring-offset-2 focus-visible:ring-offset-sand dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-[#09090B] md:hidden"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              </span>
              <span className="relative block h-3.5 w-4">
                <span
                  className={[
                    'absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ease-out',
                    isMobileMenuOpen ? 'translate-y-[6px] rotate-45' : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ease-out',
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ease-out',
                    isMobileMenuOpen ? '-translate-y-[6px] -rotate-45' : '',
                  ].join(' ')}
                />
              </span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            ref={mobileMenuRef}
            className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-2xl border border-ink/12 bg-[#f3ebdf] p-4 shadow-[0_18px_48px_rgba(13,27,30,0.14)] dark:border-white/10 dark:bg-[#121316] md:hidden"
          >
            <nav className="flex flex-col gap-1 text-sm text-ink dark:text-white">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleSectionClick}
                  className="rounded-xl px-3 py-3 font-medium transition-colors hover:bg-ink/[0.05] dark:hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="my-3 border-t border-ink/12 dark:border-white/10" />

            <a
              href="#contact"
              onClick={handleSectionClick}
              className="inline-flex h-10 w-full items-center justify-center rounded-xl border border-ink/12 bg-[#f7f1e8] px-4 text-sm font-medium text-ink transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>

            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Hire me on Fiverr"
              className="mt-2 hidden h-10 w-full items-center justify-center gap-2 rounded-xl border border-ink/12 bg-[#f7f1e8] px-4 text-sm font-medium text-ink transition-colors hover:bg-white max-[349px]:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <FiverrIcon className="h-4 w-auto shrink-0" />
              <span>Hire Me</span>
            </a>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
