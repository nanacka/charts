let data;
let cleanData = [];
let barCharts = [];
let numRows;

let canvasWidth = 1000;
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
		yValue: "One language (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 300,
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

	let stackedBarChart = {
		data:cleanData,
		//yValue: "No other language (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 550,
		yPos: 250,
		axisLineColour: "#ff0000",
		barWidth: 20,
		barColour: ["#0000ff", "#00ffff", "#ffff00", "#00ff00"],
		barSections: ["No other language (%)", "One language (%)", "Two languages (%)", "Three languages or more (%)"],
		axisThickness: 3,
		labelTextSize: 20,
		labelPadding: 10,
		labelColour: "#000099",
		labelRotation: 45
	}

	let horizontalBarChart = {
		data:cleanData,
		yValue: "Two languages (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 100,
		yPos: 350,
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

	let horizontalBarChart02 = {
		data:cleanData,
		yValue: "Three languages or more (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 400,
		yPos: 350,
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

	let pieChart = {
		data:cleanData,
		yValue: ["No other language (%)", "One language (%)", "Two languages (%)", "Three languages or more (%)"],
		xValue: "Region",
		//chartWidth: 200,
		//chartHeight: 200,
		xPos: 250,
		yPos: 100,
		//axisLineColour: "#ff0000",
		//barColour: ["#0000ff", "#00ffff", "#ffff00", "#00ff00", "#0000ff", "#00ffff", "#ffff00", "#00ff00"],
		//axisThickness: 1,
		//Colour: "#416096"
		//labelTextSize: 20,
		//labelPadding: 70,
		//labelColour: "#000099",
	}
	//console.log(cleanData);

	//console.log(numRows);
	//console.log(horizontalBarChart)

	barCharts.push(new BarChart(barChart01));
	barCharts.push(new BarChart(barChart02));

	barCharts.push(new HorizontalBarChart(horizontalBarChart));
	barCharts.push(new HorizontalBarChart(horizontalBarChart02));

	barCharts.push(new StackedBarChart(stackedBarChart));
	barCharts.push(new PieChart(pieChart));


	console.log(barCharts)

}



function draw() {
	background(backgroundColour);
	barCharts.forEach((barChart) => barChart.render());
}
