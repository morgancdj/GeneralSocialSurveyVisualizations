// add your JavaScript/D3 to this file

var years = [];
var values = [];

const rowConverter = function (d){
  return {
    year: +d.year,
    value: +d.value
  }
};

const w=350;
const h=350;

const svg = d3.select("#svg");

svg
.attr("width", w)
.attr("height", h);

const circ = svg.selectAll("circle");

d3.csv("https://raw.githubusercontent.com/jdonohue44/GeneralSocialSurveyVisualizations/main/dummy_data.csv", rowConverter)
  .then(function(data){
    for (var i = 0; i < data.length; i++){
      years.push(data[i].year)
      values.push(data[i].value)
      console.log(data[i].year)
    };
    
    const firstYear = d3.min(years);
    const lastYear = d3.max(years);
    
    console.log("years ok")
    
    const slider = d3
    .select("input")
    .attr("min", firstYear)
    .attr("max", lastYear)
    .attr("style", "width: " + (w-35) + "px;");
    
    console.log("slider ok");
    
    const yearScale = d3.scaleLinear()
    .domain([firstYear, lastYear])
    .range(0,200);
    
    console.log("year scale ok");
    
    d3.select("input")
    .on("input", function() {update(+this.value);
      console.log(this.value);
    });
    
    update(firstYear);
    
    function update(year){
      const data_by_year = data.filter(d => d.year == year);
      const variable_value = +data_by_year[0].value
      console.log(variable_value)
      svg.selectAll("circle")
      .data(variable_value)
      .enter()
      .append("circle")
      .merge(d3.selectAll("circle"))
      .attr("cx", "100")
      .attr("cy", d => d)
      .attr("r", "5")
      .attr("fill", "blue");
    }
    
    console.log("slider call ok");
})
  .catch(function(error){
    console.log(error)
  })

