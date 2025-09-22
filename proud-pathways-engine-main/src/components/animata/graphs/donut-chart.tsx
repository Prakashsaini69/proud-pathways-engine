import { cn } from "@/lib/utils";

interface DonutChartProps {
  size: number;
  progress: number;
  className?: string;
  trackClassName: string;
  progressClassName: string;
  progressWidth?: number;
  circleWidth?: number;
}

export default function DonutChart({
  size,
  progress,
  className,
  trackClassName,
  progressClassName,
  progressWidth = 20,
  circleWidth = 20,
}: DonutChartProps) {
  const radius = (size - circleWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={circleWidth}
          className={trackClassName}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={progressWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn("transition-all duration-700 ease-out", progressClassName)}
        />
      </svg>
    </div>
  );
}