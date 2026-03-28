import { portfolioCases } from '../../../data/portfolio';
import { useTheme } from '../../theme/ThemeProvider';

export function HomePortfolioGraphic({
  id,
}: {
  id: (typeof portfolioCases)[number]['id'];
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (id === 'portfolio-website') {
    return (
      <div className="portfolio-graphic-shell mx-auto w-full max-w-[26rem]">
        <div className="portfolio-graphic-glow from-[#0070F3]/18 to-cyan-400/10" />
        <div
          className={[
            'relative overflow-hidden rounded-[2rem] border p-4 shadow-2xl',
            isDark
              ? 'border-white/10 bg-[#0c0d10]'
              : 'border-ink/12 bg-[#f7fbff]',
          ].join(' ')}
        >
          <div
            className={[
              'mb-4 flex items-center gap-2 border-b pb-4',
              isDark ? 'border-white/5' : 'border-ink/10',
            ].join(' ')}
          >
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span
              className={[
                'ml-4 rounded-md px-2 py-1 text-[11px]',
                isDark ? 'bg-white/5 text-zinc-400' : 'bg-[#e8eff9] text-ink/60',
              ].join(' ')}
            >
              Portfolio structure
            </span>
          </div>
          <div className="space-y-3">
            <div
              className={[
                'rounded-2xl border p-4',
                isDark
                  ? 'border-white/8 bg-white/[0.03]'
                  : 'border-ink/12 bg-[#edf4fd]',
              ].join(' ')}
            >
              <div className="mb-3 flex gap-2">
                <span
                  className={[
                    'rounded-full px-3 py-1 text-[11px]',
                    isDark
                      ? 'bg-[#0070F3]/12 text-[#8dc0ff]'
                      : 'bg-[#0070F3]/12 text-[#005fcc]',
                  ].join(' ')}
                >
                  Home
                </span>
                <span
                  className={[
                    'rounded-full px-3 py-1 text-[11px]',
                    isDark ? 'bg-white/5 text-zinc-400' : 'bg-white text-ink/58',
                  ].join(' ')}
                >
                  About
                </span>
                <span
                  className={[
                    'rounded-full px-3 py-1 text-[11px]',
                    isDark ? 'bg-white/5 text-zinc-400' : 'bg-white text-ink/58',
                  ].join(' ')}
                >
                  Portfolio
                </span>
              </div>
              <div className={['h-3 w-3/4 rounded-full', isDark ? 'bg-white/10' : 'bg-ink/12'].join(' ')} />
              <div className={['mt-3 h-3 w-full rounded-full', isDark ? 'bg-white/5' : 'bg-ink/8'].join(' ')} />
              <div className={['mt-2 h-3 w-5/6 rounded-full', isDark ? 'bg-white/5' : 'bg-ink/8'].join(' ')} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['Clarity', 'UX', 'Product'].map((item) => (
                <div
                  key={item}
                  className={[
                    'rounded-2xl border px-3 py-4 text-center text-xs',
                    isDark
                      ? 'border-white/8 bg-white/[0.03] text-zinc-300'
                      : 'border-ink/12 bg-white text-ink/72',
                  ].join(' ')}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              className={[
                'rounded-2xl border p-4',
                isDark
                  ? 'border-[#0070F3]/20 bg-[#0070F3]/10'
                  : 'border-[#0070F3]/18 bg-[#0070F3]/8',
              ].join(' ')}
            >
              <div className={['text-sm font-medium', isDark ? 'text-white' : 'text-[#004da8]'].join(' ')}>
                Clean content hierarchy
              </div>
              <div className={['mt-2 text-xs leading-6', isDark ? 'text-zinc-300' : 'text-ink/68'].join(' ')}>
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
      <div
        className={[
          'portfolio-phone relative mx-auto h-[27rem] w-[16rem] overflow-hidden rounded-[2.2rem] border p-3 shadow-2xl',
          isDark
            ? 'border-white/10 bg-[#0d0e12]'
            : 'border-ink/12 bg-[#f8fbff]',
        ].join(' ')}
      >
        <div className={['mx-auto mb-4 h-6 w-24 rounded-full', isDark ? 'bg-white/6' : 'bg-ink/8'].join(' ')} />
        <div
          className={[
            'h-full rounded-[1.7rem] border p-4',
            isDark
              ? 'border-white/8 bg-gradient-to-b from-[#151722] via-[#101117] to-[#0d0e12]'
              : 'border-ink/12 bg-gradient-to-b from-[#ffffff] via-[#f4f8ff] to-[#edf4fd]',
          ].join(' ')}
        >
          <div
            className={[
              'portfolio-breathe mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border',
              isDark
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-[#0070F3]/14 bg-[#0070F3]/6',
            ].join(' ')}
          >
            <div
              className={[
                'h-16 w-16 rounded-full border',
                isDark
                  ? 'border-violet-300/40 bg-violet-300/8'
                  : 'border-[#7aaeff]/40 bg-[#7aaeff]/12',
              ].join(' ')}
            />
          </div>
          <div className="mt-8 text-center">
            <div className={['text-sm uppercase tracking-[0.28em]', isDark ? 'text-zinc-500' : 'text-ink/45'].join(' ')}>
              Absolutely Nothing
            </div>
            <div className={['mt-4 text-xl font-semibold', isDark ? 'text-white' : 'text-ink'].join(' ')}>
              A calm interaction loop
            </div>
            <div className={['mt-3 text-sm leading-7', isDark ? 'text-zinc-400' : 'text-ink/68'].join(' ')}>
              Subtle timing, quiet motion, and a UX that feels intentionally different.
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <div
              className={[
                'rounded-2xl border px-4 py-3 text-sm',
                isDark
                  ? 'border-white/8 bg-white/[0.03] text-zinc-300'
                  : 'border-ink/12 bg-white text-ink/72',
              ].join(' ')}
            >
              Motion paced to reduce friction
            </div>
            <div
              className={[
                'rounded-2xl border px-4 py-3 text-sm',
                isDark
                  ? 'border-violet-400/15 bg-violet-400/8 text-zinc-200'
                  : 'border-[#0070F3]/14 bg-[#0070F3]/8 text-ink/72',
              ].join(' ')}
            >
              Minimal interface, higher sensitivity to interaction details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
