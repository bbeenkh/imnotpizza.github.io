import { purple } from '@/styles/theme';

interface SlideTitleProps {
  subtitle: string;
  title: string;
}

export default function SlideTitle({ subtitle, title }: SlideTitleProps) {
  return (
    <div className="shrink-0">
      <p className="text-[clamp(0.495rem,0.88vw,0.77rem)] uppercase tracking-[0.25em] mb-[0.4em]" style={{ color: purple.accent }}>
        {subtitle}
      </p>
      <h1 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold text-white leading-tight">
        {title}
      </h1>
    </div>
  );
}
