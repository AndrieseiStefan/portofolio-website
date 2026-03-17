import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090B]">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-400 md:flex-row">
          <p>© 2026 {profile.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
              Email
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Fiverr
            </a>
          </div>
        </div>
        <p className="mt-3 text-center text-xs italic text-zinc-500">Cheers, Explorer In Motion</p>
      </Container>
    </footer>
  );
}
