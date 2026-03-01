import type { RefObject } from "react";

export const useDownloadSVG = (
  svgRef: RefObject<SVGSVGElement | null>,
  filename: string,
) => {
  return () => {
    if (!svgRef?.current) return;

    const svgString = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };
};
