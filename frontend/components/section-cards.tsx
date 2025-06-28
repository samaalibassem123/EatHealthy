import { ChartRadialText } from "./chart-radial-text";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <ChartRadialText
        ChartData={{
          title: "Calorie Count",
          Desc: "desc",
          hit: 500,
          goal: 2500,
          type: "calories",
        }}
      />
       <ChartRadialText
        ChartData={{
          title: "Protein Count",
          Desc: "desc",
          hit: 500,
          goal: 2500,
          type: "g / Protein",
        }}
      />
       <ChartRadialText
        ChartData={{
          title: " Carb",
          Desc: "desc",
          hit: 250,
          goal: 2500,
          type: "g / Carb",
        }}
        
      />
           <ChartRadialText
        ChartData={{
          title: " Fat",
          Desc: "desc",
          hit: 500,
          goal: 2500,
          type: "g / Fat",
        }}
        
      />
    </div>
  );
}
