var num1,num2;
var b1,b2,b3,b4;
var n1,n2;

function setup() {
  createCanvas(400,400);

  num1 = createInput();
  num1.position(5,60);

  num2 = createInput();
  num2.position(200,60);

  b1 = createButton("ADD");
  b1.position(10,200);
  b1.mouseClicked(addition);

  b2 = createButton("SUBTRACT");
  b2.position(100,200);
  b2.mouseClicked(subtraction);

  b3 = createButton("MULTIPLY");
  b3.position(200,200);
  b3.mouseClicked(multiplication);

  b4 = createButton("DIVIDE");
  b4.position(300,200);
  b4.mouseClicked(division);
}

function draw() 
{
  background(30);

  text("num1",70,50);
  text("num2",270,50);

  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());

}

function addition(){
  console.log(n1 + n2);
}

function subtraction(){
  console.log(n1 - n2);
} 

function multiplication(){
  console.log(n1 * n2);
}

function division(){
  console.log(n1/n2);
}


