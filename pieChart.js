class PieChart{

    constructor(obj) {
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
    this.diameter = obj.diameter;
		this.sliceColour = obj.sliceColour;
		this.labelTextSize = obj.labelTextSize
		this.labelColour= obj.labelColour;
	}

    render(){
        let slices = this.yValue.length
        let sums = []
        let numRows = this.data.length;
        let total = 0;

        for(let i=0;i<slices; i++){
          let sum = 0;
            for(let j=0;j<numRows; j++){
              let value = parseFloat(this.data[j][this.yValue[i]]);
              sum += value;             
            }
            sums.push(sum)
            total+=sums[i]
        }

        let angles = [];

        for(let i=0; i<sums.length; i++){
          let angle = 0;
          angle = (sums[i]/total)*360;
          angles.push(angle)
        }

        let percents = []

        for(let i=0; i<sums.length; i++){
          let percent = 0;
          percent = ((angles[i]/360)*100);
          percents.push(percent)
          console.log(percents)
        }

        translate(this.xPos,this.yPos)

        for(let i=0; i<this.yValue.length; i++){
          //numbers are hard coded to relevant positions 
          noStroke();
          fill(this.labelColour)
          textSize(this.labelTextSize);
          textAlign(RIGHT, CENTER)
          text(this.yValue[i], -210, -40*i)
          textAlign(LEFT, CENTER)
          text(parseInt(percents[i])+"%", -170 , -40*i)
          textAlign(CENTER)
          textSize(this.labelTextSize)
          text("TOTAL", 0, -140)
          fill(this.sliceColour[i]);
          rect(-200,(-40*i)-10,20,20)
    
        }
        
        const pieChart = (diameter, data) => {
          let lastAngle = 0;
          for (let i = 0; i < data.length; i++) {
            fill(this.sliceColour[i]);
            arc(
              0,
              0,
              diameter,
              diameter,
              lastAngle,
              lastAngle + radians(data[i])
            );
            lastAngle += radians(data[i]);
          }
        }
        pieChart(this.diameter, angles);

    }
}