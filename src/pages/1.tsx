import SlideLayout from '@/layouts/SlideLayout';

export default function Page1() {
  return (
    <SlideLayout hideTitle>
      <div className="flex flex-col h-full">
        <h1 className="text-[55px] font-bold text-white leading-tight">
          코드 개선과 AI 기반 프로세스 자동화로 <br /> 유저 니즈를 빠르게
          반영해온 <br /> 프론트엔드 개발자&nbsp;
          <span className="accent-text">고보빈</span>입니다.
        </h1>
        <div className="mt-8 flex flex-col gap-4 text-[20px] text-white leading-relaxed max-w-[70%]">
          <p>
            요구사항이 자주 바뀌고 규칙이 복잡한 환경에서, 빠르게 바꾸면서도
            안정적인 코드 구조를 만드는 방법에 관심이 있습니다.
          </p>
          <p>
            워크플로우 개선과 AI 자동화로 팀 전체의 생산성을 끌어올리는 일에도
            관심이 있습니다. 반복 작업에서 확보한 시간을 더 가치있는 일에 쓰도록
            하는 것이 목표입니다.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
