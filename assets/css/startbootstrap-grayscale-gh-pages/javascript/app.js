//Timer 
$("#start").on("click", function(){
    setTimeout(timeUp, 62000);

function startTimer(duration, display) {
    stopTimer();
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(startTimer);
}

function timeUp(){
    var a= alert("Time is Up!")
        if (a===true){
            (".answer").reset();
            console.log(timeUp);
        }
};


jQuery(function ($) {
    var oneMinute = 60 * 1,
        display = $('#time');
    startTimer(oneMinute, display);
});


});

var wins=0;
var losses=0;
console.log(wins);
console.log(losses);

//On click buttons

//Question 1

$("#lannister").on("click", function(){
        $("#q1").text("False! The correct answer was House Stark you fool!");
        $("#picAnswer2").html('<img src= img/slap.gif width="300px">');
        $("#picAnswer1").hide();
        $("#picAnswer2").show();
        losses++;
});

$("#stark").on("click", function(){
    $("#q1").text("Correct!");
    $("#picAnswer1").html('<img src= img/stark.PNG width="200px">');
    $("#picAnswer2").hide();
    $("#picAnswer1").show();
    wins++;
});

$("#greyjoy").on("click", function(){
    $("#q1").text("False! The correct answer was House Stark you fool!");
    $("#picAnswer2").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer1").hide();
    $("#picAnswer2").show();
    losses++;

});

//Question 2

$("#ny").on("click", function(){
        $("#q2").text("Correct!");
        $("#picAnswer4").html('<img src= img/wolf.gif width="300px">');
        $("#picAnswer3").hide();
        $("#picAnswer4").show();
        wins++;
});

$("#snow").on("click", function(){
    $("#q2").text("False! The correct answer was Nymeria you fool!");
    $("#picAnswer3").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer4").hide();
    $("#picAnswer3").show();
    losses++;
});

$("#grey").on("click", function(){
    $("#q2").text("False! The correct answer was Nymeria you fool!");
    $("#picAnswer3").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer4").hide();
    $("#picAnswer3").show();
    losses++;

});

//Question 3

$("#olly").on("click", function(){
        $("#q3").text("False! The correct answer was Alliser Thorne you fool!");
        $("#picAnswer5").html('<img src= img/slap.gif width="300px">');
        $("#picAnswer6").hide();
        $("#picAnswer5").show();
        losses++;
});

$("#deny").on("click", function(){
    $("#q3").text("False! The correct answer was Alliser Thorne you fool!");
    $("#picAnswer5").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer6").hide();
    $("#picAnswer5").show();
    losses++;
});

$("#all").on("click", function(){
    $("#q3").text("Correct!");
    $("#picAnswer6").html('<video loop autoplay="autoplay" src="https://zippy.gfycat.com/EasyFrighteningGrayfox.webm" width="300px">');
    $("#picAnswer5").hide();
    $("#picAnswer6").show();
    wins++;

});

//Question 4

$("#surrender").on("click", function(){
        $("#q4").text("False! The correct answer was to indicate where she’s being taken you fool!");
        $("#picAnswer7").html('<img src= img/slap.gif width="300px">');
        $("#picAnswer8").hide();
        $("#picAnswer7").show();
        losses++;
});

$("#married").on("click", function(){
    $("#q4").text("False! The correct answer was to indicate where she’s being taken you fool!");
    $("#picAnswer7").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer8").hide();
    $("#picAnswer7").show();
    losses++;
});

$("#taken").on("click", function(){
    $("#q4").text("Correct!");
    $("#picAnswer8").html('<img src= img/dany.gif width="300px">');
    $("#picAnswer7").hide();
    $("#picAnswer8").show();
    wins++;

});

//Question 5

$("#drogon").on("click", function(){
        $("#q5").text("Correct!");
        $("#picAnswer10").html('<img src= img/dragons.gif width="300px">');
        $("#picAnswer9").hide();
        $("#picAnswer10").show();
        wins++;
});

$("#regis").on("click", function(){
    $("#q5").text("False! The correct answer was Drogon, Rhaegal, and Viserion you fool!");
    $("#picAnswer9").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer10").hide();
    $("#picAnswer9").show();
    losses++;
});

$("#red").on("click", function(){
    $("#q5").text("False! The correct answer was Drogon, Rhaegal, and Viserion you fool!");
    $("#picAnswer9").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer10").hide();
    $("#picAnswer9").show();
    losses++;

});

//Question 6

$("#ty").on("click", function(){
        $("#q6").text("False! The correct answer was Lord Varys you fool!");
        $("#picAnswer11").html('<img src= img/slap.gif width="300px">');
        $("#picAnswer12").hide();
        $("#picAnswer11").show();
        losses++;
});

$("#varys").on("click", function(){
    $("#q6").text("Correct!");
    $("#picAnswer12").html('<img src= img/varys.gif width="300px">');
    $("#picAnswer11").hide();
    $("#picAnswer12").show();
    wins++;
});

$("#pet").on("click", function(){
    $("#q6").text("False! The correct answer was Lord Varys you fool!");
    $("#picAnswer11").html('<img src= img/slap.gif width="300px">');
    $("#picAnswer12").hide();
    $("#picAnswer11").show();
    losses++;

});



