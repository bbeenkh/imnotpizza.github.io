import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const career = [
  {
    year: '2019 ~ 2020',
    company: '디엘토',
    project: '하이원 서울가요대상 투표앱 어드민',
    desc: <>투표 운영을 위한 백오피스 시스템의 프론트엔드 개발을 담당하면서 프론트엔드 개발에 흥미를 가지게 되었고 본격적으로 커리어를 시작하게 되었습니다.</>,
  },
  {
    year: '2020 ~ 2022',
    company: '미니스쿨',
    project: '땅콩스쿨 서비스 & 미니스쿨 에디터',
    desc: <>미니스쿨과 호두랩스와의 협업하에 실시간 화상수업 서비스인 땅콩스쿨의 이슈 대응, 고도화를 담당하였으며 방송 참여자 수 <span className="accent-text font-bold">30명→400명대</span>까지 확보하며 서비스 성장에 기여하였습니다.</>,
  },
  {
    year: '2022 ~ 2023',
    company: '케이제이엠테크',
    project: 'VLOC SDK & VLOC Console',
    desc: <>Web3, WebRTC 기반 화상채팅기능을 제공하는 VLOC SDK의 개발과, 토큰 사용량 모니터링 및 결제가 가능한 B2B SaaS 서비스인 VLOC Console의 개발을 담당하였습니다.</>,
  },
  {
    year: '2023 ~ 현재',
    company: '오투플러스',
    project: 'Coconuts (코코넛)',
    desc: <>KT M&S와의 협력하에 운영중인 휴대폰 구매 상담과 유통 관리 서비스로 분기 <span className="accent-text font-bold">MAU 7000명대 돌파</span>, <span className="accent-text font-bold">국가산업대상 2년 연속 대상 수상</span> 등에 기여하였습니다.</>,
  },
  {
    year: '2025 ~ 현재',
    company: '오투플러스',
    project: 'My010 (마이공일공)',
    desc: <>통신 유통 과정을 손쉽게 관리하도록 도와주는 B2B SaaS 서비스의 설계, 정식 오픈, 고도화 과정에 참여하여 베타테스터 <span className="accent-text font-bold">130명</span>까지 확보하였습니다.</>,
  },
];

function Card({ item }: { item: (typeof career)[number] }) {
  return (
    <div
      className="rounded-lg px-[6%] py-[3%] w-full text-left"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
    >
      <span className="text-sm font-bold text-white">{item.year}</span>
      <h3 className="text-sm font-semibold text-white mt-[3%]">{item.company}</h3>
      <p className="text-xs font-bold text-white mt-[2%]">{item.project}</p>
      <p className="text-xs text-gray-300 mt-[3%] leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function Page4() {
  return (
    <SlideLayout title="커리어 타임라인">
      <div className="flex flex-col h-full pt-[2%]">
        {/* Top row cards */}
        <div className="flex-1 flex gap-[1%] items-end pb-[1%]">
          {career.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              {i % 2 === 0 ? (
                <>
                  <Card item={item} />
                  <div className="w-[2px] h-3" style={{ backgroundColor: purple.border }} />
                </>
              ) : (
                <div className="w-full opacity-0 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Timeline line + dots */}
        <div className="relative flex items-center">
          <div
            className="absolute left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, ${purple.dark}, ${purple.accent})` }}
          />
          <div className="flex w-full">
            {career.map((_, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div
                  className="w-3 h-3 rounded-full z-10 border-2 border-black"
                  style={{ backgroundColor: purple.accent }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row cards */}
        <div className="flex-1 flex gap-[1%] items-start pt-[1%]">
          {career.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              {i % 2 !== 0 ? (
                <>
                  <div className="w-[2px] h-3" style={{ backgroundColor: purple.border }} />
                  <Card item={item} />
                </>
              ) : (
                <div className="w-full opacity-0 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
