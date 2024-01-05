const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const width = 500;
const height = 500;
const padding = 30;

const svg = d3.select("body").append("svg");
const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
const yScale = d3.scaleLinear();
yScale.domain([0, d3.max(dataset, (d) => d[1])]);
yScale.range([h - padding, padding]);

const xOutput = xScale(420);
const yOutput = yScale(411);

d3.select("body").append("h1").text(xOutput);
d3.select("body").append("h1").text(yOutput);
