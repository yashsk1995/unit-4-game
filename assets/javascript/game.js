var computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var counter=0;
var wins=0;
var losses=0;
 

$("#computer-Guess").html(computerGuess);
$("#win").html(wins);
$("#losses").html(losses);
$("#counter").html(counter);
newvaule();

function newvaule(){
for(var i=1;i < 5;i++){
    var random=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#img"+[i]).attr("value1",random);
}
}


$(".img").on("click" , function () {
    var crystalValue = ($(this).attr("value1"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter").html(counter);
    

    if(counter === computerGuess){
        wins++;
        $("#win").html(wins);
        // alert("win");
        computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#computer-Guess").html(computerGuess);

        newvaule();
        counter=0;
        $("#counter").html(counter);
        
    }
    else if (counter >= computerGuess) {
        // alert("You lose!!");
        losses++;
        $("#losses").html(losses);
        computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#computer-Guess").html(computerGuess);

        newvaule();
        counter=0;
        $("#counter").html(counter);
                
      }
});