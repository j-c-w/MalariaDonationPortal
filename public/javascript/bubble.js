// Created by Kamile on 17/03/2017


//var d3 = require('d3');

// TODO -- receive real data from server for each user
var userData = {'name' : 'flare',
                'children' : [{ 'name' : 'Syria', 'size' : 200 },
                  { 'name' : 'US', 'size' : 10 },
                  { 'name' : 'Tanzania', 'size' : 50}
               ]};

var diameter = 1400;
var format = d3.format(",d");
var color = d3.scale.category10();


var bubble = d3.layout.pack()
  .sort(null)
  .size([diameter, diameter])
  .padding(1.5)

var svg = d3.select("body").append("svg")
  .attr("width", diameter)
  .attr("height", diameter)
  .attr("class", "bubble")


// Create node for all countries donated to
var node = svg.selectAll(".node")
    .data(bubble.nodes(classes(userData)) // data passed from database
    .filter(function(d) { return !d.children; }))
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })


// TODO -- On click, show messages sent along with donations to this country
node.append("title")
    .text(function(d) { return d.className + ": " + format(d.value)});


node.append("circle")
    .attr("r", function(d) { return d.r; })
    .style("fill",  function(d){return color(d.packageName);});


node.append("text")
    .attr("textLength",function(d){return d.r})
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .style("font-size", function(d){return (((d.r-50)/10)+8)+"px"})
    .style("font-weight","bold")
    .text(function(d) { return d.className; });



// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  console.log('recursin');

  recurse(null, root);
  return {children: classes};
}

d3.select(window.self.frameElement).style("height", diameter + "px");
