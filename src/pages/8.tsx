import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '문제2-해결 방법',
    content: (
      <>
        멀티레포 구조에서 발생하는 배포 지연, 코드 중복, 의존성 충돌 문제를
        해결하기 위해{' '}
        <span className="accent-text font-bold">Turborepo + pnpm</span> 기반
        모노레포 구조로의 전환에 주목하였습니다. 모노레포 전환을 통해 얻고자
        하는 효과는 다음과 같았습니다.
      </>
    ),
  },
  {
    title: '',
    content: (
      <p className="accent-text">
        <span className="font-bold">1.</span> 공용 코드를 패키지로 분리하여 중복
        제거 및 일관성 확보{'\n'}
        <span className="font-bold">2.</span> 변경된 패키지만 빌드하여 불필요한
        빌드 시간 제거
      </p>
    ),
  },
  {
    title: '',
    content: (
      <>그리고 안정적인 운영을 위해 다음과 같은 추가 조치를 적용하였습니다.</>
    ),
  },
  {
    title: '',
    content: (
      <p className="accent-text">
        <span className="font-bold">1.</span> 패키지 간 의존 방향을 제한하는
        레이어 아키텍처를 구축하여 휴먼 에러, 코드 충돌 방지{'\n'}
        <span className="font-bold">2.</span> changesets를 도입하여 버전관리 및
        변경이력 기록을 자동화
      </p>
    ),
  },
  {
    title: '해결 과정과 성과',
    content: (
      <>
        <span className="accent-text font-bold">Vercel 원격 캐시를 적용</span>
        하여 변경된 패키지만 빌드되도록 설정하고, 공용 코드를 내부 패키지로
        분리하여 각 프로젝트에서 import하는 구조로 전환하였습니다.{'\n'}
        패키지, 프로젝트 수정시 휴먼 에러, 코드 충돌과 같은 혼선을 방지하고자
        레이어 아키텍처를 적용하였고,{' '}
        <span className="accent-text font-bold">changesets</span>로 변경이
        발생한 패키지의 버전 변경 및 변경사항 작성을 자동화하였습니다.
      </>
    ),
  },
  {
    title: '',
    content: (
      <>
        그 결과, 배포 시간{' '}
        <span className="accent-text font-bold">기존 4분 → 최대 55초</span>
        까지 약 77% 감소를 달성하였고, 학습시간 및 회의 참여시간 등 도메인 관련
        소요시간이 줄어들어{' '}
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
        <div className="w-1/3 h-full flex items-center">
          <img
            src="/assets/my010-3.png"
            alt="My010 화면 3"
            className="w-full object-contain rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 */}
        <div className="w-2/3 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
