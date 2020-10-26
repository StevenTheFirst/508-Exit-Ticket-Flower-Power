function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

function draw() {
    
    // Using the random function:
    // Modify these variables to choose a random color! 
    var r = random(0,255);
    var g = random(0, 100); 
    var b = random (0,35);

    //Using the color function:
    //Create a random color using your red, green and blue values 
    var randomColor= color(r,g,b);
    
    
    // Change the parameter to your randomColor!
    fill(randomColor);
    
    // Using the random function:
    // Modify this variable to choose a random color!    
    var petalSize=random(r,g);

    // Change the parameter to your petalSize! 
    drawFlower(petalSize);

}

// function draws a flower of size "petalSize" pixels in a random location. 
function drawFlower(petalSize) {
    var flowerCenterX = random(width);
    var flowerCenterY = random(height);
    ellipse(flowerCenterX - petalSize / 2, flowerCenterY - petalSize / 2, petalSize, petalSize);
    ellipse(flowerCenterX + petalSize / 2, flowerCenterY - petalSize / 2, petalSize, petalSize);
    ellipse(flowerCenterX - petalSize / 2, flowerCenterY + petalSize / 2, petalSize, petalSize);
    ellipse(flowerCenterX + petalSize / 2, flowerCenterY + petalSize / 2, petalSize, petalSize);
    fill("yellow");
    ellipse(flowerCenterX, flowerCenterY, petalSize, petalSize);

}
