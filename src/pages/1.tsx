import SlideLayout from '@/layouts/SlideLayout';

export default function Page1() {
  return (
    <SlideLayout hideTitle>
      <div className="flex flex-col h-full">
        <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-tight">
          빠른 유저 니즈 반영을 위한
          <br />
          코드와 프로세스 개선에 집중해온
          <br />
          프론트엔드 개발자 <span className='accent-text'>고보빈</span>입니다.
        </h1>
      </div>
    </SlideLayout>
  );
}
