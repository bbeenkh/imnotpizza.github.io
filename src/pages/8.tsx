import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '발생한 문제',
    content: '저희 프론트엔드 팀은 공식 UI 라이브러리를 React를 사용하기로 결정하고, 디자인시스템도 React 기반으로 제작하였습니다. 그러나 코코넛은 Vue.js 기반 프로젝트여서 비교적 코드 생산성이 떨어진다는 불만사항이 나왔고, 때마침 요금계산기 기능의 UI의 리뉴얼 요구사항까지 나와 디자인시스템을 사용하여야 했습니다.',
  },
  {
    title: '해결방법과 선택 이유',
    content: 'Vue.js프로젝트 내부에서 안정적으로 React 코드를 사용할 방법을 찾는 도중 Webpack Module Federation Github 예제에서 실제로 구현되어있는것을 보고 사용하기로 결정, 다음과 같은 이점으로 인해 도입하기로 결정하였습니다.\n1. 모듈은 별도 프로젝트로 제작되기 때문에 host, module 코드의 독립성 보장\n2. 이미 예제가 존재하여 문제없이 사용가능\n3. webpack 정식기능',
  },
  {
    title: '',
    content: '적용 과정에서 다음과 같은 문제점이 발생하였습니다.\n1. Type 공유: mfed는 자바스크립트 모듈 공유만 담당하여 type 공유는 되지 않음: @module-federation/typescript 사용\n2. 어떤 기능을 어디까지 대체할 것인지: 수정빈도 높으며 모달과 같이 비교적 쉽게 분리할 수 있는것부터 대체\n3. 스타일 충돌문제: tailwind prefix 부여로 스타일 충돌 방지',
  },
  {
    title: '해결과정과 성과',
    content: 'React 모듈을 독립적으로 구성한 뒤 기존 Vue 애플리케이션에 점진적으로 통합하는 방식으로 리팩토링을 수행하였습니다.\n\n그 결과, Host 프로젝트에 Side Effect를 일으키지 않고도 React 모듈을 적용하여 팀원의 만족도와 생산성 향상에 기여하게 되었습니다.',
  },
];

export default function Page8() {
  return (
    <SlideLayout subtitle="Projects" title="Coconuts">
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
