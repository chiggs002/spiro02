let Rad,rad;
let increase;
let m;
let numberSpiro;
let spirographs = [];
let istepR;
let istepG;
let istepB;

let inoiseR;
let inoiseG;
let inoiseB;
		


//let balls = [];


////.colour
//float r=222;
//float g=12;
//float b=23;



function  setup() {
	istepR= int(random(2367));
	istepG= int(random(3412));
	istepB= int(random (6767));
	print("istepR =",istepR,"istepG =",istepG,"istepB =",istepB,);

	inoiseR=noise(istepR);
	inoiseG=noise(istepG);
	inoiseB=noise(istepB);
	print("inoiseR =",inoiseR,"inoiseG =",inoiseG,"inoiseB =",inoiseB,);
    //size(800,800);
    createCanvas(800, 800);
    //fullscreen()
    background(0);
  
    numberSpiro =4;
    //spirographs = new ArrayList<Spirograph>();

   //setup dark followers
    for (let i = 0; i < numberSpiro; i++) {
        spirographs.push(new Spirograph(i,numberSpiro));
    }
  
    print("spirographs.size() =",spirographs.length);
  
  
  
    increase = 0;
    m=0.5;
  
    frameRate(400);
  
    colorMode(HSB, 360, 100, 20);
    
  // RANDOMLY GENERATE R,G,B, SCALE FACTORS BETWEEN 0-1
 
} //setupend


function draw(){
  
    background(0);
	 //spirogrpah varaibles
    Rad = map(mouseY,0,height,50,height/2);
    rad = map(mouseX,0,width,20,width/2);
    //print(" Rad = ", Rad," rad = ", rad);
    //  m =
//print("draw spirogrphs");
    //SPRIO ONLY
    for (let i = 0; i < spirographs.length; i++) {
			//print("draw spirogrphs");
         // Create a temporary arraylist to hold values of each particle class
         //Spirograph v = spirographs.get(i);
			 // spirographs[i].myPrint();
        spirographs[i].spiroGrapgh2(Rad,rad,m,increase);
        spirographs[i].changecolor();
         // spiroGrapgh2(Rad,rad,m,increase);
         // changecolor();

     }// for

    // INCREASE ROTATION VALUE
    increase += 0.004;
	
   
	
}//draw




//class Spirograph {

 
//int stepR;
//int stepG;
//int stepB;
 
// float r=222;
//float g=12;
//float b=23;
  
  
//int rb=1;
//int bb=1;
//int gb=1;

//float noiseR;
//float noiseG;
//float noiseB;
//float scaleFact;
//float sep=0.0;

//float scaleStart = 0;


//float _strokeCol = 254;
//int _strokeChange = 1;
  
// float increase;
// int circBase=100;
// float myOffset,myNumber;
// float totalOffset;
// float myalpha;
  
  function Spirograph ( offset, number) {
     this.r=222;
     this.g=12;
     this.b=23;
		 this.rb=1;
     this.bb=1;
     this.gb=1;

		
     this.scaleFact =100;
  
//      this.stepR= int(random(2367));
//      this.stepG= int(random(3412));
//      this.stepB= int(random (6767));

//      this.noiseR=noise(this.stepR);
//      this.noiseG=noise(this.stepG);
//      this.noiseB=noise(this.stepB);
		
	 this.stepR= istepR;
     this.stepG= istepG;
     this.stepB= istepB;

     this.noiseR=inoiseR;
     this.noiseG=inoiseG;
     this.noiseB=inoiseB;
  
     this.myOffset= offset;
     this.myNumber= number;
     this.totalOffset = offset * 20;
     this.myalpha = 1-(offset +1)/number+ (1/number);
     //print ("myNumber=",this.myNumber,"0ffset =",this.offset,"totalOffset = ",this.totalOffset ,"myalpha =",this.myalpha);

  

     this.myPrint =   function() {
	   print("------------------------MY PRINT TESTS,,,,,,");
	
     }















//
 // this.update = function() {
   
   
this.spiroGrapgh2 =   function(iR,ir,im,iincrem) {
    this.R = iR;
    this.rad = ir;
    this.m = im;
    this.increm = iincrem;
	  //print("...............................SPIROGRAPH 2");
     
    //void spiroGrapgh2(float R,float r,float m,float increm){
    //spirogrpah varaibles
    //float x,y,l ;
    //float angle;
    //float ratio;

    //pushMatrix();
    push();
 
    // println("myalpha=",myalpha);
    //translate(width/2 + totalOffset  ,height/2);
    translate(width/2   ,height/2);
    rotate(this.increm*this.myalpha*5);
    smooth();
    //fill(4,1);
    // SET THE STROKE COLOR CONTINOUSLY
		//print("====================RGB = ",int(this.r),int(this.g),int(this.b));
    stroke(this.r, this.g, this.b, 255 *this.myalpha);
    fill(this.r,this.g,this.b,255*this.myalpha);
  
    //stroke(0);
    strokeWeight(1);
    noFill();
    beginShape();
    //background(255);

    // equations
    //  ratio = (R-r)/r

    this.ratio = (this.R-this.rad)/this.rad;
    this.l = this.rad*this.m;
    //angle = increm;
 
    this.circDiv= map(this.R,0,height,14,20);
 
	  //LOOP 
	
    for(let i=0;i<this.circDiv*PI;i+= (PI/105)) {
        this.angle = i;
  			//print("this.x=",this.x,"this.y=",this.y);
        //vertex((50+20*noise(i,ameobaNoiseY))*cos(i),(50+20*noise(i,ameobaNoiseY))*sin(i));
        this.x = (this.R-this.rad) * cos(this.angle) + this.l * cos( this.ratio * this.angle);
        this.y = (this.R-this.rad) * sin(this.angle) -  this.l * sin( this.ratio * this.angle);
        ellipse(this.x,this.y,10,10);
				
    } //end for



    //endShape();
    //endShape(CLOSE);
    pop();




}///spiro2









//void spiroGrapgh1(float R,float r,float m,float increm){
////spirogrpah varaibles
//float x,y,l ;
//float angle;
//float ratio;
this.spiroGrapgh1 =   function(iR,ir,im,iincrem) {
    this.R = iR;
    this.rad = ir;
    this.m = im;
    this.increm = iincrem;


    push();
    translate(width/2 + this.totalOffset,height/2);
    smooth();
    //fill(4,1);
    //stroke(0);
    // SET THE STROKE COLOR CONTINOUSLY
    stroke(this.r, this.g, this.b, 100*this.myalpha);
    fill(this.r,this.g,this.b,255*this.myalpha);
  
    strokeWeight(1);
    //noFill();
    beginShape();
    //background(255);

    // equations
    //  ratio = (R-r)/r

    this.ratio = (this.R-this.rad)/this.rad;
    this.l = this.r*this.m;
    this.angle = this.increm;
 
 
 
    //  x(angle) = (R-r) * cos(angle) + m * cos( ratio * angle)

    this.x = (this.R-this.rad) * cos(this.angle) + this.l * cos( this.ratio * this.angle);
    this.y = (this.R-this.rad) * sin(this.angle) -  this.l * sin( this.ratio * this.angle);

    //  y(angle) = (R-r) * sin(angle) -  m * sin( ratio * angle)


    vertex(x,y);
 


    endShape();
    //endShape(CLOSE);


    pop();


}///spiro1 class






 //this.spiroGrapgh1 =   function(iR,ir,im,iincrem) {
		//
		//
		//  spirographs[i].changecolor();
this.changecolor  = function() {
//void changecolor (){
    // CHANGE COLSTROKE OVER TIME
  	//print("CHNge color");
	  this.r-=this.noiseR*this.rb;
    this.g-=this.noiseG*this.gb;
    this.b-=this.noiseB*this.bb;
	
  
    // IF RGB VALUES GO OUT OF RANGE COUNT IN REVERSE AND RESET RGB SCALE FACTOR VALUE
    if ((this.r<3) ||  (this.r>253)){
        this.scaleFact=random(90,120);

        this.rb*=-1;
        this.stepR= int(random(2367));
        this.noiseR=noise(this.stepR);
    
    }
  
    if ((this.g<3) ||  (this.g>253)) {
        this.scaleFact=random(100,120);

        this.gb*=-1;
        this.stepG= int(random(1367));
        this.noiseG=noise(this.stepG);
    }
  
    if ((this.b<3) ||  (this.b>253)){
        this.scaleFact=random(90,110);

        this.bb*=-1;
        this.stepB= int(random(1367));
        this.noiseB=noise(this.stepB);
     }
  
 //println("r,g,b,alpha");
 //println(r,g,b,myalpha);
  // println("noiseR,noiseG,noiseB");
  // println(noiseR,noiseG,noiseB);
  
  
  } //colorchnage
  
  

}//end class