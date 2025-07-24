import React from "react";

export type TimelineItemProps = {
  title: string;
  date: string;
  description: string;
  badge?: React.ReactNode; // can be string or image/component
};

type TimelineProps = {
  items: TimelineItemProps[];
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description,
  badge,
}) => {
  return (
    <li className="mb-10 ms-6">
      {/* Icon */}
      <span className="absolute flex items-center justify-center w-6 h-6 bg-black/10 dark:bg-white/10 rounded-full -start-3 ring-8 ring-white/80 dark:ring-white/10">
        {/* <svg
          className="w-2.5 h-2.5 text-black/80 dark:text-white/80"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg> */}

{badge &&
          (typeof badge === "string" ? (
            <span className="bg-black/10 dark:bg-white/10 text-black/80 dark:text-white/80 text-sm font-medium px-2.5 py-0.5 rounded-sm">
              {badge}
            </span>
          ) : (
            <span className="inline-flex items-center justify-center h-7 w-7">
              {badge}
            </span>
          ))}
      </span>

      <h3 className="flex items-center mb-1 text-lg font-semibold text-black dark:text-white gap-2">
        {title}
        
      </h3>

      <time className="block mb-2 text-sm font-normal text-black/60 dark:text-white/60">
        {date}
      </time>

      <p className="mb-4 text-base font-normal text-black/60 dark:text-white/60">
        {description}
      </p>

    </li>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="relative border-s border-black/10 dark:border-white/10">
          {items.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
