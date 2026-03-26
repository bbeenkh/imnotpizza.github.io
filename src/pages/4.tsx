import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const career = [
  {
    year: '2019 ~ 2020',
    company: '디엘토',
    project: '하이원 서울가요대상 투표앱 백오피스 개발',
    desc: '투표 운영을 위한 백오피스 시스템의 프론트엔드 개발을 담당하면서 UI 개발이 더 적성에 맞다고 판단하여 프론트엔드 개발자의 커리어를 시작하게 되었습니다.',
  },
  {
    year: '2020 ~ 2022',
    company: '미니스쿨',
    project: 'Editor 2.0 (화상수업 교재 제작 에디터 리뉴얼)',
    desc: '미니스쿨과 호두랩스와의 협업하에 실시간 화상수업 서비스인 땅콩스쿨의 유지보수및 신규 기능 추가를 담당하였으며, 특히 교재 제작 에디터의 리뉴얼 작업에 중점적으로 참여하여 실시간 방송 참여자 수 30명→400명대 증가등 서비스 성장에 기여하였습니다.',
  },
  {
    year: '2022 ~ 2023',
    company: '케이제이엠테크',
    project: 'VLOC Console (Web3 화상통화 관리 서비스)',
    desc: 'WebRTC 기반 화상채팅기능을 제공하는 VLOC SDK의 개발과, 토큰 사용량 모니터링 및 결제가 가능한 B2B SaaS 서비스인 VLOC Console의 개발을 담당하였습니다.',
  },
  {
    year: '2023 ~ 현재',
    company: '오투플러스',
    project: 'Coconuts (코코넛)',
    desc: 'KT M&S와의 협력하에 운영중인 휴대폰 구매 상담과 유통 관리 서비스로 MAU 7000대 돌파, 국가산업대상 2년 연속 대상 수상 등에 기여하였습니다.',
  },
  {
    year: '2023 ~ 현재',
    company: '오투플러스',
    project: 'My010 (마이공일공)',
    desc: '대리점, 판매점의 유통 과정을 손쉽게 관리하도록 도와주는 B2B SaaS 서비스입니다.',
  },
];

export default function Page4() {
  return (
    <SlideLayout title="성장 타임라인">
      <div className="flex items-center h-full pt-[4%]">
        <div className="w-full relative">
          {/* Timeline line — vertically centered */}
          <div
            className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2"
            style={{ background: `linear-gradient(90deg, ${purple.dark}, ${purple.accent})` }}
          />

          <div className="flex justify-between px-0">
            {career.map((item, i) => {
              const isTop = i % 2 === 0;
              return (
                <div
                  key={`${item.company}-${item.project}`}
                  className="flex flex-col items-center flex-1 mx-[0.5%]"
                  style={{ flexDirection: isTop ? 'column' : 'column-reverse' }}
                >
                  {/* Content card */}
                  <div
                    className="rounded-lg px-[8%] py-[5%] w-full text-left"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
                  >
                    <span
                      className="text-lg font-bold text-white"
                    >
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-[6%]">
                      {item.company}
                    </h3>
                    <p className="text-sm text-gray-300 mt-[2%]">
                      {item.project}
                    </p>
                    <p className="text-sm text-gray-300 mt-[6%] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector line */}
                  <div className="w-[2px] h-[clamp(8px,1vw,16px)]" style={{ backgroundColor: purple.border }} />

                  {/* Dot */}
                  <div
                    className="w-[clamp(10px,1.2vw,18px)] h-[clamp(10px,1.2vw,18px)] rounded-full shrink-0 z-10 border-2 border-black"
                    style={{ backgroundColor: purple.accent }}
                  />

                  {/* Spacer for the opposite side */}
                  <div className="w-[2px] h-[clamp(8px,1vw,16px)] opacity-0" />
                  <div className="rounded-lg p-[12%] w-full opacity-0 pointer-events-none">
                    <span className="text-lg">&nbsp;</span>
                    <h3 className="text-lg mt-[6%]">&nbsp;</h3>
                    <p className="text-sm mt-[2%]">&nbsp;</p>
                    <p className="text-sm mt-[6%]">&nbsp;</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
