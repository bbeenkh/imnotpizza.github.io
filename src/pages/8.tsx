import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '프로젝트 설명',
    content:
      '휘릭은 화물 운송 기사를 위한 WebView 기반 하이브리드 앱으로, 지도를 통해 자신의 위치와 목적지파악, 오더 탐색부터 운송 완료까지의 현황을 실시간으로 확인, 진행할 수 있습니다.',
  },
  {
    title: '담당 역할',
    content:
      'WebView·React Native 설계 및 개발을 담당했으며, 사용자 이탈 개선을 위해 지표 수집 이벤트 삽입과 A/B 테스트 환경을 구축하고, 기획과 함께 개선안을 정리해 추천·필터 UI를 구현했습니다.',
  },
  {
    title: '주요 기술 스택',
    content:
      'React 18, React Native, TypeScript, Firebase Analytics, Firebase Remote Config',
  },
  {
    title: '발생한 문제',
    content: (
      <>
        <span className="accent-text font-bold">1. 낮은 주간 리텐션</span>
        {'\n'} 기사들이 1~2회 사용 후 더 이상 앱을 사용하지 않아{' '}
        <span className="accent-text font-bold">주간 리텐션이 1%대</span>에
        머물렀고, 전환율도 2회차 사용 시 급격히 낮아졌습니다. 지표 분석 결과, 재방문은 하지만 오더 수락 없이 이탈하는
        패턴이 확인되었고, 원하는 조건의 오더를 찾지 못하는 것이 원인으로
        판단되었습니다.
      </>
    ),
  },
];

export default function Page8() {
  return (
    <SlideLayout subtitle="Projects" title="휘릭">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex flex-row items-center justify-center gap-[4%]">
          <img
            src="/assets/whirik-1-1.png"
            alt="휘릭 화면 1-1"
            className="w-1/2 rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <img
            src="/assets/whirik-1-2.png"
            alt="휘릭 화면 1-2"
            className="w-1/2 rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>
        <div className="w-2/3 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
