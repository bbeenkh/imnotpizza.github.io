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
      'Next.js(v15), React19, typescript, Turborepo, React Query, Zustand, Vercel, tailwindcss',
  },
  {
    title: '발생한 문제 1',
    content:
      'My010의 핵심 기능인 리베이트 관리에서 휴대폰/요금제 목록 API가 여러 곳에서 반복 호출되었으나, 해당 데이터는 변동 주기가 몇 달에 한 번으로 불필요한 API 호출 문제가 있었습니다.',
  },
  {
    title: '발생한 문제 2',
    content:
      'MVP 제작 및 시연 등으로 인해 짧은 배포 주기와 잦은 기획/스펙 변경이 있었으며 이로 인해 배포 시간 과다 소요, 중복 코드 발생, 업무 중복 문제 등으로 생산성이 하락하는 문제가 있었습니다.',
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
