function rabbitTool()
{
	this.icon = "assets/rabbit.jpg";
	this.name = "rabbitTool";

    this.draw = function()
    {
           if (mouseIsPressed)
        {
            noStroke();
            //Rabbit drawing
            //Body
            fill(139, 69, 19);
            ellipse(mouseX, mouseY-37, 40, 70);
            //Legs
            ellipse(mouseX-10, mouseY-5, 25, 15);
            ellipse(mouseX+10, mouseY-5, 25, 15);
            //Arms
            ellipse(mouseX+10, mouseY-30, 30, 15);
            ellipse(mouseX-10, mouseY-30, 30, 15);
            //Ears
            triangle(mouseX-20, mouseY-77, mouseX-15, mouseY-50, mouseX+10, mouseY-50);
            triangle(mouseX+20, mouseY-77, mouseX+15, mouseY-50, mouseX-10, mouseY-50);
            //Eyes
            fill(0);
            ellipse(mouseX+8, mouseY-50, 5, 7);
            ellipse(mouseX-8, mouseY-50, 5, 7);
            //Nose
            triangle(mouseX-6, mouseY-45, mouseX, mouseY-35, mouseX+6, mouseY-45);
            stroke(0);
            line(mouseX+8, mouseY-35, mouseX-8, mouseY-35);
            //Teeth
            fill(255);
            stroke(255);
            rect(mouseX-5, mouseY-34, 5, 7);
            rect(mouseX, mouseY-34, 5, 7);
            stroke(0);
            line(mouseX, mouseY-35, mouseX, mouseY-27);
   
        }
    }
}