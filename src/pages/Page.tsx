const purple = {
  accent: '#A855F7',
  light: '#C084FC',
  dark: '#7C3AED',
  muted: 'rgba(168, 85, 247, 0.15)',
  border: 'rgba(168, 85, 247, 0.3)',
};

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full aspect-video bg-black rounded-lg shadow-2xl overflow-hidden relative">
      {children}
    </div>
  );
}

/** Slide 1 — Intro / Hero */
function SlideIntro() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full text-center px-[10%]">
        <p className="text-xs tracking-[0.3em] uppercase mb-[3%]" style={{ color: purple.accent }}>
          Portfolio
        </p>
        <h1 className="text-[clamp(1.32rem,3.85vw,3.3rem)] font-bold text-white leading-tight">
          Lorem Ipsum
        </h1>
        <p className="text-[clamp(0.66rem,1.32vw,1.1rem)] text-gray-400 mt-[2%] max-w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div
          className="mt-[4%] px-[3%] py-[1.2%] rounded-full text-[clamp(0.55rem,1.1vw,0.935rem)] font-semibold text-white"
          style={{ backgroundColor: purple.dark }}
        >
          Lorem Ipsum
        </div>
      </div>
    </Slide>
  );
}

/** Slide 2 — About */
function SlideAbout() {
  return (
    <Slide>
      <div className="flex h-full">
        {/* Left */}
        <div className="w-[45%] flex items-center justify-center p-[5%]">
          <div
            className="w-[70%] aspect-square rounded-2xl"
            style={{ backgroundColor: purple.muted, border: `1px solid ${purple.border}` }}
          />
        </div>
        {/* Right */}
        <div className="w-[55%] flex flex-col justify-center pr-[8%]">
          <p className="text-[clamp(0.55rem,0.99vw,0.825rem)] uppercase tracking-[0.2em] mb-[3%]" style={{ color: purple.accent }}>
            About
          </p>
          <h2 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold text-white leading-snug">
            Lorem Ipsum Dolor
          </h2>
          <p className="text-[clamp(0.55rem,1.045vw,0.88rem)] text-gray-400 mt-[4%] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-[5%] mt-[5%]">
            {['Lorem', 'Ipsum', 'Dolor', 'Sit'].map((tag) => (
              <span
                key={tag}
                className="px-[2.5%] py-[0.8%] rounded-full text-[clamp(0.44rem,0.825vw,0.715rem)] text-white"
                style={{ backgroundColor: purple.muted, border: `1px solid ${purple.border}` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/** Slide 3 — Skills */
function SlideSkills() {
  const skills = [
    { name: 'Lorem Ipsum', level: 90 },
    { name: 'Dolor Sit', level: 85 },
    { name: 'Amet Consectetur', level: 75 },
    { name: 'Adipiscing Elit', level: 70 },
    { name: 'Sed Eiusmod', level: 65 },
  ];

  return (
    <Slide>
      <div className="flex flex-col justify-center h-full px-[10%]">
        <p className="text-[clamp(0.55rem,0.99vw,0.825rem)] uppercase tracking-[0.2em] mb-[2%]" style={{ color: purple.accent }}>
          Skills
        </p>
        <h2 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold text-white mb-[5%]">
          Lorem Ipsum Dolor
        </h2>
        <div className="flex flex-col gap-[3%]">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-[3%]">
              <span className="text-[clamp(0.495rem,0.935vw,0.77rem)] text-gray-300 w-[20%] text-right">
                {skill.name}
              </span>
              <div className="flex-1 h-[clamp(6px,0.8vw,10px)] bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${purple.dark}, ${purple.accent})`,
                  }}
                />
              </div>
              <span className="text-[clamp(0.44rem,0.77vw,0.66rem)] text-gray-500 w-[5%]">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/** Slide 4 — Projects */
function SlideProjects() {
  return (
    <Slide>
      <div className="flex flex-col justify-center h-full px-[8%]">
        <p className="text-[clamp(0.55rem,0.99vw,0.825rem)] uppercase tracking-[0.2em] mb-[2%]" style={{ color: purple.accent }}>
          Projects
        </p>
        <h2 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold text-white mb-[5%]">
          Lorem Ipsum
        </h2>
        <div className="grid grid-cols-3 gap-[3%]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl p-[8%] flex flex-col"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
            >
              <div
                className="w-full aspect-[4/3] rounded-lg mb-[8%]"
                style={{ backgroundColor: purple.muted }}
              />
              <h3 className="text-[clamp(0.605rem,1.1vw,0.935rem)] font-semibold text-white">
                Lorem Ipsum {i}
              </h3>
              <p className="text-[clamp(0.44rem,0.825vw,0.715rem)] text-gray-500 mt-[4%] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
              <div className="flex gap-[4%] mt-[6%]">
                {['Lorem', 'Ipsum'].map((t) => (
                  <span
                    key={t}
                    className="text-[clamp(0.385rem,0.66vw,0.55rem)] px-[4%] py-[2%] rounded"
                    style={{ color: purple.light, backgroundColor: purple.muted }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/** Slide 5 — Contact */
function SlideContact() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full text-center px-[15%]">
        <p className="text-[clamp(0.55rem,0.99vw,0.825rem)] uppercase tracking-[0.2em] mb-[3%]" style={{ color: purple.accent }}>
          Contact
        </p>
        <h2 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold text-white">
          Lorem Ipsum Dolor Sit
        </h2>
        <p className="text-[clamp(0.55rem,1.045vw,0.88rem)] text-gray-400 mt-[3%] max-w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </p>
        <div className="flex gap-[3%] mt-[5%]">
          {['lorem@ipsum.com', 'github.com/lorem', 'linkedin.com/in/lorem'].map((link) => (
            <span
              key={link}
              className="px-[2.5%] py-[1%] rounded-lg text-[clamp(0.44rem,0.88vw,0.715rem)] text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${purple.border}` }}
            >
              {link}
            </span>
          ))}
        </div>
        <div
          className="mt-[5%] w-[40%] h-[1px]"
          style={{ background: `linear-gradient(90deg, transparent, ${purple.accent}, transparent)` }}
        />
        <p className="text-[clamp(0.385rem,0.715vw,0.605rem)] text-gray-600 mt-[3%]">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </Slide>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center gap-[2vw] py-[3vw] px-[4vw]">
      <SlideIntro />
      <SlideAbout />
      <SlideSkills />
      <SlideProjects />
      <SlideContact />
    </div>
  );
}
