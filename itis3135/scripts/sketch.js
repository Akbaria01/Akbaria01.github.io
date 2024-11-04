let angle;

function setup() {
    createCanvas(710, 400);
    colorMode(HSB);  
    angleMode(DEGREES);  
}

function draw() {
    background(0);  

   
    angle = (mouseX / width) * 180; 
    angle = constrain(angle, 0, 180); 
    let oppositeAngle = 180 - angle; 

 
    push();
    translate(width / 3, height);  
    stroke(0, 255, 255); 
    line(0, 0, 0, -120); 
    translate(0, -120);
    branch(120, 0, angle); 
    pop();

   
    push();
    translate((2 * width) / 3, height);  
    stroke(0, 255, 255); 
    line(0, 0, 0, -120);
    translate(0, -120);
    branch(120, 0, oppositeAngle); 
    pop();
}

function branch(h, level, angle) {
    stroke(level * 25, 255, 255); 
    h *= 0.66; 

    if (h > 2) { 
        push();           
        rotate(angle); 
        line(0, 0, 0, -h); 
        translate(0, -h); 
        branch(h, level + 1, angle); 
        pop();            

        push();          
        rotate(-angle); 
        line(0, 0, 0, -h);
        translate(0, -h);
        branch(h, level + 1, angle); 
        pop();
    }
}