import PageNav from '@/components/PageNav';
import SlideTitle from '@/components/SlideTitle';

interface SlideLayoutProps {
  subtitle: string;
  title: string;
  children: React.ReactNode;
}

export default function SlideLayout({ subtitle, title, children }: SlideLayoutProps) {
  return (
    <div className="h-screen bg-neutral-900 flex items-center justify-center p-[2vw]">
      <PageNav />

      <div className="w-full max-w-[1280px] aspect-video bg-black rounded-lg shadow-2xl overflow-hidden flex flex-col p-12">
        <SlideTitle subtitle={subtitle} title={title} />

        <div className="flex-1 min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
}
