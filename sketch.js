var input, heading;

function setup() {
  
  createCanvas(300, 200);
  background(178,255,102);
  
  input = createInput();
  input.position(5, 60);

  heading = createElement('h4', 'Enter any alphabet:');
  heading.position(10, 10);
    
  textAlign(CENTER);
  textSize(50);
}

function draw() {

  var value = input.value();
  switch (value) {
      
    case 'a':
      console.log("Vowel");
      background("black")
      break;
      
    case 'e':
      console.log("Vowel");
      background("red")
      break;
      
    case 'i':
      console.log("Vowel");
      background("green")
      break;
      
    case 'o':
      console.log("Vowel");  
      background("purple")
      break;
      
    case 'u':
      console.log("Vowel");
      background("orange")  
      break;
      
    default:
      console.log("Please enter any character"); 
      background("white") 
  }
}


