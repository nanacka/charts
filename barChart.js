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
		this.labelTextSize = obj.labelTextSize
		this.labelPadding= obj.labelPadding;
		this.labelColour= obj.labelColour;
		this.labelRotation= obj.labelRotation;
		this.numTicks = obj.numTicks;
		this.titleTextSize = obj.titleTextSize;		
		this.axisThickness = obj.axisThickness;
	}

	render() {
		push()
		translate(this.xPos, this.yPos);
		fill(this.labelColour)
		textSize(this.titleTextSize);
		textAlign(LEFT, CENTER)
		text(this.yValue, 0, -(this.chartHeight+this.labelPadding))
		noFill();
		stroke(this.axisLineColour);
		strokeWeight(this.axisThickness);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);

		// Drawing the bars:
		let numBars = this.data.length;
		let gap = (this.chartWidth - (numBars * this.barWidth))/(numBars +1);
		let scale = this.chartHeight/max(this.data.map(d=>d[this.yValue]))
		let labels = this.data.map(d => d[this.xValue]);

        // This loop draws the horizontal elements (bars and labels)

        push()
        translate(gap,0);
        for(let i=0; i<numBars; i++){
            fill(this.barColour[i % this.barColour.length])
            noStroke()
            rect (0,0,this.barWidth, -this.data[i][this.yValue]*scale);
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

        let tickGap = this.chartHeight/this.numTicks;
        let tickValue = max(this.data.map(d=>d[this.yValue]));
		let tickValueIncrement = tickValue / this.numTicks;

        for(let i=0; i<=this.numTicks; i++){
            stroke('#fff');
			strokeWeight(this.axisThickness)
            line(0,-i*tickGap,-20,-i*tickGap);
			noStroke();
            textSize(10);
            textAlign(RIGHT, CENTER);
			fill(this.labelColour);
            text(parseInt(tickValueIncrement * i), -20, -tickGap*i);
			
        }    
        pop ();

	}

}
