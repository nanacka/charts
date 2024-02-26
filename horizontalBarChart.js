class HorizontalBarChart {
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
		this.labelRotation= obj.labelRotation
		this.titleTextSize = obj.titleTextSize;		
		this.numTicks = obj.numTicks		
		this.axisThickness=obj.axisThickness
	}

    render() {
		push()

		translate(this.xPos, this.yPos);

		fill(this.labelColour)
		textSize(this.titleTextSize);
		textAlign(LEFT, CENTER)
		text(this.yValue, 0, -this.labelPadding)

		noFill();
		stroke(this.axisLineColour);
		strokeWeight(this.axisThickness);

		line(0, 0, 0, this.chartHeight);
		line(0, 0, this.chartWidth, 0);

		let numBars = this.data.length;
		let gap = (this.chartHeight - (numBars * this.barWidth))/(numBars +1);
		let scale = this.chartHeight/max(this.data.map(d=>d[this.yValue]))
		let labels = this.data.map(d => d[this.xValue]);

        push()
        translate(0, gap);
		
        for(let i=0; i<numBars; i++){
			
            fill(this.barColour[i])
            noStroke()
            rect (0,0, this.data[i][this.yValue]*scale, this.barWidth);
            fill(this.labelColour)

            textSize(10);
            textAlign(LEFT, CENTER)
            push()
            translate(-this.labelPadding,gap+this.barWidth/2);
            text(labels[i], 0, 0);
            pop()
            translate(0,gap+this.barWidth);
        }
        pop()

        let tickGap = this.chartHeight/this.numTicks;
        let tickValue = max(this.data.map(d=>d[this.yValue]));

        for(let i=0; i<=this.numTicks; i++){			
			stroke('#fff');
			strokeWeight(this.axisThickness)			
            line(i*tickGap,0, i*tickGap, -20);

			noStroke();
            textSize(10);
            textAlign( CENTER);
			fill(this.labelColour);
            text(tickValue*i, tickGap*i, -20);
        }     
        pop ();
	}

}