// @TODO: YOUR CODE HERE!

var svg = d3
         .select("#scatter")
         .append("svg")
         .attr("width",500)
         .attr("height", 400);

svg.append("text")
   .attr("transform, translate(150,150)")
   .text("Poverty %")

svg.append("text") 
   .attr("transform, translate(150,150)")
   .text("healthcare")

d3.csv("assets/data/data.csv").then(importdata)

function runlater(){
  svg.append("circle")
             .attr("Cx", 150)
             .attr("Cy", 150)
             .attr("radius",8)
             .attr("class", "stateCircle");
  
  svg .append("text")
      .attr("transform, translate (150,150)")
      .attr("class","ateText")
      .attr("-size", 8)
      .text("ST");
}
//runlater();
