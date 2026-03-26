import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

export default function Page1() {
  return (
    <SlideLayout hideTitle>
      <div className="flex flex-col justify-start h-full">
        <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-tight">
          빠른 유저 니즈 반영을 위해
          <br />
          개발 프로세스 개선에 집중해온
          <br />
          프론트엔드 개발자 <span className='accent-text'>고보빈</span>입니다.
          <br />
        </h1>
        <div className="flex flex-col gap-3 mt-auto w-1/3">
          {['lorem@ipsum.com', 'github.com/lorem', 'linkedin.com/in/lorem'].map(
            (link) => (
              <span
                key={link}
                className="px-[2.5%] py-[1%] rounded-lg text-sm text-white"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: `1px solid ${purple.border}`,
                }}
              >
                {link}
              </span>
            ),
          )}
        </div>
      </div>
    </SlideLayout>
  );
}
