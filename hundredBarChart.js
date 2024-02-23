class StackedBarChart {
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
		this.labelTextSize = obj.labelTextSize
		this.labelPadding= obj.labelPadding;
		this.labelColour= obj.labelColour;
		this.labelRotation= obj.labelRotation;
		//this.numTicks = obj.numTicks		

		this.axisThickness = obj.axisThickness;
	}

	render() {
		push()

		// drawing the lines
		
		translate(this.xPos, this.yPos);
		noFill();
		stroke(this.axisLineColour);
		strokeWeight(this.axisThickness);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);

		// Drawing the bars:
		let numBars = this.data.length;
		//console.log(numBars)
		//console.log(this.barColour)

		let gap = (this.chartWidth - (numBars * this.barWidth))/(numBars +1);
		let scale = this.chartHeight/max(this.data.map(d=>d[this.yValue]))
		// console.log(scale)
		let labels = this.data.map(d => d[this.xValue]);

		let math = (((gap*numBars)+1)+(numBars*this.barWidth));
		//console.log(math);

		let numStacks = this.barSections.length;

		console.log(numStacks)

		//push()
//
		//for(let i=0; i<numBars; i++ ){
		//	translate(gap+this.barWidth, 0);
		//	fill(this.barColour[i])
		//	noStroke();
		//	rect(0,0, this.barWidth, -this.data[i][this.yValue]*scale);
		//	fill(this.labelColour)
        //    textSize(10);
        //    textAlign(LEFT, CENTER)
        //    push()
        //    translate(gap+this.barWidth/2,this.labelPadding);
//
        //    rotate(this.labelRotation)
        //    text(labels[i], 0, 0);
        //    pop()
        //    translate(gap+this.barWidth,0);
		//	//console.log(this.data[i][this.yValue])
		//}
//
		//pop()


        
        //console.log(scale);
        //console.log(labels)

        //console.log(this.yValue)

        // This loop draws the horizontal elements (bars and labels)

        push()
        translate(gap,0);
        for(let i=0; i<numBars; i++){
            fill(this.barColour)
            noStroke()
			push()
			for(let j=0; j<numStacks; j++){
				fill(this.barColour[j])
				rect (0,0,this.barWidth, -this.data[i][this.barSections[j]]);
				console.log(this.data[i])
				console.log([this.barSections[j]])
				console.log(this.data[i][this.barSections[j]])
				translate(0,-this.data[i][this.barSections[j]])
				//yOffset += barSections[j]; 
			}
			pop()
            //rect (0,0,this.barWidth, -this.data[i][this.yValue]);
            fill(this.labelColour)
            textSize(10);
            textAlign(LEFT, CENTER)
            push()
            translate(gap+this.barWidth/2,this.labelPadding);
            rotate(this.labelRotation)
            text(labels[i], 0, 0);
            pop()
            translate(gap+this.barWidth,0);
        }
        pop()

        //This draws the vertical elements

        let tickGap = this.chartHeight/5;
        let tickValue = max(this.data.map(d=>d[this.yValue]));

        for(let i=0; i<=5; i++){
            stroke('#fff');
			strokeWeight(this.axisThickness)
            line(0,-i*tickGap,-20,-i*tickGap);
			noStroke();
            textSize(10);
            textAlign(RIGHT, CENTER);
			fill(this.labelColour);
            text(tickValue*i, -20, -tickGap*i);

			

			//translate(0,tickGap);
        }

        
        pop ();

		//STACKED
		
		//draw rectangle, for each bar section, draw in a rectangle of the value,
		// translate to the top of that bar, draw another bar of value
		// ones all sections are done, translate the gap, then do it again

		//let bars = this.data.length;
		//let gap = (this.chartWidth - (bars * this.barWidth))/(bars +1);
		//let stacks = this.barSections.length
		////let barValue;
		//console.log(bars,gap)

		//push();
		//translate(gap, 0)
		//for(let i=0; i<bars; i++){
		//	
		//	push();
		//	for(let j=0; j<this.stacks; i++){
		//		fill("#000000")
		//		rect(0,0, this.barWidth, -this.data[i][this.barSections[j]])
		//		//console.log(this.barSections[j])
		//		//Translate to the top of that rectangle, draw another on top
		//		//translate(0,this.data[j][this.yValue],this.barWidth,this.data[j][this.yValue])
		//	}
		//	pop();

		//	translate(gap+this.barWidth, 0)
		//	//rect(0,0, this.barWidth, -20)
		//	console.log(stacks)
		//	//console.log(bars)
		//}

		//pop();

		//this.drawHAxis();
		//this.drawVAxis();


	}

	//drawHAxis(){
	//	line(0,0, this.chartWidth, 0);
	//}

	//drawVAxis(){
	//	line(0,0,0,-this.chartHeight);
	//}
//

}
