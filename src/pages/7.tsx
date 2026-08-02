import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '해결 방법',
    content: (
      <>
        <span className="accent-text font-bold">Turborepo + pnpm</span> 기반
        모노레포 구조로 전환하여 배포 시간 단축, 공용 코드는 패키지로 관리하도록
        하였습니다.{'\n\n'}
        <span className="accent-text font-bold">Vercel 원격 캐시를 적용</span>
        하여 변경된 패키지만 빌드되도록 하여 불필요한 빌드를 제거하였습니다.
        {'\n\n'}
        패키지, 프로젝트 수정시 휴먼 에러, 코드 충돌과 같은 혼선을 방지하고자{' '}
        <span className="accent-text font-bold">
          레이어를 나누어 관리하는 아키텍처
        </span>
        를 구축하였고, <span className="accent-text font-bold">changesets</span>
        를 통해 버전관리, 변경이력 기록을 자동화하였습니다.
      </>
    ),
  },
  {
    title: '성과',
    content: (
      <>
        배포 시간{' '}
        <span className="accent-text font-bold">기존 4분 → 최대 55초</span>
        까지 약 77% 감소를 달성하였습니다.{'\n'}또한 학습시간, 1인당 회의
        참여시간 등 도메인 관련 소요시간이 줄어들어{' '}
        <span className="accent-text font-bold">
          전체적 개발 리드타임이 단축되었습니다.
        </span>
      </>
    ),
  },
];

export default function Page7() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 */}
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src="/assets/my010-3.png"
            alt="My010 화면 3"
            className="w-full h-full object-contain rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 */}
        <div className="w-1/2 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
