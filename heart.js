function heartTool()
{
	//set an icon and a name for the object
	this.icon = "assets/heart.jpg";
	this.name = "heart";

	this.draw = function()
    {
        if (mouseIsPressed)
        {
            cursor(HAND);
            strokeWeight(30);
            stroke(255,255,255,50);
            ellipse(mouseX, mouseY, 60, 50);
            ellipse(mouseX + 20, mouseY - 20, 40, 60);
            ellipse(mouseX - 20, mouseY - 20, 40, 60)
        }
    }
}