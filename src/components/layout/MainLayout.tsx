import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-sand text-ink dark:bg-[#09090B] dark:text-[#FAFAFA]">
      <ScrollToTop />
      <Header />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  );
}
