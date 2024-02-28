let data;
let cleanData = [];
let barCharts = [];
let numRows;

let canvasWidth = 1300;
let canvasHeight = 800;

// Colours
let backgroundColour = "#201119";

function preload() {
	data = loadTable("data/languages_region_pivot.csv", "csv", "header");
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
		axisLineColour: "#ffffff",
		barWidth: 20,
		barColour: ['#563166', '#805A99', '#A0A9E6', '#D2E1F0'],
		axisThickness: 1,
		labelTextSize: 20,
		labelPadding: 10,
		labelColour: "#FFFFFF",
		labelRotation: 45,
		numTicks: 5,
		titleTextSize: 14 
	}

	let barChart02 = {
		data:cleanData,
		yValue: "One language (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 400,
		yPos: 250,
		axisLineColour: "#ffffff",
		barWidth: 20,
		barColour:  ['#1F3940', '#246758', '#53BF90', '#BFF1BC'],
		axisThickness: 1,
		labelTextSize: 20,
		labelPadding: 10,
		labelColour: "#ffffff",
		labelRotation: 45,
		numTicks: 5,
		titleTextSize: 14 

	}

	let stackedBarChart = {
		data:cleanData,
		yValue: ["No other language (%)", "One language (%)", "Two languages (%)", "Three languages or more (%)"],
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 900,
		yPos: 250,
		axisLineColour: "#ffffff",
		barWidth: 20,
		barColour: ['#563166', '#805A99', '#A0A9E6', '#D2E1F0'],
		axisThickness: 1,
		labelTextSize: 12,
		labelPadding: 10,
		labelColour: "#ffffff",
		labelRotation: 45,
		numTicks: 10,
		titleTextSize: 14 

	}

	let horizontalBarChart = {
		data:cleanData,
		yValue: "Two languages (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 100,
		yPos: 400,
		axisLineColour: "#ffffff",
		barWidth: 20,
		barColour:  ['#1F3940', '#246758', '#53BF90', '#BFF1BC'],
		axisThickness: 1,
		labelTextSize: 20,
		labelPadding: 55,
		labelColour: "#ffffff",
		numTicks: 5,
		titleTextSize: 14 

	}

	let horizontalBarChart02 = {
		data:cleanData,
		yValue: "Three languages or more (%)",
		xValue: "Region",
		chartWidth: 200,
		chartHeight: 200,
		xPos: 400,
		yPos: 400,
		axisLineColour: "#ffffff",
		barWidth: 20,
		barColour: ['#563166', '#805A99', '#A0A9E6', '#D2E1F0'],
		axisThickness: 1,
		labelTextSize: 20,
		labelPadding: 55,
		labelColour: "#ffffff",
		numTicks: 5,
		titleTextSize: 14 

	}

	let pieChart = {
		data:cleanData,
		yValue: ["No other language (%)", "One language (%)", "Two languages (%)", "Three languages or more (%)"],
		xValue: "Region",
		xPos: 1000,
		yPos: 500,
		diameter: 250,
		sliceColour: ['#1F3940', '#246758', '#53BF90', '#BFF1BC'],
		labelTextSize: 12,
		labelColour: "#ffffff"
	}
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
