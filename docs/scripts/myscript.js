const data = [{year:"1974",relig:"protestant",pct_oppose:"33"},{year:"1974",relig:"catholic",pct_oppose:"26"},{year:"1974",relig:"jewish",pct_oppose:"57"},{year:"1974",relig:"none",pct_oppose:"54"},{year:"1975",relig:"protestant",pct_oppose:"36"},{year:"1975",relig:"catholic",pct_oppose:"31"},{year:"1975",relig:"jewish",pct_oppose:"39"},{year:"1975",relig:"none",pct_oppose:"46"},{year:"1976",relig:"protestant",pct_oppose:"31"},{year:"1976",relig:"catholic",pct_oppose:"28"},{year:"1976",relig:"jewish",pct_oppose:"26"},{year:"1976",relig:"none",pct_oppose:"43"},{year:"1977",relig:"protestant",pct_oppose:"28"},{year:"1977",relig:"catholic",pct_oppose:"27"},{year:"1977",relig:"jewish",pct_oppose:"28"},{year:"1977",relig:"none",pct_oppose:"34"},{year:"1978",relig:"protestant",pct_oppose:"29"},{year:"1978",relig:"catholic",pct_oppose:"28"},{year:"1978",relig:"jewish",pct_oppose:"21"},{year:"1978",relig:"none",pct_oppose:"39"},{year:"1980",relig:"protestant",pct_oppose:"28"},{year:"1980",relig:"catholic",pct_oppose:"25"},{year:"1980",relig:"jewish",pct_oppose:"23"},{year:"1980",relig:"none",pct_oppose:"42"},{year:"1982",relig:"protestant",pct_oppose:"29"},{year:"1982",relig:"catholic",pct_oppose:"23"},{year:"1982",relig:"jewish",pct_oppose:"20"},{year:"1982",relig:"none",pct_oppose:"26"},{year:"1983",relig:"protestant",pct_oppose:"23"},{year:"1983",relig:"catholic",pct_oppose:"23"},{year:"1983",relig:"jewish",pct_oppose:"28"},{year:"1983",relig:"none",pct_oppose:"27"},{year:"1984",relig:"protestant",pct_oppose:"26"},{year:"1984",relig:"catholic",pct_oppose:"25"},{year:"1984",relig:"jewish",pct_oppose:"4"},{year:"1984",relig:"none",pct_oppose:"28"},{year:"1985",relig:"protestant",pct_oppose:"20"},{year:"1985",relig:"catholic",pct_oppose:"20"},{year:"1985",relig:"jewish",pct_oppose:"33"},{year:"1985",relig:"none",pct_oppose:"21"},{year:"1986",relig:"protestant",pct_oppose:"24"},{year:"1986",relig:"catholic",pct_oppose:"27"},{year:"1986",relig:"jewish",pct_oppose:"17"},{year:"1986",relig:"none",pct_oppose:"25"},{year:"1987",relig:"protestant",pct_oppose:"32"},{year:"1987",relig:"catholic",pct_oppose:"28"},{year:"1987",relig:"jewish",pct_oppose:"11"},{year:"1987",relig:"none",pct_oppose:"35"},{year:"1988",relig:"protestant",pct_oppose:"23"},{year:"1988",relig:"catholic",pct_oppose:"23"},{year:"1988",relig:"jewish",pct_oppose:"27"},{year:"1988",relig:"none",pct_oppose:"28"},{year:"1989",relig:"protestant",pct_oppose:"21"},{year:"1989",relig:"catholic",pct_oppose:"22"},{year:"1989",relig:"jewish",pct_oppose:"13"},{year:"1989",relig:"none",pct_oppose:"25"},{year:"1990",relig:"protestant",pct_oppose:"20"},{year:"1990",relig:"catholic",pct_oppose:"20"},{year:"1990",relig:"jewish",pct_oppose:"17"},{year:"1990",relig:"none",pct_oppose:"25"},{year:"1991",relig:"protestant",pct_oppose:"23"},{year:"1991",relig:"catholic",pct_oppose:"22"},{year:"1991",relig:"jewish",pct_oppose:"39"},{year:"1991",relig:"none",pct_oppose:"31"},{year:"1993",relig:"protestant",pct_oppose:"21"},{year:"1993",relig:"catholic",pct_oppose:"25"},{year:"1993",relig:"jewish",pct_oppose:"23"},{year:"1993",relig:"none",pct_oppose:"24"},{year:"1994",relig:"protestant",pct_oppose:"20"},{year:"1994",relig:"catholic",pct_oppose:"21"},{year:"1994",relig:"jewish",pct_oppose:"26"},{year:"1994",relig:"none",pct_oppose:"22"},{year:"1996",relig:"protestant",pct_oppose:"22"},{year:"1996",relig:"catholic",pct_oppose:"25"},{year:"1996",relig:"jewish",pct_oppose:"31"},{year:"1996",relig:"none",pct_oppose:"24"},{year:"1998",relig:"protestant",pct_oppose:"26"},{year:"1998",relig:"catholic",pct_oppose:"27"},{year:"1998",relig:"jewish",pct_oppose:"22"},{year:"1998",relig:"none",pct_oppose:"29"},{year:"1998",relig:"buddhism",pct_oppose:"88"},{year:"1998",relig:"hinduism",pct_oppose:"20"},{year:"1998",relig:"islam",pct_oppose:"23"},{year:"1998",relig:"christian",pct_oppose:"32"},{year:"2000",relig:"protestant",pct_oppose:"30"},{year:"2000",relig:"catholic",pct_oppose:"29"},{year:"2000",relig:"jewish",pct_oppose:"39"},{year:"2000",relig:"none",pct_oppose:"35"},{year:"2000",relig:"buddhism",pct_oppose:"27"},{year:"2000",relig:"hinduism",pct_oppose:"25"},{year:"2000",relig:"islam",pct_oppose:"67"},{year:"2000",relig:"christian",pct_oppose:"38"},{year:"2002",relig:"protestant",pct_oppose:"30"},{year:"2002",relig:"catholic",pct_oppose:"29"},{year:"2002",relig:"jewish",pct_oppose:"52"},{year:"2002",relig:"none",pct_oppose:"37"},{year:"2002",relig:"buddhism",pct_oppose:"33"},{year:"2002",relig:"hinduism",pct_oppose:"33"},{year:"2002",relig:"islam",pct_oppose:"25"},{year:"2002",relig:"christian",pct_oppose:"37"},{year:"2004",relig:"protestant",pct_oppose:"27"},{year:"2004",relig:"catholic",pct_oppose:"33"},{year:"2004",relig:"jewish",pct_oppose:"29"},{year:"2004",relig:"none",pct_oppose:"42"},{year:"2004",relig:"buddhism",pct_oppose:"17"},{year:"2004",relig:"hinduism",pct_oppose:"40"},{year:"2004",relig:"islam",pct_oppose:"88"},{year:"2004",relig:"christian",pct_oppose:"34"},{year:"2006",relig:"protestant",pct_oppose:"29"},{year:"2006",relig:"catholic",pct_oppose:"37"},{year:"2006",relig:"jewish",pct_oppose:"40"},{year:"2006",relig:"none",pct_oppose:"39"},{year:"2006",relig:"buddhism",pct_oppose:"38"},{year:"2006",relig:"hinduism",pct_oppose:"56"},{year:"2006",relig:"islam",pct_oppose:"64"},{year:"2006",relig:"christian",pct_oppose:"29"},{year:"2008",relig:"protestant",pct_oppose:"29"},{year:"2008",relig:"catholic",pct_oppose:"38"},{year:"2008",relig:"jewish",pct_oppose:"44"},{year:"2008",relig:"none",pct_oppose:"37"},{year:"2008",relig:"buddhism",pct_oppose:"57"},{year:"2008",relig:"hinduism",pct_oppose:"50"},{year:"2008",relig:"islam",pct_oppose:"70"},{year:"2008",relig:"christian",pct_oppose:"37"},{year:"2010",relig:"protestant",pct_oppose:"28"},{year:"2010",relig:"catholic",pct_oppose:"37"},{year:"2010",relig:"jewish",pct_oppose:"28"},{year:"2010",relig:"none",pct_oppose:"38"},{year:"2010",relig:"buddhism",pct_oppose:"47"},{year:"2010",relig:"hinduism",pct_oppose:"75"},{year:"2010",relig:"islam",pct_oppose:"40"},{year:"2010",relig:"christian",pct_oppose:"24"},{year:"2012",relig:"protestant",pct_oppose:"33"},{year:"2012",relig:"catholic",pct_oppose:"37"},{year:"2012",relig:"jewish",pct_oppose:"36"},{year:"2012",relig:"none",pct_oppose:"40"},{year:"2012",relig:"buddhism",pct_oppose:"60"},{year:"2012",relig:"hinduism",pct_oppose:"44"},{year:"2012",relig:"islam",pct_oppose:"31"},{year:"2012",relig:"christian",pct_oppose:"26"},{year:"2014",relig:"protestant",pct_oppose:"32"},{year:"2014",relig:"catholic",pct_oppose:"36"},{year:"2014",relig:"jewish",pct_oppose:"41"},{year:"2014",relig:"none",pct_oppose:"39"},{year:"2014",relig:"buddhism",pct_oppose:"50"},{year:"2014",relig:"hinduism",pct_oppose:"36"},{year:"2014",relig:"islam",pct_oppose:"40"},{year:"2014",relig:"christian",pct_oppose:"41"},{year:"2016",relig:"protestant",pct_oppose:"36"},{year:"2016",relig:"catholic",pct_oppose:"42"},{year:"2016",relig:"jewish",pct_oppose:"50"},{year:"2016",relig:"none",pct_oppose:"45"},{year:"2016",relig:"buddhism",pct_oppose:"45"},{year:"2016",relig:"hinduism",pct_oppose:"64"},{year:"2016",relig:"islam",pct_oppose:"47"},{year:"2016",relig:"christian",pct_oppose:"18"},{year:"2018",relig:"protestant",pct_oppose:"34"},{year:"2018",relig:"catholic",pct_oppose:"38"},{year:"2018",relig:"jewish",pct_oppose:"36"},{year:"2018",relig:"none",pct_oppose:"40"},{year:"2018",relig:"buddhism",pct_oppose:"56"},{year:"2018",relig:"hinduism",pct_oppose:"67"},{year:"2018",relig:"islam",pct_oppose:"47"},{year:"2018",relig:"christian",pct_oppose:"39"},{year:"2021",relig:"protestant",pct_oppose:"37"},{year:"2021",relig:"catholic",pct_oppose:"45"},{year:"2021",relig:"jewish",pct_oppose:"47"},{year:"2021",relig:"none",pct_oppose:"52"},{year:"2021",relig:"buddhism",pct_oppose:"48"},{year:"2021",relig:"hinduism",pct_oppose:"47"},{year:"2021",relig:"islam",pct_oppose:"33"},{year:"2021",relig:"christian",pct_oppose:"44"},{year:"2022",relig:"protestant",pct_oppose:"34"},{year:"2022",relig:"catholic",pct_oppose:"38"},{year:"2022",relig:"jewish",pct_oppose:"50"},{year:"2022",relig:"none",pct_oppose:"47"},{year:"2022",relig:"buddhism",pct_oppose:"48"},{year:"2022",relig:"hinduism",pct_oppose:"46"},{year:"2022",relig:"islam",pct_oppose:"52"},{year:"2022",relig:"christian",pct_oppose:"37"}]

// Set up dimensions
const margin = {top: 20, right: 20, bottom: 60, left: 60};
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create SVG
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Set up scales
const x = d3.scaleBand().range([0, width]).padding(0.1);
const y = d3.scaleLinear().range([height, 0]);

// Add axes
const xAxis = svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "x-axis");

const yAxis = svg.append("g")
    .attr("class", "y-axis");

// Add axis labels
svg.append("text")
    .attr("class", "axis-label")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .text("Religion");

svg.append("text")
    .attr("class", "axis-label")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 20)
    .text("Percentage Opposing Capital Punishment");

// Get unique religions and years
const religions = [...new Set(data.map(d => d.relig))];
const years = [...new Set(data.map(d => d.year))].sort((a, b) => a - b);

// Set domain for x scale
x.domain(religions);

// Set fixed y domain
y.domain([0, 100]);

// Initial x-axis
xAxis.call(d3.axisBottom(x));

// Initial y-axis
yAxis.call(d3.axisLeft(y));

// Function to update chart
function updateChart(year) {
    const filteredData = data.filter(d => d.year === year);

    // Update current year display and input
    d3.select("#currentYear").text(year);
    d3.select("#yearInput").property("value", year);

    // Update bars
    const bars = svg.selectAll(".bar")
        .data(filteredData, d => d.relig);

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.relig))
        .attr("width", x.bandwidth())
        .attr("y", height)
        .attr("height", 0)
        .merge(bars)
        .transition()
        .duration(1000)
        .attr("x", d => x(d.relig))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.pct_oppose))
        .attr("height", d => height - y(d.pct_oppose));

    bars.exit()
        .transition()
        .duration(1000)
        .attr("y", height)
        .attr("height", 0)
        .remove();

    // Update labels
    const labels = svg.selectAll(".bar-label")
        .data(filteredData, d => d.relig);

    labels.enter()
        .append("text")
        .attr("class", "bar-label")
        .attr("text-anchor", "middle")
        .attr("x", d => x(d.relig) + x.bandwidth() / 2)
        .attr("y", height)
        .merge(labels)
        .transition()
        .duration(1000)
        .attr("x", d => x(d.relig) + x.bandwidth() / 2)
        .attr("y", d => y(d.pct_oppose) - 5)
        .text(d => `${d.pct_oppose}%`);

    labels.exit()
        .transition()
        .duration(1000)
        .attr("y", height)
        .remove();
}

// Auto-play functionality
let currentIndex = 0;
let intervalId = null;

function startAutoPlay() {
    if (intervalId) return;
    
    d3.select("#startBtn").property("disabled", true);
    d3.select("#stopBtn").property("disabled", false);
    
    intervalId = setInterval(() => {
        updateChart(years[currentIndex]);
        currentIndex = (currentIndex + 1) % years.length;
    }, 1000);
}

function stopAutoPlay() {
    if (!intervalId) return;
    
    clearInterval(intervalId);
    intervalId = null;
    
    d3.select("#startBtn").property("disabled", false);
    d3.select("#stopBtn").property("disabled", true);
}

function resetAutoPlay() {
    stopAutoPlay();
    currentIndex = 0;
    updateChart(years[0]);
    
    d3.select("#startBtn").property("disabled", false);
    d3.select("#stopBtn").property("disabled", true);
}

// Go to specific year
function goToYear() {
    const yearInput = d3.select("#yearInput").property("value");
    const year = years.find(y => y === yearInput);
    
    if (year) {
        stopAutoPlay();
        currentIndex = years.indexOf(year);
        updateChart(year);
    } else {
        alert("Invalid year. Please choose a year from the dataset.");
    }
}

// Attach event listeners
d3.select("#startBtn").on("click", startAutoPlay);
d3.select("#stopBtn").on("click", stopAutoPlay);
d3.select("#resetBtn").on("click", resetAutoPlay);
d3.select("#goToYearBtn").on("click", goToYear);

// Set year input constraints
d3.select("#yearInput")
    .property("min", years[0])
    .property("max", years[years.length - 1]);

// Initial chart
updateChart(years[0]);