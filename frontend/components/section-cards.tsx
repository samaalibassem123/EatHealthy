import { ChartRadialText } from "./chart-radial-text";
import { Tilt } from "./ui/tilt";

export function SectionCards() {
  const dateStr = new Date().toLocaleDateString();

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Tilt rotationFactor={3} isRevese>
        <ChartRadialText
          ChartData={{
            title: "Calorie Count",
            Desc: dateStr,
            hit: 500,
            goal: 2500,
            type: "calories",
          }}
        />{" "}
      </Tilt>

      <Tilt rotationFactor={3} isRevese>
        <ChartRadialText
          ChartData={{
            title: "Protein Count",
            Desc: dateStr,
            hit: 500,
            goal: 2500,
            type: "g /Protein",
          }}
        />
      </Tilt>

      <Tilt rotationFactor={3} isRevese>
        <ChartRadialText
          ChartData={{
            title: " Carb",
            Desc: dateStr,
            hit: 250,
            goal: 2500,
            type: "g / Carb",
          }}
        />
      </Tilt>

      <Tilt rotationFactor={3} isRevese>
        <ChartRadialText
          ChartData={{
            title: " Fat",
            Desc: dateStr,
            hit: 500,
            goal: 2500,
            type: "g / Fat",
          }}
        />
      </Tilt>
    </div>
  );
}
