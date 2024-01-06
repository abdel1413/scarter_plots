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

const w = 500;
const h = 500;
const padding = 60;

//create xscale
const xScale = d3.scaleLinear();
xScale.domain([0, d3.max(dataset, (d) => d[0])]);
xScale.range([padding, w - padding]);

//create yscale
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => h - yScale(d[1]))
  .attr("r", 5);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d) => xScale(d[0] + 5))
  .attr("y", (d) => h - yScale(d[1]))
  .text((d) => `${d[0]}, ${d[1]}`);

const xAxis = d3.axisBottom(xScale);

svg
  .append("g")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

const yAxis = d3.axisLeft(yScale);

svg
  .append("g")
  .attr("transform", "translate(" + padding + " ,0)")
  .call(yAxis);

//scale is a function that tells a program of to adjust
// the data points  so that it fit the width and the
//height of the SVG.
//the most commonly used is d3.sackeLinear()

const scale = d3.scaleLinear();
const output = scale(50);

// d3.select("body").append("h2").text(output);

scale.domain([50, 480]);
scale.range([10, 500]);
console.log(scale(50));
console.log(scale(480));
console.log(scale(325));
console.log(scale(750));
d3.scaleLinear();

// d3.select("body").append("h2").text(scale(50));
// d3.select("body").append("h2").text(scale(480));
// d3.select("body").append("h2").text(scale(325));
// d3.select("body").append("h2").text(scale(750));

//create a domain and range
scale.domain([250, 500]);
scale.range([10, 150]);
const outp = scale(50);
// d3.select("body").append("h2").text(outp);

// const xAxis = d3.axisBottom(xScale);
// svg
//   .append("g")
//   .attr("transform", "translate(0," + (h - padding) + ")")
//   .call(xAxis);
