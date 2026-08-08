import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const skillCategories = [
  {
    label: 'Core Library & Framework',
    items: [
      'React',
      'Next.js (Page/App Router)',
      'Vue.js',
      'TypeScript',
      'React Native',
    ],
  },
  {
    label: 'State Management',
    items: ['Zustand', 'React Query', 'Recoil', 'Redux', 'Pinia'],
  },
  { label: 'Micro Frontend', items: ['Turborepo', 'Module Federation'] },
  { label: 'Bundler', items: ['Vite', 'Rollup', 'Webpack'] },
  {
    label: 'Styling & Visualizing',
    items: ['Tailwind CSS', 'styled-components', 'framer-motion', 'Chart.js'],
  },
  {
    label: 'Deployment & DevOps',
    items: ['Vercel', 'GitHub Packages', 'Docker'],
  },
  { label: 'Testing', items: ['Playwright', 'Vitest', 'MSW'] },
  { label: 'AI', items: ['Claude Code'] },
];

export default function Page2() {
  return (
    <SlideLayout subtitle="Frontend Developer" title="기술 스택">
      <div className="mt-6" />
      <table
        className="text-sm w-full"
        style={{
          borderCollapse: 'collapse',
          border: `1px solid ${purple.border}`,
        }}
      >
        <tbody>
          {skillCategories.map((cat) => (
            <tr
              key={cat.label}
              style={{ borderBottom: `1px solid ${purple.border}` }}
            >
              <td
                className="accent-text whitespace-nowrap align-middle py-2 pr-6"
                style={{
                  background: purple.muted,
                  paddingLeft: '0.5rem',
                  width: '1%',
                }}
              >
                {cat.label}
              </td>
              <td className="text-gray-300 py-2 px-3">
                {cat.items.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SlideLayout>
  );
}
