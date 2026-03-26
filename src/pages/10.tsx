import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '발생한 문제',
    content: 'Toodee의 핵심 기능인 배송 접수 페이지는 다양한 입력값과 조건에 따라 API 호출과 UI가 동적으로 변경되는 구조였습니다.\n\n이 과정에서 다음과 같은 문제가 있었습니다.\n- Form 입력 시 전체 컴포넌트가 리렌더링되며 프레임 저하 발생으로 실제 사용시 딜레이 발생\n- 상태 변경에 따라 API 재호출과 계산 로직이 반복되며 불필요한 연산 증가\n- 복잡한 계산 및 가공 로직이 분산되어 코드 가독성과 유지보수성 저하',
  },
  {
    title: '해결방법과 선택 이유',
    content: '이러한 문제를 해결하기 위해 Form 상태, 서버 상태, 계산 로직을 분리하는 구조를 설계했습니다.\n\n1. react-hook-form을 도입하여 비제어 컴포넌트 기반 입력 방식을 통해 렌더링 비용을 줄이고자 했습니다.\n2. 비일관적이던 데이터 관리 방식을 다음과 같이 개선하였습니다\n  - Form 상태: React Hook Form\n  - 서버 상태: React Query\n  - 계산/가공 로직: Custom Hook (Selector 패턴)\n\n이처럼 역할을 명확히 분리하여 각 상태의 책임을 분리하고 구조적 복잡도를 낮추고자 했습니다.',
  },
];

export default function Page10() {
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
