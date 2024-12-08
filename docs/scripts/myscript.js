// add your JavaScript/D3 to this file
//TODO: import data, implement slider

//import cut-down CSV with the data we want to show

const years = [];
const values = [];

d3.csv("dummy_data.csv", function(data){
  for (var i = 0; i &lt; data.length; i++){
    years.push(data[i].year);
    console.log(data[i].year);
    values.push(data[i].value);
    console.log(data[i].year);
  }
});

//slider with years from d3-simple-slider on github, cite this as source

var slider = d3
  .sliderHorizontal()
  .min(years[0])
  .max(years[years.length - 1])
  .step(1)
  .width(300)
  .displayValue(false)
  .on('onchange', (val) => {
    d3.select('#value').text(val)
});

d3.select('#slider')
  .append('svg')
  .attr('width', 500)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)')
  .call(slider);

//moving slider changes lookup variable by years, allows user to slide backwards and fowards in time to see trends