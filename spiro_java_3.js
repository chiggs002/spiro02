//
//  ratio = (R-r)/r
//  x(angle) = (R-r) * cos(angle) + m * cos( ratio * angle)
//  y(angle) = (R-r) * sin(angle) -  m * sin( ratio * angle)
//











//spirogrpah varaibles
var x,y;
var Rad,rad;
var increase;
var ratio;
var m;

// color chnage 

var r=222;
var g=12;
var b=23;
var rb=1;
var bb=1;
var gb=1;

var stepR;
var stepG;
var stepB;

var noiseR;
var noiseG;
var scaleFact;
var sep=0.0;





function  setup() {
	
	
  
	
  //cresize(800,800);
	//createCanvas(800,800);
	  createCanvas(windowWidth, windowHeight);
  background(0);
  increase = 0;
  m=0.5;
  
  frameRate(400);
  
  colorMode(HSB, 360, 100, 20);
    
// RANDOMLY GENERATE R,G,B, SCALE FACTORS BETWEEN 0-1
  stepR= int(random(2367));
  stepG= int(random(3412));
  stepB= int(random (6767));

  noiseR=noise(stepR);
  noiseG=noise(stepG);
  noiseB=noise(stepB);
}

function draw(){
	 push();
	 s = "Move the mouse l-to-r and/or drag up or down.\nPress the ' R ' or ' r ' key to clear the screen";
   fill(255,255);
   textSize(15);
   text(s, 30, 30, 200, 280); 
   pop();
  r-=noiseR*rb*0.4;
  g-=noiseG*gb*0.4;
  b-=noiseB*bb*0.4;
  
  // IF RGB VALUES GO OUT OF RANGE COUNT IN REVERSE AND RESET RGB SCALE FACTOR VALUE
  if ((r<3) ||  (r>253)){
    scaleFact=random(90,120);

    rb*=-1;
    stepR= int(random(2367));
    noiseR=noise(stepR);
    
  }
  
  if ((g<3) ||  (g>253)) {
    scaleFact=random(100,120);

    gb*=-1;
    stepG= int(random(1367));
    noiseG=noise(stepG);
  }
  
  if ((b<3) ||  (b>253)){
    scaleFact=random(90,110);

    bb*=-1;
    stepB= int(random(1367));
    noiseB=noise(stepB);
  }
 
  
  
  
  
    // SET THE STROKE COLOR CONTINOUSLY
  stroke(r, g, b, 20);
  fill(r,g,b,100);
  
  
//spirogrpah varaibles

 Rad = map(mouseY,0,height,50,height/2);
 rad = map(mouseX,0,width,20,width/2);

  
  
  
  //SPRIO ONLY
 
spiroGrapgh1(Rad,rad,m,increase);
spiroGrapgh2(Rad,rad,m,increase);

 
  // INCREASE ROTATION VALUE
  increase += 0.01;
}//draw












function spiroGrapgh2(R,r,m,increm){
//spirogrpah varaibles
var x,y,l ;
var angle;
var ratio;

push();
 
translate(width/2,height/2);
smooth();
//fill(4,1);
//stroke(0);
strokeWeight(0.1);
//noFill();
beginShape();
//background(255);

// equations
//  ratio = (R-r)/r

 ratio = (R-r)/r;
 l = r*m;
//angle = increm;
 
 var circDiv= map(R,0,height/2,20,40);
 
for(var i=0;i<circDiv*PI;i+= (PI/105)) {
      angle = i;
  
     //vertex((50+20*noise(i,ameobaNoiseY))*cos(i),(50+20*noise(i,ameobaNoiseY))*sin(i));
      x = (R-r) * cos(angle) +  l * cos( ratio * angle);
      y = (R-r) * sin(angle) -  l * sin( ratio * angle);
      ellipse(x,y,1,1);

} //end for



//endShape();
//endShape(CLOSE);
pop();




}///spiro2















function spiroGrapgh1(R,r,m,increm){
//spirogrpah varaibles
var x,y,l ;
var angle;
var ratio;


 push();
translate(width/2,height/2);
smooth();
fill(4,1,12,12);
//stroke(0);
strokeWeight(0.01);
//noFill();
beginShape();
//background(255);

// equations
//  ratio = (R-r)/r

 ratio = (R-r)/r;
 l = r*m;
 angle = increm;
 
 
 
//  x(angle) = (R-r) * cos(angle) + m * cos( ratio * angle)

x = (R-r) * cos(angle) +  l * cos( ratio * angle);
y = (R-r) * sin(angle) -  l * sin( ratio * angle);

//  y(angle) = (R-r) * sin(angle) -  m * sin( ratio * angle)


vertex(x,y);
 


endShape();
//endShape(CLOSE);


 pop();


}///spiro1




















function keyPressed() {
  if (key=='z') {
     m = map(mouseX,0,width,0,1);
     println ("m = ",m);
  }
  
  if (key=='r') {
  background(000);  
  }
  
  if (key=='R') {
  background(000);  
  }
  
  
   if (key=='s') {
      saveFrame("spiro06I_######.png");
    
  }
  
  
  
  sep+=-5.0;
  //println("sep ",sep);
}




























