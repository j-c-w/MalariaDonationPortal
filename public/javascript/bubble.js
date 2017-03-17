// Created by Kamile on 17/03/2017



// TODO -- receive real data from server for each user
var userData = {'name' : 'flare',
                'children' : [
                  { 'name' : 'Syria', 'size' : 100, 'messages': 'x, xx, xxx, xoxo', 'dates':'13/03/2017 17:56:00' },
                  { 'name' : 'US', 'size' : 10, 'messages': 'For a good cause', 'dates' : '02/01/2014 20:04:56' },
                  { 'name' : 'Tanzania', 'size' : 50, 'messages' : 'Good work', 'dates' : '01/08/2012 19:23:12, 13/03/2017 11:58:00'},
                  { 'name' : 'Australia', 'size' : 20, 'messages' : '', 'dates' : '02/11/2014 09:43:12'},
                  { 'name' : 'Uganda', 'size' : 30, 'messages' : '', 'dates' : '06/10/2016 10:13:52'},
                  { 'name' : 'United Kingdom', 'size' : 70, 'messages' : '', 'dates' : '12/03/2017  01:03:00'}
               ]};


var formatMessages = function(messageString) {
  // replace commas separating messages with new line characters
  return messageString.replace(/,/gi, '\n');
}


var format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory20c),
    diameter = 960; // diameter of body

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var pack = d3.pack()
    .size([diameter, diameter])
    .padding(5.5);

var root = d3.hierarchy(classes(userData))
    .sum(function(d) { return d.value; })
    .sort(function(a, b) { return b.value - a.value; });

// Create node for all countries donated to
pack(root);
var node = svg.selectAll(".node")
    .data(root.children) // data passed from database
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })


node.append("circle")
    .attr("id", function(d) { return d.id; })
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d,i) { return color(i); });


node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .style("font-size", function(d) {return (((d.r-50)/10)+8)+"px"})
      .style("font-weight", "bold")
      .text(function(d) { return (d.data.className + " \n" + d.value).substring(0, d.r / 3); });


node.append("title")
    .text(function(d) {
      return "Messages:\n " + formatMessages(d.data.messages)
              +  "\nDates donations were made:\n " + formatMessages(d.data.dates); });


// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size, messages: node.messages, dates:node.dates});
  }

  recurse(null, root);
  return {children: classes};
}


d3.select(window.self.frameElement).style("height", diameter + "px");
