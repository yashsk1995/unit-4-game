var computerGuess=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var counter=0;
var wins=0;
var losses=0;
 

// alert(random);
$("#computer-Guess").html(computerGuess);
$("#win").html(wins);
$("#losses").html(losses);
$("#counter").html(counter);

for(var i=1;i < 5;i++){
    var random=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#img"+[i]).attr("value1",random);
}

