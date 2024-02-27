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
        console.log(this.yValue[0].length)
        console.log(this.yValue.length)
        console.log(this.yValue)
        console.log(this.yValue[0])
        console.log(this.data.length)
        let numRows = this.data.length;
        let total = 0;

        for(let i=0;i<slices; i++){
          let sum = 0;
            for(let j=0;j<numRows; j++){
              //converts the string value into a float
              let value = parseFloat(this.data[j][this.yValue[i]]);
              sum += value;
              console.log(sum)
              
            }
            sums.push(sum)
            console.log(sums)
            total+=sums[i]
            console.log(total)
        }

        let angles = [];

        for(let i=0; i<sums.length; i++){
          let angle = 0;
          angle = (sums[i]/total)*360;
          angles.push(angle)
        }
        console.log(this.sliceColour)

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
          textSize(10);
          textAlign(RIGHT, CENTER)
          text(this.yValue[i], -210, -40*i)
          //let gray = map(i, 0, this.yValue.length, 0, 255);
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
            let gray = map(i, 0, data.length, 0, 255);
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