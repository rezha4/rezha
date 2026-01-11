"use client";

import { ActivityCalendar } from "react-activity-calendar";

export type Contributions = {
  total: { lastYear: number };
  contributions: { date: string; count: number; level: number }[];
};

export default function GithubActivity({ data }: { data: Contributions }) {
  return (
    <div>
      {data ? (
        <ActivityCalendar
          blockMargin={3}
          blockSize={10}
          blockRadius={2}
          showMonthLabels={false}
          showWeekdayLabels={false}
          theme={{
            dark: ["#151b23", "#56d364"],
          }}
          data={data.contributions}
        />
      ) : (
        <div className="rounded-xl bg-gradient-to-r from-[#151b23] via-green-900 to-[#56d364] w-[686px] h-[138px] animate-pulse"></div>
      )}
    </div>
  );
}
