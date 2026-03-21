import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/70 dark:border-white/5 dark:bg-[#09090B]">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-ink/65 dark:text-zinc-400 md:flex-row">
          <p>© 2026 {profile.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-ink dark:hover:text-white">
              Email
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink dark:hover:text-white"
            >
              Fiverr
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
