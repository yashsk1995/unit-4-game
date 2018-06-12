// computerGuess that stores a random value from 19-120
var computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// counter that is the score of user
var counter=0;
// win shows how many time user wins
var wins=0;
// losses shows how many time user losses
var losses=0;

//displaying all variables values on html page
// computer-guess display random number between 19-120
$("#computer-Guess").html(computerGuess);
// win display total wins
$("#win").html(wins);
// losses display total losses
$("#losses").html(losses);
// coutner displays total score of user
$("#counter").html(counter);
// calling function newvalue
newvaule();

// creating  funtion that generate a diffrent values on each images 
function newvaule(){
for(var i=1;i < 5;i++){
    // random will store a number between 1-12
    var random=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // assgining a random to images as a new attribute called value1
    $("#img"+[i]).attr("value1",random);
}
}

// craeting funtion that called once user win
function win(){
    // win increamenter
    wins++;
    // showing win on page
    $("#win").html(wins);
    // alert("win");
    // once the user wins again computer choose new number from 19-120
    computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // showing computer Guess on page
    $("#computer-Guess").html(computerGuess);
    // again generating a diffrent calues on each images once the user win
    newvaule();
    // setting user answer to 0 
    counter=0;
    // showing user answer to page
    $("#counter").html(counter);

    };

function lost(){
    // alert("You lose!!");
    // losses increamenter
    losses++;
    // showing losses on page
    $("#losses").html(losses);
    // once the user wins again computer choose new number from 19-120    
    computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#computer-Guess").html(computerGuess);
    // again generating a diffrent calues on each images once the user win
    newvaule();
    // setting user answer to 0 again 
    counter=0;
    // showing user answer to page
    $("#counter").html(counter);
};

// creating a event listner that run after user click on any image
$(".img").on("click" , function () {
    // storing a value1 attribute value to crystalvalue 
    var crystalValue = ($(this).attr("value1"));
    // converting crystalvalue to integer
    crystalValue = parseInt(crystalValue);
    // adding counter with the crystalvalue(that is value of every images storing)
    counter += crystalValue;
    // showing a couter total on page
    $("#counter").html(counter);
    
    // checking if user total and computer Guess is equal then win 
    if(counter === computerGuess)
    {   
        // alert("win");
        // calling win funtion once user wins
        win();
    }
    // checking if user total is more than computer Guess then user lost
    else if (counter >= computerGuess) {
        // calling lost function if user lost!
            lost();        
      }
});





