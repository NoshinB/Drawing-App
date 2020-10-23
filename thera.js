function therapyTool()
{
    this.icon = "assets/thera.jpg";
	this.name = "therapyTool";
    
//selecting colour
//Displays and handles the colour palette.
function ColourP(){
	//a list of web colour strings
	this.colours2 = ["black", "silver", "gray", "white", "maroon", "red", "purple", "orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];
	//make the start colour be black
	this.selectedColour2 = "black";

	//load in the colours 
	this.loadColours2 = function(){
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours2[0]);
		stroke(this.colours2[0]);

		//for each colour create a new div in the html for the colourSwatches
		for(var i = 0; i < this.colours2.length; i++){
			var colourID2 = this.colours2[i] + "Swatch";
			var colourHTML2 = "<div class='colourSwatches' id='"+ colourID2 + "'></div>";
			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			$(".colourPalette2").append(colourHTML2);
			$("#" + colourID2).css("background-color", this.colours2[i]);
		}

		$(".colourSwatches").first().css("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();

var self = this;
//handle clicks on the colours.
$(".colourPalette2").on("click", ".colourSwatches", function(){
  //get the colour string back from the id
  var id = $(this).attr("id");
  var d = split(id, "Swatch")[0];
    
  //set the selected colour and the fill
    fill (d)
   });
}


    this.draw = function()
    {   strokeWeight(5);
        //draw outline image
        stroke(0);
        ellipse(377, 169, 55, 55);
        ellipse(340, 210, 55, 55);
        ellipse(414, 210, 55, 55);
        ellipse(377, 250, 55, 55);
        ellipse(377, 315, 70, 30);
        ellipse(377, 210, 30, 30);
        rect(365, 275, 20, 150);
        ellipse(150, 169, 55, 55);
        ellipse(113, 210, 55, 55);
        ellipse(187, 210, 55, 55);
        ellipse(150, 250, 55, 55);
        ellipse(150, 315, 70, 30);
        ellipse(150, 210, 30, 30);
        rect(138, 275, 20, 150);
    }
}