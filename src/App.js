import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";
import Select from "react-select";

// For Dropdown Menu Styling
const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};
//-----

function formatGroupLabel(data) {
  return (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
}

const scaleOptions = [
  { value: "Major", label: "Major" },
  { value: "MelodicMinor", label: "MelodicMinor" },
  { value: "HarmonicMinor", label: "HarmonicMinor" },
  { value: "HarmonicMajor", label: "HarmonicMajor" },
  { value: "DoubleHarmonic", label: "DoubleHarmonic" },
  { value: "Diminished", label: "Diminished" },
  { value: "WholeTone", label: "WholeTone" }
];

const tuningOptions = [
  { value: "Standard", label: "Standard" },
  { value: "Fourths", label: "Fourths" },
  { value: "DropD", label: "DropD" },
  { value: "HarmonicMajor", label: "HarmonicMajor" },
  { value: "DoubleHarmonic", label: "DoubleHarmonic" },
  { value: "Diminished", label: "Diminished" },
  { value: "WholeTone", label: "WholeTone" }
];

const scales = {
  major: [1, 2, 3, 4, 5, 6, 7],
  melodicMinor: [1, 2, 3, 4, 5, 6, 7],
  harmonicMinor: [1, 2, 3, 4, 5, 6, 7],
  harmonicMajor: [1, 2, 3, 4, 5, 6, 7],
  diminished: [1, 2, 3, 4, 5, 6, 7, 8],
  wholetone: [1, 2, 3, 4, 5, 6],
  blues: [1, 2, 3, 4, 5, 6, 7, 8]
};

const tunings = {
  standard: [1, 2, 3, 4, 5, 6, 7],
  fourths: [1, 2, 3, 4, 5, 6, 7],
  fifths: [1, 2, 3, 4, 5, 6, 7],
  dropD: [1, 2, 3, 4, 5, 6, 7],
  dropDb: [1, 2, 3, 4, 5, 6, 7, 8],
  dropC: [1, 2, 3, 4, 5, 6],
  blues: [1, 2, 3, 4, 5, 6, 7, 8]
};
const musicalKeys = {
  E: ["A", "B", "C", "D", "E", "F", "G"],
  F: ["A", "B", "C", "D", "E", "F", "G"],
  G: ["A", "B", "C", "D", "E", "F", "G"],
  A: ["A", "B", "C", "D", "E", "F", "G"],
  B: ["A", "B", "C", "D", "E", "F", "G"],
  C: ["A", "B", "C", "D", "E", "F", "G"],
  D: ["A", "B", "C", "D", "E", "F", "G"],
  Esharp: ["A", "B", "C", "D", "E", "F", "G"],
  Fsharp: ["A", "B", "C", "D", "E", "F", "G"],
  Gsharp: ["A", "B", "C", "D", "E", "F", "G"],
  Asharp: ["A", "B", "C", "D", "E", "F", "G"],
  Bsharp: ["A", "B", "C", "D", "E", "F", "G"]
};
const noteNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const yLabels = ["F", "C", "G", "D", "A", "E"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => noteNumbers[5]));

function App() {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "sans-serif"
      }}
    >
      <h1>Ultimate Guitar | All Fourths Tuning</h1>
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        // Reder cell with tooltip
        cellRender={(x, y, value) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
        )}
        xLabelsStyle={(index) => ({
          color: index % 2 ? "transparent" : "#777",
          fontSize: ".65rem"
        })}
        yLabelsStyle={() => ({
          fontSize: ".65rem",
          textTransform: "uppercase",
          color: "#777"
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: ".7rem",
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
        })}
        cellHeight="1.5rem"
        xLabelsPos="bottom"
        onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
        // yLabelsPos="right"
        // square
      />
      <Select
        defaultValue={scaleOptions[0]}
        options={scaleOptions}
        formatGroupLabel={formatGroupLabel}
      />
    </div>
  );
}

export default App;
