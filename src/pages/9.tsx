import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '해결 방법과 선택 이유',
    content: (
      <>
        <span className="accent-text font-bold">1. 목표와 지표 정의:</span>{' '}
        "오더를 완료한 기사가 1주 후 다시 돌아와 오더를 완료하는 것"을 최종
        목표로 잡고,{' '}
        <span className="accent-text font-bold">
          오더 완료 전환율과 주간 리텐션
        </span>
        을 핵심 지표로 정했습니다.{'\n'}
        <span className="accent-text font-bold">
          2. 행동 단위 이벤트 수집:
        </span>{' '}
        앱 진입부터 오더 탐색, 노출, 클릭, 수락, 운송 완료까지 단계별 이벤트를
        Firebase Analytics로 WebView에 삽입해 이탈 지점을 추적했습니다.{'\n'}
        <span className="accent-text font-bold">
          3. 원인 파악과 가설 수립:
        </span>{' '}
        데이터 담당자의 지표 분석 결과, 재방문은 하지만 수락 없이 이탈하는
        패턴이 확인되어, 유리한 조건의 오더를 상단에 노출하는 추천 기능을 기획
        담당자와 함께{' '}
        <span className="accent-text font-bold">거리 우선과 운임비 우선</span>{' '}
        두 방식을 후보로 세웠습니다.
      </>
    ),
  },
  {
    title: '해결 과정과 성과',
    content: (
      <>
        <span className="accent-text font-bold">1. A/B 테스트 구축:</span>{' '}
        Firebase Remote Config 플래그로 사용자를 50:50으로 나누고, 그룹별로 오더
        정렬 방식을 분기 렌더링했습니다. 주요 지표는 오더 수락률, 보조 지표는
        주간 리텐션으로 지정하였습니다.{'\n'}
        <span className="accent-text font-bold">2. 결과 검증:</span> 운임비 우선
        그룹의 오더 수락률이{' '}
        <span className="accent-text font-bold">18.4% → 24.1%</span>로 더 높았고
        취소율 증가도 없어 운임비 우선을 채택했습니다.{'\n'}
        <span className="accent-text font-bold">3. 최종 UI 구현:</span> 운임비
        우선을 기본값으로 설정, 거리 우선 탭으로도 변경할 수 있도록 하여 성향에
        따라 다른 추천을 받도록 했으며, 조건을 직접 조정할 수 있는 토글형 필터
        UI를 추가했습니다.{'\n\n'}
        그 결과 <span className="accent-text font-bold">리텐션 1% → 8%</span>,{' '}
        <span className="accent-text font-bold">전환율 12% → 21%</span>로
        향상되었습니다.
      </>
    ),
  },
];

export default function Page9() {
  return (
    <SlideLayout subtitle="Projects" title="휘릭">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex flex-row items-center justify-center gap-[4%]">
          <img
            src="/assets/whirik-3.png"
            alt="휘릭 오더 추천 화면 1"
            className="w-1/2 rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <img
            src="/assets/whirik-4.png"
            alt="휘릭 오더 추천 화면 2"
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
