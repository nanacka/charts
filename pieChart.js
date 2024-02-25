class PieChart{

    constructor(obj) {
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		//this.chartWidth = obj.chartWidth;
		//this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		//this.axisLineColour = obj.axisLineColour;
		//this.barWidth = obj.barWidth;
		//this.barColour = obj.barColour;
		//this.barSections= obj.barSections;
		//this.labelTextSize = obj.labelTextSize
		//this.labelPadding= obj.labelPadding;
		//this.labelColour= obj.labelColour;
		//this.labelRotation= obj.labelRotation;
		//this.numTicks = obj.numTicks		

		//this.axisThickness = obj.axisThickness;
	}

    render(){

        let slices = this.yValue.length
        let totals =[]
        let sliceValue = []
        let sums = []

        console.log(this.yValue[0].length)
        console.log(this.yValue.length)
        console.log(this.yValue)
        console.log(this.yValue[0])

        console.log(this.data.length)

        let numRows = this.data.length;
        // i want to get the sums of each of the columns,
        //go through each column, add the value to a sum
        // make them a percentage of 360


        for(let i=0;i<slices; i++){

            for(let j=0;j<numRows; j++){
                
              sliceValue.push(this.data[i][this.yValue[j]])
              //sums+= sliceValue[j]
              console.log(sliceValue)
            }

        }




        let angles = [30, 10, 45, 35, 60, 38, 75, 67];

        //function setup() {
        //  
        //  noStroke();
        //  noLoop(); // Run once and stop
        //}

        //function draw() {
          translate(this.xPos,this.yPos)
          pieChart(300, angles);
        //}

        function pieChart(diameter, data) {
          let lastAngle = 0;
          for (let i = 0; i < data.length; i++) {
            let gray = map(i, 0, data.length, 0, 255);
            fill(gray);
            arc(
              width / 2,
              height / 2,
              diameter,
              diameter,
              lastAngle,
              lastAngle + radians(angles[i])
            );
            lastAngle += radians(angles[i]);
          }
        }
    }
}