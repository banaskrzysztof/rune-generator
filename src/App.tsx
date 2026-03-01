import { useRef, useState } from "react";
import "./App.scss";
import { useDownloadSVG } from "./hooks/useDownloadSVG.ts";
import { isValidInput } from "./utils/isValidInput.ts";
import { RuneSVG } from "./components/RuneSVG.tsx";

export default function App() {
  const [runeNumber, setRuneNumber] = useState<number | string>("");
  const svgRef = useRef<SVGSVGElement | null>(null);
  const downloadSVG = useDownloadSVG(svgRef, `rune_${runeNumber}.svg`);

  return (
    <div className="container">
      <h1>Generate a number in runic notation</h1>
      <input
        className="runeNumberInput"
        name="runeNumber"
        type="text"
        inputMode="numeric"
        value={runeNumber}
        onChange={(e) =>
          isValidInput(e.target.value) && setRuneNumber(e.target.value)
        }
        placeholder="Provide a number in the range 1-9999"
      />

      {runeNumber && (
        <>
          <RuneSVG ref={svgRef} number={Number(runeNumber)} />
          <button onClick={downloadSVG}>Download the rune in SVG format</button>
        </>
      )}
    </div>
  );
}
