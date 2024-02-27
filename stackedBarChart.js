class StackedBarChart {
	constructor(obj) {
		this.data = obj.data;
		this.xValue = obj.xValue;
		this.yValue= obj.yValue;
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		this.axisLineColour = obj.axisLineColour;
		this.barWidth = obj.barWidth;
		this.barColour = obj.barColour;
		this.labelTextSize = obj.labelTextSize
		this.labelPadding= obj.labelPadding;
		this.labelColour= obj.labelColour;
		this.labelRotation= obj.labelRotation;
		this.numTicks = obj.numTicks		
		this.axisThickness = obj.axisThickness;
	}

	render() {
		push()

		translate(this.xPos, this.yPos);
		for(let i=0; i<this.yValue.length; i++){
			noStroke()
			fill(this.labelColour)
            textSize(10);
            textAlign(RIGHT, CENTER)
			text(this.yValue[i], -80, -40*i)
			fill(this.barColour[i])
			rect(-70,(-40*i)-10,20,20)

		}
		noFill();
		stroke(this.axisLineColour);
		strokeWeight(this.axisThickness);


		let numBars = this.data.length;

		let gap = (this.chartWidth - (numBars * this.barWidth))/(numBars +1);

		let labels = this.data.map(d => d[this.xValue]);
		let numStacks = this.yValue.length;


        push()
        translate(gap,0);
        for(let i=0; i<numBars; i++){
            fill(this.barColour)
            noStroke()
			push()
			for(let j=0; j<numStacks; j++){
				let barValue = (this.data[i][this.yValue[j]])*2
				fill(this.barColour[j])
				rect (0,0,this.barWidth, -barValue);
				translate(0,-barValue)
			}
			pop()
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

		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);

        let tickValue = max(this.numTicks);
        let tickGap = (this.numTicks*2);
        for(let i=0; i<=this.numTicks; i++){
            stroke('#fff');
			strokeWeight(this.axisThickness)
            line(0,-i*tickGap,-10,-i*tickGap);
			noStroke();
            textSize(10);
            textAlign(RIGHT, CENTER);
			fill(this.labelColour);
            text(tickValue*i, -10, -tickGap*i);
        }     
        pop ();


	}
}
