import { Container } from '../../ui/Container';
import { ProfileAvatar } from '../../ui/ProfileAvatar';
import { profile } from '../../../data/profile';
import { testimonials } from '../../../data/testimonials';

const testimonial = testimonials[0];
const aboutNarrative = [
  "I’m Stefan, based in Iasi, Romania.",
  "I’ve been working in QA for over 8 years across web and mobile products. What I’ve always been drawn to, though, is the part beyond just testing — understanding how things actually feel for real users.",
  "I think about products from a user perspective. Not just whether something works, but whether it makes sense, feels clear, and flows naturally.",
  "That means getting involved early — questioning features, helping clarify decisions, and thinking through edge cases before they become real problems.",
  "I care about clarity. Clear features, clear flows, clear expectations.",
  "And when I work with teams, I keep things simple and direct. No noise, no overcomplication — just useful input that helps move things forward.",
];

export function HomeAbout() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-t border-ink/12 bg-[#f1e8dc] py-32 dark:border-white/5 dark:bg-[#101013]"
    >
      <Container>
        <div className="reveal mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-2 lg:text-left">
            <h2 className="mb-6 text-3xl font-bold text-ink dark:text-[#FAFAFA] md:text-4xl">
              Obsessed with seamless journeys.
            </h2>
            <div className="mx-auto max-w-2xl space-y-5 leading-relaxed text-ink/72 dark:text-zinc-400 lg:mx-0">
              {aboutNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[24rem] lg:order-1 lg:max-w-none">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/12 bg-[#f7f1e8] shadow-[0_14px_34px_rgba(13,27,30,0.06)] dark:border-white/5 dark:bg-[#18181B] dark:shadow-none">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-sand/60 to-transparent opacity-70 dark:from-[#09090B] dark:opacity-60" />
              <div className="relative z-0 flex h-full items-center justify-center">
                <ProfileAvatar sizeClassName="h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56 xl:h-64 xl:w-64" />
              </div>
              <span className="absolute bottom-3 left-4 z-20 font-mono text-[0.6rem] leading-none text-ink/55 dark:text-white/50">
                {profile.fullName}
              </span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-ink/60 dark:text-zinc-400">
            Trusted by teams and collaborators
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="relative rounded-xl border border-ink/12 bg-[#f4ede3] p-8 shadow-[0_14px_34px_rgba(13,27,30,0.08)] dark:border-white/5 dark:bg-[#18181B] dark:shadow-none">
              <p className="relative z-10 mb-6 italic text-ink dark:text-[#FAFAFA]">
                "{testimonial.shortQuote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/10 text-xs font-bold dark:bg-white/10">
                  OB
                </div>
                <div>
                  <p className="text-sm font-bold text-ink dark:text-[#FAFAFA]">{testimonial.author}</p>
                  <p className="text-xs text-ink/65 dark:text-zinc-400">{testimonial.relationship}</p>
                </div>
              </div>
            </article>

            <article className="relative rounded-xl border border-ink/12 bg-[#f4ede3] p-8 shadow-[0_14px_34px_rgba(13,27,30,0.08)] dark:border-white/5 dark:bg-[#18181B] dark:shadow-none">
              <p className="relative z-10 mb-6 italic text-ink dark:text-[#FAFAFA]">
                "Clear communication, strong structure, and practical product feedback made collaboration smooth and effective."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/10 text-xs font-bold dark:bg-white/10">
                  QA
                </div>
                <div>
                  <p className="text-sm font-bold text-ink dark:text-[#FAFAFA]">Product Collaboration</p>
                  <p className="text-xs text-ink/65 dark:text-zinc-400">QA + UX Mindset</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
