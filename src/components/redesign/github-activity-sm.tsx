"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { Contributions } from "./github-activity";

export default function GithubActivitySm({
  data,
}: {
  data: Contributions;
}) {
  return (
    <div>
      {data ? (
        <ActivityCalendar
          blockMargin={1}
          blockSize={5}
          blockRadius={1}
          showMonthLabels={false}
          showWeekdayLabels={false}
          showColorLegend={false}
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
