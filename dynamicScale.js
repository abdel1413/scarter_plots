const data = [
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

const w2 = 500;
const h2 = 500;
const padding = 30;

// const svg2 = d3
//   .select("body")
//   .append("svg").selecAll('h3')
//   .attr("width", w2)
//   .attr("height", h2);
// svg2.data(data).enter().append("h3");

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d[0])])
  .range([padding, w2 - padding]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d[1])])
  .range([h2 - padding, padding]);

const xOutput = xScale(420);
const yOutput = yScale(411);

// d3.select("body").append("h1").text(xOutput);
// d3.select("body").append("h1").text(yOutput);
const svg2 = d3
  .select("body")
  .append("svg")
  .attr("width", w2)
  .attr("height", h2);

svg2
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 5);
svg2
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", (d) => xScale(d[0] + 5))
  .attr("y", (d) => yScale(d[1]))
  .text((d) => d[0] + ", " + d[1]);

//create x-axis and y-axis using
//d3 methods (d3.axisLef() and d3.axisBottome())

const xAxis = d3.axisBottom(xScale);

svg2
  .append("g")
  .attr("transform", "translate( 0," + (h2 - padding) + ")")
  .call(xAxis);

const yAxis = d3.axisLeft(yScale);

svg2
  .append("g")
  .attr("transform", "translate(" + padding + " ,0)")
  .call(yAxis);
