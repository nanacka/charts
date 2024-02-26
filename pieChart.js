class PieChart{

    constructor(obj) {
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
    this.diameter = obj.diameter;
		//this.axisLineColour = obj.axisLineColour;
		//this.Colour = obj.Colour;
		//this.labelTextSize = obj.labelTextSize
		//this.labelPadding= obj.labelPadding;
		//this.labelColour= obj.labelColour;
		//this.axisThickness = obj.axisThickness;
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

        for(let k=0; k<sums.length; k++){
          let angle = 0;
          angle = (sums[k]/total)*360;
          angles.push(angle)
        }


        let percents = []

        for(let k=0; k<sums.length; k++){
          let percent = 0;
          percent = ((angles[k]/360)*100)+"%";
          percents.push(percent)
          console.log(percents)
        }


        translate(this.xPos,this.yPos)

        for(let i=0; i<this.yValue.length; i++){
          fill("#000000")
          textSize(10);
          textAlign(RIGHT, CENTER)
          text(this.yValue[i], -50, -40*i)
          let gray = map(i, 0, this.yValue.length, 0, 255);
          fill(gray);
          rect(-40,(-40*i)-10,20,20)
          textAlign(LEFT, CENTER)
          text(percents[i], -10 , -40*i)
    
        }
        
        pieChart(this.diameter, angles);


        function pieChart(diameter, data) {
          let lastAngle = 0;
          for (let i = 0; i < data.length; i++) {
            let gray = map(i, 0, data.length, 0, 255);
            fill(gray);
            arc(
              width / 10,
              height / 10,
              diameter,
              diameter,
              lastAngle,
              lastAngle + radians(data[i])
            );
            lastAngle += radians(data[i]);
          }
        }

    }
}