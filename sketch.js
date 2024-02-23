let data;
let cleanData = [];
let barCharts = [];
let numRows;

let canvasWidth = 800;
let canvasHeight = 800;

// Colours
let backgroundColour = "#e3e3e3";



function preload() {
	data = loadTable("data/languages_region_pivot.csv", "csv", "header");
	//region_data =  loadTable("data/languages_regions.csv", "csv", "header");

}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	noLoop()
	numRows = data.rows.length


	for (let i = 0; i < numRows; i++) {
		cleanData.push(data.rows[i].obj);
	}

	let barChart01 = {
		data:cleanData,
		yValue: "No other language (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 50,
		yPos: 250,
		axisLineColour: "#ff0000",
		barWidth: 20,
		barColour: ["#0000ff", "#00ffff", "#ffff00", "#00ff00", "#0000ff", "#00ffff", "#ffff00", "#00ff00"],
		axisThickness: 1,
		//barColour: "#416096"
		labelTextSize: 20,
		labelPadding: 10,
		labelColour: "#000099",
		labelRotation: 45,
		//numTicks: 5
	}

	let barChart02 = {
		data:cleanData,
		//yValue: "No other language (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 50,
		yPos: 500,
		axisLineColour: "#ff0000",
		barWidth: 20,
		barColour: ["#0000ff", "#00ffff", "#ffff00", "#00ff00","#0000ff", "#00ffff", "#ffff00", "#00ff00"],
		barSections: ["No Language", "One Language", "Two Languages", "Three or more languages"],
		axisThickness: 3,
		labelTextSize: 20,
		labelPadding: 10,
		labelColour: "#000099",
		labelRotation: 45
	}

	let horizontalBarChart = {
		data:cleanData,
		yValue: "Three languages or more (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 350,
		yPos: 50,
		axisLineColour: "#ff0000",
		barWidth: 20,
		barColour: ["#0000ff", "#00ffff", "#ffff00", "#00ff00", "#0000ff", "#00ffff", "#ffff00", "#00ff00"],
		axisThickness: 1,
		//barColour: "#416096"
		labelTextSize: 20,
		labelPadding: 70,
		labelColour: "#000099",
		labelRotation: 45,
		//numTicks: 5
	}
	//console.log(cleanData);

	//console.log(numRows);
	console.log(horizontalBarChart)

	barCharts.push(new BarChart(barChart01));
	barCharts.push(new HorizontalBarChart(horizontalBarChart));
	barCharts.push(new StackedBarChart(barChart02));


	console.log(barCharts)

}






function draw() {
	background(backgroundColour);
	barCharts.forEach((barChart) => barChart.render());
}
