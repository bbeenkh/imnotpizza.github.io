import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import Page1 from './1';
import Page2 from './2';
import Page3 from './3';
import Page4 from './4';
import Page5 from './5';
import Page6 from './6';
import Page7 from './7';
import Page8 from './8';
import Page9 from './9';
import Page10 from './10';
import Page11 from './11';
import Page12 from './12';
import Page13 from './13';
import Page14 from './14';

const PAGES = [
  { num: 1, Component: Page1 },
  { num: 2, Component: Page2 },
  { num: 3, Component: Page3 },
  { num: 4, Component: Page4 },
  { num: 5, Component: Page5 },
  { num: 6, Component: Page6 },
  { num: 7, Component: Page7 },
  { num: 8, Component: Page8 },
  { num: 9, Component: Page9 },
  { num: 10, Component: Page10 },
  { num: 11, Component: Page11 },
  { num: 12, Component: Page12 },
  { num: 13, Component: Page13 },
  { num: 14, Component: Page14 },
];

const SAVE_SERVER = 'http://localhost:5679/save';

export default function CapturePage() {
  const [index, setIndex] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index >= PAGES.length) {
      setDone(true);
      return;
    }

    const timer = setTimeout(async () => {
      const mainEl = document.querySelector('main');
      if (!mainEl) {
        setLog(prev => [...prev, `slide-${PAGES[index].num}: <main> not found, skipping`]);
        setIndex(i => i + 1);
        return;
      }

      try {
        const canvas = await html2canvas(mainEl as HTMLElement, {
          scale: 6,
          backgroundColor: '#000000',
          useCORS: true,
          logging: false,
        });
        const data = canvas.toDataURL('image/png');
        await fetch(SAVE_SERVER, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ num: PAGES[index].num, data }),
        });
        setLog(prev => [...prev, `✓ slide-${PAGES[index].num}.png`]);
      } catch (err) {
        setLog(prev => [...prev, `✗ slide-${PAGES[index].num} error: ${err}`]);
      }

      setIndex(i => i + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [index]);

  const current = PAGES[index];
  const Component = current?.Component;

  return (
    <>
      {!done && Component && <Component />}
      {done && (
        <div className="h-screen bg-black flex items-center justify-center text-white text-2xl">
          Done! {PAGES.length} slides captured.
        </div>
      )}
      <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded z-[9999] max-w-xs space-y-0.5">
        {done ? (
          <div className="text-green-400">All {PAGES.length} slides captured!</div>
        ) : (
          <div className="text-yellow-300">Capturing {index + 1}/{PAGES.length}...</div>
        )}
        {log.map((entry, i) => (
          <div key={i}>{entry}</div>
        ))}
      </div>
    </>
  );
}
