import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '문제1-해결 방법',
    content: (
      <div className="flex flex-col gap-3">
        <p>
          이러한 문제를 해결하기 위해 Next.js 의 서버 기능 중 하나인{' '}
          <span className="accent-text font-bold">Data Cache</span> 기능에
          주목하였습니다.{' '}
          <span className="accent-text font-bold">Data Cache</span> 를 통해
          얻고자 하는 효과는 다음과 같았습니다.
        </p>
        <p className="accent-text">
          <span className="font-bold">1.</span> 반복적인 API 호출을 캐시로
          대체하여 불필요한 트래픽 감소, 브라우저 캐시와는 다르게 유저수에
          상관없이 한번 캐시된 데이터를 계속 제공하기 때문에 캐시 효과 극대화 가능
          {'\n'}
          <span className="font-bold">2.</span> 응답 지연을 줄여 비용 절감 및
          응답속도 및 UX 향상
        </p>
        <p>
          그리고 스터디를 통해{' '}
          <span className="accent-text font-bold">Data Cache</span>를 적용할 수
          있는 조건을 다음과 같이 정리하였고, 휴대폰, 요금제 데이터는 두가지
          사항을 모두 만족하여 적용하기로 결정하였습니다.
        </p>
        <p className="accent-text">
          <span className="font-bold">1.</span> 유저에 관계없이 동일한 데이터를
          반환하는 API일 것{'\n'}
          <span className="font-bold">2.</span> 변경 주기가 길어 실시간 갱신이
          필요하지 않은 데이터일 것
        </p>
      </div>
    ),
  },
  {
    title: '해결 과정과 성과',
    content: (
      <div className="flex flex-col gap-3">
        <p>
          axios 환경에서도 Next.js{' '}
          <span className="accent-text font-bold">Data Cache</span>를 활용하기
          위해 최신 버전으로 업데이트 후, 캐시 기간을 무한정으로 지정하였습니다.
          {'\n'}그리고 수정시 캐시를 초기화하기 위해{' '}
          <span className="accent-text font-bold">revalidateTag</span>를
          호출하는 serverless function 을 추가하여 관리자 페이지에서 추가, 수정,
          삭제 발생시 이를 호출하도록 하였습니다.
        </p>
        <p>
          그 결과, 반복 호출되던 API를 대부분 캐시로 대체하여 호출 수를 약{' '}
          <span className="accent-text font-bold">99% 이상 감소</span>시켰고,
          트래픽, 비용 절감 효과 또한 얻게 되었습니다.
        </p>
      </div>
    ),
  },
];

export default function Page6() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex items-center">
          <img
            src="/assets/my010-2.png"
            alt="My010 화면 2"
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
