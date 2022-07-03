//set up variables and runner1 array
var i;
let runner1 = new Array(21);
var runnerPos = 0;
var rand = 0;

//set up variables and runner2 array
var a;
let runner2 = new Array(21);
var runnerPos2 = 0;
var rand2 = 0;

//set up variables and runner3 array
var b;
let runner3 = new Array(21);
var runnerPos3 = 0;
var rand3 = 0;

//set up variables and runner4 array
var c;
let runner4 = new Array(21);
var runnerPos4 = 0;
var rand4 = 0;


//Places the R at the beginning position of the array
runner1[0] = "R";   
runner2[0] = "R";
runner3[0] = "R";
runner4[0] = "R";

//Sets the rest of the array to dashes
for(i = 1; i < 22; i++)  
{
    runner1[i] = "-";
}

for(a = 1; a < 22; a++)  
{
    runner2[a] = "-";
}

for(b = 1; b < 22; b++)  
{
    runner3[b] = "-";
}

for(c = 1; c < 22; c++)  
{
    runner4[c] = "-";
}

//writes the initial version of the array to the window with R in position 0
document.getElementById("racestatus").innerHTML += "Runner 1: " 

for(i=0; i<runner1.length; i++){
  document.getElementById("racestatus").innerHTML += runner1[i];
  }
  document.getElementById("racestatus").innerHTML += "<br>"

document.getElementById("racestatus").innerHTML += "Runner 2: "

for(a=0; a<runner2.length; a++){
  document.getElementById("racestatus").innerHTML += runner2[a];
  }
  document.getElementById("racestatus").innerHTML += "<br>"

document.getElementById("racestatus").innerHTML += "Runner 3: "

for(b=0; b<runner3.length; b++){
  document.getElementById("racestatus").innerHTML += runner3[b];
  }
  document.getElementById("racestatus").innerHTML += "<br>"

document.getElementById("racestatus").innerHTML += "Runner 4: "

for(c=0; c<runner4.length; c++){
  document.getElementById("racestatus").innerHTML += runner4[c];
  }
  document.getElementById("racestatus").innerHTML += "<br>"+"<br>"

/*Function that will start the first time the enter key is pressed
This will move the R to the next posistion when rand =0 and change prior position back to -.  It also advances the runner position counter each time the R moves forward.  Finally, it prints the new runner line to the window. All this is repeated until the runner position reaches 21.*/
function checkKeyPress(key) {
  if(key.keyCode == "13")
    {       
      rand = Math.floor(Math.random() * 2); //50% chance
      if (rand == 0) 
          {
          runner1[runnerPos+1] = "R";
          runner1[runnerPos] = "-";
          runnerPos++;
          //print the array after R is moved
          document.getElementById("racestatus").innerHTML += "Runner 1: "
          for(i=0; i<runner1.length; i++){
            document.getElementById("racestatus").innerHTML += runner1[i]; 
            } 
            document.getElementById("racestatus").innerHTML += "<br>"
            //document.getElementById("racestatus").innerHTML = runnerPos.value;
          }
          else{
          //even if the runner did not advance (rand=1), the array should print
          document.getElementById("racestatus").innerHTML += "Runner 1: "
          for(i=0; i<runner1.length; i++){
           
            document.getElementById("racestatus").innerHTML += runner1[i];
            };
          //document.getElementById("racestatus").innerHTML = runnerPos.value;
            document.getElementById("racestatus").innerHTML += "<br>"
          }  

      rand2 = Math.floor(Math.random() * 2); //50% chance
      if (rand2 == 0) 
          {
          runner2[runnerPos2+1] = "R";
          runner2[runnerPos2] = "-";
          runnerPos2++;
          //print the array after R is moved
          document.getElementById("racestatus").innerHTML += "Runner 2: "
          for(a=0; a<runner2.length; a++){
            document.getElementById("racestatus").innerHTML += runner2[a];
            }
            document.getElementById("racestatus").innerHTML += "<br>"
            //document.getElementById("racestatus").innerHTML += runnerPos2;
            }

        else{
          //even if the runner did not advance (rand=1), the array should print
          document.getElementById("racestatus").innerHTML += "Runner 2: "
          for(a=0; a<runner2.length; a++){
           
            document.getElementById("racestatus").innerHTML += runner2[a];
            };
          //document.getElementById("racestatus").innerHTML += runnerPos2;
            document.getElementById("racestatus").innerHTML += "<br>"
          } 
      rand3 = Math.floor(Math.random() * 2); //50% chance
      if (rand3 == 0) 
          {
          runner3[runnerPos3+1] = "R";
          runner3[runnerPos3] = "-";
          runnerPos3++;
          //print the array after R is moved
          document.getElementById("racestatus").innerHTML += "Runner 3: "
          for(b=0; b<runner3.length; b++){
            document.getElementById("racestatus").innerHTML += runner3[b];
            }
            document.getElementById("racestatus").innerHTML += "<br>"
            //document.getElementById("racestatus").innerHTML += runnerPos3;
            }
            
            else{
          //even if the runner did not advance (rand=1), the array should print
          document.getElementById("racestatus").innerHTML += "Runner 3: "
          for(b=0; b<runner3.length; b++){
           
            document.getElementById("racestatus").innerHTML += runner3[b];
            };
         
            document.getElementById("racestatus").innerHTML += "<br>"
          } 

     rand4 = Math.floor(Math.random() * 2); //50% chance
      if (rand4 == 0) 
          {
          runner4[runnerPos4+1] = "R";
          runner4[runnerPos4] = "-";
          runnerPos4++;
          //print the array after R is moved
          document.getElementById("racestatus").innerHTML += "Runner 4: "
          for(c=0; c<runner4.length; c++){
            document.getElementById("racestatus").innerHTML += runner4[c];
            }
            document.getElementById("racestatus").innerHTML += "<br>"+"<br>";
            //document.getElementById("racestatus").innerHTML += runnerPos4;
            }
            
            else{
          //even if the runner did not advance (rand=1), the array should print
          document.getElementById("racestatus").innerHTML += "Runner 4: "
          for(c=0; c<runner4.length; c++){
           
            document.getElementById("racestatus").innerHTML += runner4[c];
            };
    
            document.getElementById("racestatus").innerHTML += "<br>"+"<br>"
          } 

     //if the runners have not finished the race, repeat the function until R is in the last position (21) 
     
      
     if (runnerPos<21 & runnerPos2<21 & runnerPos3<21 & runnerPos4<21)
        {
        window.addEventListener("keydown", checkKeyPress, false)
        //Adds a return after printing each array
        
        } 
    
        else //once the runner has reached the end, remove the listener for the enter key so the race does not continue
      {window.removeEventListener("keydown", checkKeyPress);
      
      //Checks to see which runners have R in the last position and prints the winner statement

    if (runner1[21] =="R")
      {
      document.getElementById("racestatus").innerHTML += "<br> <br> Runner 1 has won the race.";
      }
    
    if (runner2[21] == "R"){
    document.getElementById("racestatus").innerHTML += "<br> <br> Runner 2 has won the race.";
    }

    if (runner3[21] == "R"){
    document.getElementById("racestatus").innerHTML += "<br> <br> Runner 3 has won the race.";
    }

    if (runner4[21] == "R"){
    document.getElementById("racestatus").innerHTML += "<br> <br> Runner 4 has won the race.";
    }
    
    }

     
}
}
    
  

  
  //Calls the function to start the race - this line of code only executes one time - the additional enter keys the user presses will be picked up within the function above.
   window.addEventListener("keydown", checkKeyPress, false);

