import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '해결방법과 선택 이유',
    content: (<>이러한 문제를 해결하기 위해 Form 상태, 서버 상태, 계산 로직을 분리하는 구조를 설계했습니다.{'\n\n'}<span className="accent-text font-bold">1. react-hook-form</span>을 도입하여 비제어 컴포넌트 기반 입력 방식을 통해 렌더링 비용을 줄이고자 했습니다.{'\n'}<span className="accent-text font-bold">2.</span> 비일관적이던 데이터 관리 방식을 다음과 같이 개선하였습니다{'\n'}<span className="accent-text font-bold">  - Form 상태: React Hook Form</span>{'\n'}<span className="accent-text font-bold">  - 서버 상태: React Query</span>{'\n'}<span className="accent-text font-bold">  - 계산/가공 로직: Custom Hook (Selector 패턴)</span>{'\n\n'}이처럼 역할을 명확히 분리하여 각 상태의 책임을 분리하고 구조적 복잡도를 낮추고자 했습니다.</>),
  },
  {
    title: '해결과정과 성과',
    content: (<><span className="accent-text font-bold">- React Hook Form의 FormProvider, useFormContext를 활용하여 Context 기반으로 Form 상태를 관리하고 prop drilling을 제거했습니다.</span>{'\n'}<span className="accent-text font-bold">- useWatch를 활용하여 특정 값 변화만 감지하도록 구성하고, 해당 값 기준으로 API 호출 및 UI 렌더링을 수행하도록 최적화했습니다.</span>{'\n'}<span className="accent-text font-bold">- Form 상태, 서버 상태, 계산 로직을 분리하고 selector 기반으로 재구성하여 전체 구조를 단순화했습니다.</span>{'\n\n'}그 결과 Form 입력 시 JS 실행 시간 약 <span className="accent-text font-bold">60% 감소</span>, 렌더링 부담 감소로 프레임 드랍 약 <span className="accent-text font-bold">35% 개선</span>, 복잡한 계산 로직이 정리되며 유지보수성과 확장성 향상을 이루어냈습니다.</>),
  },
];

export default function Page10() {
  return (
    <SlideLayout subtitle="Projects" title="오늩의 배송 Toodee (투디)">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (2/5) */}
        <div className="w-2/5 flex items-start">
          <img
            src="/assets/toodee-2.png"
            alt="Toodee 화면 2"
            className="w-full h-full object-contain rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (3/5) */}
        <div className="w-3/5 flex flex-col justify-start">
          <div className="flex flex-col gap-[6%]">
            {topics.map((topic, i) => (
              <div key={i}>
                {topic.title && (
                  <h4 className="text-lg font-semibold text-white">
                    {topic.title}
                  </h4>
                )}
                <p className="text-sm text-gray-300 mt-[2%] leading-relaxed whitespace-pre-line">
                  {topic.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
