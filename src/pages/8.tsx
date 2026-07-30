import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 설명',
    content: '코코넛은 KT M&S와의 협력하에 운영중인 휴대폰 구매 상담과 유통 관리 기능을 담고 있는 서비스입니다.',
  },
  {
    title: '담당 역할',
    content: '코코넛 신규기능, 유지보수, 이슈대응 작업에 대한 팀원 업무 분배, 일정 조율 등 전반적 팀 운영관리를 하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content: 'Vue.js(3.0 Composition API), React 18, Webpack, Babel',
  },
  {
    title: '발생한 문제',
    content: '저희 프론트엔드 팀은 공식 UI 라이브러리를 React를 사용하기로 결정하고, 디자인시스템도 React 기반으로 제작하였습니다. 그러나 코코넛은 Vue.js 기반 프로젝트여서 비교적 코드 생산성이 떨어진다는 불만사항이 나왔고, 때마침 요금계산기 기능의 UI의 리뉴얼 요구사항까지 나와 디자인시스템을 사용하여야 했습니다.',
  },
];

export default function Page8() {
  return (
    <SlideLayout subtitle="Projects" title="Coconuts">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (2/5) */}
        <div className="w-2/5 flex items-start">
          <img
            src="/assets/coconuts-1.png"
            alt="Coconuts 견적 화면"
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
