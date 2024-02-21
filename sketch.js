let data;
let cleanData = [];
let barCharts = [];
let numRows;

let canvasWidth = 600;
let canvasHeight = 600;

// Colours
let backgroundColour = "#e3e3e3";


function preload() {
	data = loadTable("data/languages_region_pivot.csv", "csv", "header");
	//region_data =  loadTable("data/languages_regions.csv", "csv", "header");

}

function setup() {
	createCanvas(canvasWidth, canvasHeight);

	numRows = data.rows.length


	for (let i = 0; i < data.rows.length; i++) {
		cleanData.push(data.rows[i].obj);
	}

	//console.log(cleanData);

	//console.log(numRows);

	barCharts.push(new BarChart(barChart01));
}

let barChart01 = {
	data:cleanData,
	yValue: "VALUE",
	xValue: "Reigon",
	chartWidth: 200,
	chartHeight: 200,
	xPos: 50,
	yPos: 450,
	axisLineColour: "#ff0000",
	barWidth: 20,
	barColour: ["#0000ff", "#00ffff", "#ffff00", "#00ff00"],
	barSections: ["No Language", "One Language", "Two Languages", "Three or more languages"]
	//axisLineThickness: 3
	//barColour: "#416096"
	//labelTextSize: 20,
	//labelPadding: 10,
	//labelColour: '#000099',
	//labelRotation: 45
}




function draw() {
	background(backgroundColour);
	barCharts.forEach((barChart) => barChart.render());
}
