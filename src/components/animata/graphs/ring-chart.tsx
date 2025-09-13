import DonutChart from "@/components/animata/graphs/donut-chart";
import { cn } from "@/lib/utils";

type RingItem = {
  progress: number;
  className?: string;
  trackClassName: string;
  progressClassName: string;
};

interface RingChartProps {
  /**
   * Size of the smallest ring
   * @default 96
   */
  size?: number;

  /**
   * Gap between rings
   * @default 4
   */
  gap?: number;

  /**
   * Width of the ring
   * @default 20
   */
  width?: number;

  /**
   * Additional class name of the container
   */
  className?: string;

  rings: RingItem[];
}

const calculateRingSize = ({
  size = 96,
  width = 20,
  gap = 4,
  index,
  total,
}: Pick<RingChartProps, "gap" | "size" | "width"> & {
  index: number;
  total: number;
}) => {
  const position = total - index;
  return size + position * width * 2 + gap * position * 2;
};

export default function RingChart({
  size = 96,
  gap = 4,
  width = 20,
  className,
  rings,
}: RingChartProps) {
  if (!rings || rings.length === 0) return null;
  
  const totalWidth = calculateRingSize({
    size,
    width,
    gap,
    index: 0,
    total: rings.length,
  });

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-3xl bg-card/50 border border-border/20",
        className,
      )}
      style={{
        minWidth: totalWidth + gap * rings.length * 4,
        minHeight: totalWidth + gap * rings.length * 4,
      }}
    >
      {rings.map((ring, index) => {
        const ringSize = calculateRingSize({
          size,
          width,
          gap,
          index,
          total: rings.length,
        });
        return (
          <DonutChart
            key={`ring_${index}`}
            size={ringSize}
            {...ring}
            progressWidth={width}
            circleWidth={width}
            className={cn("absolute", ring.className)}
          />
        );
      })}
    </div>
  );
}