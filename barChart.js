class BarChart {
	constructor(obj) {
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		this.axisLineColour = obj.axisLineColour;
		this.barWidth = obj.barWidth;
		this.barColour = obj.barColour;
		this.barSections= obj.barSections;
		//this.axisLineThickness
	}

	render() {
		push()

		// drawing the lines
		
		translate(this.xPos, this.yPos);
		noFill();
		stroke(this.axisLineColour);
		//strokeWeight(this.axisThickness);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);


		// Drawing the bars:

		
		//let scale = this.chartHeight/max(this.data.map(d=>d[this.yValue]))

		push();
		//for(let i=0; i<this.data.length; i++ ){
		//	translate(gap+this.barWidth, 0);
		//	fill(this.barColour[i])
		//	noStroke();
		//	rect(0,0, this.barWidth, -this.data[i][this.yValue]);
		//	//console.log(this.data[i][this.yValue])
		//}

		//draw rectangle, for each bar section, draw in a rectangle of the value,
		// translate to the top of that bar, draw another bar of value
		// ones all sections are done, translate the gap, then do it again

		let bars = this.data.length;
		let gap = (this.chartWidth - (bars * this.barWidth))/(bars +1);
		//let barValue;
		console.log(bars)
		console.log(this.barSections.length)

		for(let i=0; i<bars; i++){
			translate(gap+this.barWidth, 0)
			fill("#000000")
			for(let j=0; j<this.barSections; i++){
				rect(0,0, this.barWidth, -20)
			}
			//rect(0,0, this.barWidth, -20)
			//console.log(this.barSections)
			//console.log(bars)
		}

		pop();

		//noStroke();
		////fill(barColour);
		////prettier-ignore
		//let barGap = (this.chartWidth - (this.numBars * this.barWidth)) / (this.numBars + 1);
		//// console.log(barGap);
		//for (let i = 0; i < this.numBars; i++) {
		//	//prettier-ignore
		//	let jump = (barGap * (i+1)) + (this.barWidth * i);
		//	let colHeight = this.data[i].Total * 10;
		//	rect(jump, 0, this.barWidth, -colHeight);
		//}
	}
}
