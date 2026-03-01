import { forwardRef } from "react";
import { toRuneSegments } from "../utils/toRuneSegments.ts";
import { SEGMENTS } from "../constants/segments.ts";

export const RuneSVG = forwardRef<SVGSVGElement, { number: number }>(
  ({ number }, ref) => {
    const segments = toRuneSegments(number);

    return (
      <svg
        ref={ref}
        width={60}
        height={90}
        viewBox="-2 -2 64 94"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...segments].map((key) => {
          const { x1, y1, x2, y2 } = SEGMENTS[key];
          return (
            <line
              key={key}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="black"
              strokeWidth={3}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  },
);

RuneSVG.displayName = "RuneSVG";
