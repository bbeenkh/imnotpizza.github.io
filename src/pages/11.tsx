import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '해결과정과 성과',
    content: '- React Hook Form의 FormProvider, useFormContext를 활용하여 Context 기반으로 Form 상태를 관리하고 prop drilling을 제거했습니다.\n- useWatch를 활용하여 특정 값 변화만 감지하도록 구성하고, 해당 값 기준으로 API 호출 및 UI 렌더링을 수행하도록 최적화했습니다.\n- Form 상태, 서버 상태, 계산 로직을 분리하고 selector 기반으로 재구성하여 전체 구조를 단순화했습니다.',
  },
  {
    title: '',
    content: '그 결과 Form 입력 시 JS 실행 시간 약 60% 감소, 렌더링 부담 감소로 프레임 드랍 약 35% 개선, 복잡한 계산 로직이 정리되며 유지보수성과 확장성 향상을 이루어냈습니다.',
  },
];

export default function Page11() {
  return (
    <SlideLayout subtitle="Projects" title="오늩의 배송 Toodee (투디)">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (1/3) */}
        <div className="w-1/3 flex items-center">
          <div
            className="w-full aspect-video rounded-lg"
            style={{ backgroundColor: purple.muted, border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (2/3) */}
        <div className="w-2/3 flex flex-col justify-start">
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
