import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '해결방법과 선택 이유',
    content: (<>Vue.js프로젝트 내부에서 안정적으로 React 코드를 사용할 방법을 찾는 도중 <span className="accent-text font-bold">Webpack Module Federation</span> Github 예제에서 실제로 구현되어있는것을 보고 사용하기로 결정, 다음과 같은 이점으로 인해 도입하기로 결정하였습니다.{'\n'}<span className="accent-text font-bold">1. 모듈은 별도 프로젝트로 제작되기 때문에 host, module 코드의 독립성 보장</span>{'\n'}<span className="accent-text font-bold">2. 이미 예제가 존재하여 문제없이 사용가능</span>{'\n'}<span className="accent-text font-bold">3. webpack 정식기능</span></>),
  },
  {
    title: '',
    content: (<>적용 과정에서 다음과 같은 문제점이 발생하였고, 다음과 같이 해결하였습니다.{'\n'}<span className="accent-text font-bold">1. Type 공유: mfed는 자바스크립트 모듈 공유만 담당하여 type 공유는 되지 않음: @module-federation/typescript 사용</span>{'\n'}<span className="accent-text font-bold">2. 어떤 기능을 어디까지 대체할 것인지: 수정빈도 높으며 모달과 같이 비교적 쉽게 분리할 수 있는것부터 대체</span>{'\n'}<span className="accent-text font-bold">3. 스타일 충돌문제: tailwind prefix 부여로 스타일 충돌 방지</span></>),
  },
  {
    title: '해결과정과 성과',
    content: (<>React 모듈을 독립적으로 구성한 뒤 기존 Vue 애플리케이션에 점진적으로 통합하는 방식으로 리팩토링을 수행하였습니다.{'\n\n'}그 결과, Host 프로젝트에 <span className="accent-text font-bold">Side Effect를 일으키지 않고도</span> React 모듈을 적용하여 팀원의 만족도와 생산성 향상에 기여하게 되었습니다.</>),
  },
];

export default function Page9() {
  return (
    <SlideLayout subtitle="Projects" title="Coconuts">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (2/5) */}
        <div className="w-2/5 flex items-start">
          <img
            src="/assets/coconuts-2.png"
            alt="Coconuts 화면 2"
            className="w-full h-full object-contain rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (3/5) */}
        <div className="w-3/5 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
