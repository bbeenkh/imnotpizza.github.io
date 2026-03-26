import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const projects = [
  {
    name: 'Project Alpha',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',

    topics: [
      { title: 'Background', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
      { title: 'Role', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
      { title: 'Result', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
    ],
  },
];

export default function Page4() {
  const project = projects[0];

  return (
    <SlideLayout subtitle="Projects" title="Lorem Ipsum">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (1/3) */}
        <div className="w-1/3 flex items-center">
          <div
            className="w-full aspect-video rounded-lg"
            style={{ backgroundColor: purple.muted, border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (2/3) */}
        <div className="w-2/3 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white">
            {project.name}
          </h3>
          <p className="text-sm text-gray-300 mt-[4%] leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-col gap-[6%] mt-[6%]">
            {project.topics.map((topic) => (
              <div key={topic.title}>
                <h4
                  className="text-lg font-semibold text-white"
                >
                  {topic.title}
                </h4>
                <p className="text-sm text-gray-300 mt-[2%] leading-relaxed">
                  {topic.content}
                </p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </SlideLayout>
  );
}
