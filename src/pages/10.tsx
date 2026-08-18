import SlideLayout from '@/layouts/SlideLayout';
import ExternalLink from '@/components/ExternalLink';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '프로젝트 설명',
    content: '퀵, 택배접수, 배송현황, 결제현황 등을 처리하고 실시간 배송 현황을 손쉽게 파악할 수 있는 PC/앱 기반 B2B 서비스입니다. 앱의 경우 webview를 통해 컨텐츠를 보여주는 하이브리드 앱 방식입니다.',
  },
  {
    title: '담당 역할',
    content: '투디 웹 서비스 프론트엔드의 전반적인 개발을 담당하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content: 'Next.js(Page Router), React18, typescript, React Hook Form, Recoil',
  },
  {
    title: '발생한 문제',
    content: (<>Toodee의 핵심 기능인 배송 접수 페이지는 다양한 입력값과 조건에 따라 API 호출과 UI가 동적으로 변경되는 구조였습니다.{'\n\n'}이 과정에서 다음과 같은 문제가 있었습니다.{'\n'}<span className="accent-text font-bold">- Form 입력 시 전체 컴포넌트가 리렌더링되며 프레임 저하 발생으로 실제 사용시 딜레이 발생</span>{'\n'}<span className="accent-text font-bold">- 상태 변경에 따라 API 재호출과 계산 로직이 반복되며 불필요한 연산 증가</span>{'\n'}<span className="accent-text font-bold">- 복잡한 계산 및 가공 로직이 분산되어 코드 가독성과 유지보수성 저하</span></>),
  },
];

export default function Page10() {
  return (
    <SlideLayout subtitle="Projects" title="오늩의 배송 Toodee (투디)">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (1/3) */}
        <div className="w-1/3 flex flex-col items-center justify-center gap-[4%]">
          <img
            src="/assets/toodee-main.webp"
            alt="Toodee 메인 화면"
            className="w-4/5 rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <img
            src="/assets/toodee-order-rz.webp"
            alt="Toodee 접수 화면"
            className="w-4/5 rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (2/3) */}
        <div className="w-2/3 flex flex-col justify-start">
          <div className="mb-2 text-sm"><ExternalLink href="https://toodee.kr/">toodee.kr</ExternalLink></div>
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
