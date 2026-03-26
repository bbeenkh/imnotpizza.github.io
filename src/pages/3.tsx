import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const career = [
  { year: '2018', role: 'Junior Developer', company: 'Lorem Corp', desc: 'Lorem ipsum dolor sit amet' },
  { year: '2020', role: 'Frontend Engineer', company: 'Ipsum Inc', desc: 'Consectetur adipiscing elit' },
  { year: '2022', role: 'Senior Engineer', company: 'Dolor LLC', desc: 'Sed do eiusmod tempor' },
  { year: '2024', role: 'Tech Lead', company: 'Sit Amet Co', desc: 'Ut enim ad minim veniam' },
];

export default function Page3() {
  return (
    <SlideLayout subtitle="Career" title="Lorem Ipsum Dolor">
      <div className="flex items-center h-full pt-[4%]">
        <div className="w-full relative">
          {/* Timeline line — vertically centered */}
          <div
            className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2"
            style={{ background: `linear-gradient(90deg, ${purple.dark}, ${purple.accent})` }}
          />

          <div className="flex justify-between">
            {career.map((item, i) => {
              const isTop = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="flex flex-col items-center w-[22%]"
                  style={{ flexDirection: isTop ? 'column' : 'column-reverse' }}
                >
                  {/* Content card */}
                  <div
                    className="rounded-lg p-[12%] w-full text-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
                  >
                    <span
                      className="text-lg font-bold text-white"
                    >
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-[6%]">
                      {item.role}
                    </h3>
                    <p className="text-sm text-gray-300 mt-[2%]">
                      {item.company}
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
