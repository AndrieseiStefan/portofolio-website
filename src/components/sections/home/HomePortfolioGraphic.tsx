import { portfolioCases } from '../../../data/portfolio';

export function HomePortfolioGraphic({
  id,
}: {
  id: (typeof portfolioCases)[number]['id'];
}) {
  if (id === 'portfolio-website') {
    return (
      <div className="portfolio-graphic-shell mx-auto w-full max-w-[26rem]">
        <div className="portfolio-graphic-glow from-[#0070F3]/18 to-cyan-400/10" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d10] p-4 shadow-2xl">
          <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-4 rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-400">
              Portfolio structure
            </span>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex gap-2">
                <span className="rounded-full bg-[#0070F3]/12 px-3 py-1 text-[11px] text-[#8dc0ff]">
                  Home
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                  About
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                  Portfolio
                </span>
              </div>
              <div className="h-3 w-3/4 rounded-full bg-white/10" />
              <div className="mt-3 h-3 w-full rounded-full bg-white/5" />
              <div className="mt-2 h-3 w-5/6 rounded-full bg-white/5" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['Clarity', 'UX', 'Product'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-4 text-center text-xs text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[#0070F3]/20 bg-[#0070F3]/10 p-4">
              <div className="text-sm font-medium text-white">Clean content hierarchy</div>
              <div className="mt-2 text-xs leading-6 text-zinc-300">
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
      <div className="portfolio-phone relative mx-auto h-[27rem] w-[16rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0d0e12] p-3 shadow-2xl">
        <div className="mx-auto mb-4 h-6 w-24 rounded-full bg-white/6" />
        <div className="h-full rounded-[1.7rem] border border-white/8 bg-gradient-to-b from-[#151722] via-[#101117] to-[#0d0e12] p-4">
          <div className="portfolio-breathe mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <div className="h-16 w-16 rounded-full border border-violet-300/40 bg-violet-300/8" />
          </div>
          <div className="mt-8 text-center">
            <div className="text-sm uppercase tracking-[0.28em] text-zinc-500">
              Absolutely Nothing
            </div>
            <div className="mt-4 text-xl font-semibold text-white">A calm interaction loop</div>
            <div className="mt-3 text-sm leading-7 text-zinc-400">
              Subtle timing, quiet motion, and a UX that feels intentionally different.
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
              Motion paced to reduce friction
            </div>
            <div className="rounded-2xl border border-violet-400/15 bg-violet-400/8 px-4 py-3 text-sm text-zinc-200">
              Minimal interface, higher sensitivity to interaction details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
