import { ReactNode } from 'react';

interface Topic {
  title?: string;
  content: ReactNode;
}

export default function TopicList({
  topics,
  className,
}: {
  topics: Topic[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-[8%] ${className ?? ''}`}>
      {topics.map((topic, i) => (
        <div key={i}>
          {topic.title && (
            <h4 className="text-lg font-semibold text-white">{topic.title}</h4>
          )}
          <p className="text-sm text-gray-300 mb-3 leading-relaxed whitespace-pre-line">
            {topic.content}
          </p>
        </div>
      ))}
    </div>
  );
}
