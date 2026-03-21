import { useRef } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();

    toggleTheme(
      buttonRect
        ? {
            x: buttonRect.left + buttonRect.width / 2,
            y: buttonRect.top + buttonRect.height / 2,
          }
        : undefined,
    );
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className={[
        'group relative inline-flex items-center rounded-full border border-ink/10 bg-white/80 p-1 text-ink shadow-sm backdrop-blur-md transition hover:border-[#0070F3]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070F3] focus-visible:ring-offset-2 focus-visible:ring-offset-sand dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-[#0070F3]/45 dark:hover:bg-white/[0.08] dark:focus-visible:ring-offset-[#0d1416]',
        compact ? 'h-10 w-[84px]' : 'h-10 w-[84px]',
      ].join(' ')}
    >
      <span className="absolute inset-[3px] rounded-full bg-black/[0.02] dark:bg-white/[0.03]" />
      <span className="absolute inset-[4px]">
        <span
          className={[
            'absolute inset-y-0 left-0 w-[33px] transition-transform duration-300 ease-out',
            isDark ? 'translate-x-[39px]' : 'translate-x-[1px]',
          ].join(' ')}
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0070F3] to-[#2f83ff] shadow-[0_8px_22px_rgba(0,112,243,0.32)]" />
        </span>
      </span>
      <span className="relative z-10 grid w-full grid-cols-2 items-center">
        <span
          className={[
            'inline-flex h-8 w-full items-center justify-center transition',
            isDark ? 'text-ink/55 dark:text-white/65' : 'text-white',
          ].join(' ')}
        >
          <SunIcon className="h-[15px] w-[15px]" />
        </span>
        <span
          className={[
            'inline-flex h-8 w-full items-center justify-center transition',
            isDark ? 'text-white' : 'text-ink/55 dark:text-white/65',
          ].join(' ')}
        >
          <MoonIcon className="h-[15px] w-[15px]" />
        </span>
      </span>
    </button>
  );
}

function SunIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2.75V5.5M12 18.5v2.75M21.25 12H18.5M5.5 12H2.75M18.54 5.46 16.6 7.4M7.4 16.6l-1.94 1.94M18.54 18.54 16.6 16.6M7.4 7.4 5.46 5.46"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M18.5 14.8A6.8 6.8 0 0 1 9.2 5.5a7.8 7.8 0 1 0 9.3 9.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
