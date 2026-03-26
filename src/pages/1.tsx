import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

export default function Page1() {
  return (
    <SlideLayout hideTitle>
      <div className="flex flex-col justify-start h-full">
        <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-tight">
          빠른 UX개선을 위해
          <br />
          코드 구조와 개발 프로세스 개선에
          <br />
          집중해온 프론트엔드 개발자
          <br />
          고보빈입니다.
        </h1>
        <div className="flex gap-[3%] mt-auto">
          {['lorem@ipsum.com', 'github.com/lorem', 'linkedin.com/in/lorem'].map((link) => (
            <span
              key={link}
              className="px-[2.5%] py-[1%] rounded-lg text-sm text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${purple.border}` }}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
