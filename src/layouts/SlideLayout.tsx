import PageNav from '@/components/PageNav';
import SlideTitle from '@/components/SlideTitle';

interface SlideLayoutProps {
  subtitle?: string;
  title?: string;
  hideTitle?: boolean;
  children: React.ReactNode;
}

export default function SlideLayout({ subtitle, title, hideTitle, children }: SlideLayoutProps) {
  return (
    <div className="h-screen bg-neutral-900 flex items-center justify-center p-[2vw]">
      <PageNav />

      <main className="w-full max-w-[1280px] aspect-video bg-black rounded-lg shadow-2xl overflow-hidden flex flex-col p-12">
        {!hideTitle && title && <SlideTitle subtitle={subtitle || ''} title={title} />}

        <div className="flex-1 min-h-0">
          {children}
        </div>
      </main>
    </div>
  );
}
