import { DIGIT_SEGMENTS } from "../constants/digitSegments.ts";
import type { SEGMENTS } from "../constants/segments.ts";

const DIVISORS = [1000, 100, 10, 1] as const;

export const toRuneSegments = (n: number): Set<keyof typeof SEGMENTS> => {
  const parts = DIVISORS.map(
    (divisor) => (Math.floor(n / divisor) % 10) * divisor,
  ).filter((part) => part > 0);

  return new Set([
    "V_CENTER",
    ...parts.flatMap((part) => DIGIT_SEGMENTS[part]),
  ]);
};
