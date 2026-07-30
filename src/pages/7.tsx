import SlideLayout from '@/layouts/SlideLayout';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '발생한 문제',
    content: (
      <>
        my010은 초기에{' '}
        <span className="accent-text font-bold">멀티레포</span> 구조로 운영되어
        다음과 같은 문제가 있었습니다.{'\n\n'}
        <span className="accent-text font-bold">
          - 배포 시간 최대 4분 소요
        </span>
        {'\n'}  변경 여부와 관계없이 전체 패키지를 빌드하여 배포 시간이 길어졌습니다.
        {'\n'}
        <span className="accent-text font-bold">
          - 패키지 간 의존성 관리 복잡
        </span>
        {'\n'}  레포가 분리되어 공통 타입, 유틸 등의 동기화 비용이 증가하고
        일관성이 떨어졌습니다.
      </>
    ),
  },
  {
    title: '해결 방법',
    content: (
      <>
        <span className="accent-text font-bold">Turborepo + pnpm</span> 기반
        모노레포 구조로 전환하였습니다.{'\n\n'}
        <span className="accent-text font-bold">1. 도메인별 의존성 분리</span>
        {'\n'}  패키지를 도메인 단위로 분리하여 변경 범위를 명확하게 하였습니다.
        {'\n'}
        <span className="accent-text font-bold">2. Vercel 원격 캐시 적용</span>
        {'\n'}  변경된 패키지만 빌드되도록 캐시를 활용하여 불필요한 빌드를 제거하였습니다.
      </>
    ),
  },
  {
    title: '성과',
    content: (
      <>
        배포 시간{' '}
        <span className="accent-text font-bold">4분 → 최대 55초</span>로 단축,
        약 77% 감소를 달성하였습니다.{'\n'}패키지 의존성이 명확해져 팀 전체의
        개발 리드타임도 단축되었습니다.
      </>
    ),
  },
];

export default function Page7() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 영역 (추후 추가 예정) */}
        <div className="w-1/3" />

        {/* Right — 설명 (2/3) */}
        <div className="w-2/3 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
