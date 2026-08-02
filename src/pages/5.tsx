import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '프로젝트 설명',
    content:
      'my010은 대리점, 판매점의 유통 과정을 손쉽게 관리하도록 도와주는 B2B SaaS 서비스입니다.',
  },
  {
    title: '담당 역할',
    content:
      '프론트엔드 리드 역할을 맡아 업무 분배, 일정관리 및 기획에 따라 상세 UI 설계에 참여하였습니다. 특히 리베이트(보조금) 등록 및 개통 기능에 중점적으로 담당하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content:
      'Next.js(v15), React19, typescript, React Query, Zustand, Vercel, tailwindcss',
  },
  {
    title: '발생한 문제',
    content: 'My010의 가장 핵심적인 기능 중 하나는 통신 사업자들이 휴대폰 구매시 지급될 리베이트(보조금) 금액을 업로드 및 관리하는 기능입니다.',
  },
  {
    title: '',
    content: '이 과정에서 휴대폰 목록/상세 정보와 요금제 목록/상세 정보에 대한 api가 여러군데에서 사용되었으나 이 정보들은 변동이 몇 달에 한번정도 발생하는 데이터여서 불필요한 api 호출이란 문제가 있었습니다.',
  },
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
];

export default function Page5() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex flex-col items-center justify-center gap-[4%]">
          <img
            src="/assets/my010-1.png"
            alt="My010 화면 1"
            className="w-full rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <img
            src="/assets/my010-1-2.png"
            alt="My010 화면 1-2"
            className="w-full rounded-lg"
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
