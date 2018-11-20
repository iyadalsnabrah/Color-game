//create function to a randome rgb
function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return rgb;
}

function correctanswer() {
    $(".try-again").text("Correct!");
    $(".new-color").text("Try Again?");
    $("main ul li:nth-child(1)").css("background-color", $(".header-color").text());
    $("main ul li:nth-child(2)").css("background-color", $(".header-color").text());
    $("main ul li:nth-child(3)").css("background-color", $(".header-color").text());
    $("main ul li:nth-child(4)").css("background-color", $(".header-color").text());
    $("main ul li:nth-child(5)").css("background-color", $(".header-color").text());
    $("main ul li:nth-child(6)").css("background-color", $(".header-color").text());
    $("header").css("background-color", $(".header-color").text());
}

//create initial rgb of the header-color
$(".header-color").text(randomRGB());



//create function to a randome rgb color in randome position 
function radomnumber() {
    var nums = [1, 2, 3, 4, 5, 6],
        ranNums = [],
        i = nums.length,
        j = 0;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }
    $("main ul li:nth-child(" + ranNums[0] + ")").css("background-color", randomRGB());
    $("main ul li:nth-child(" + ranNums[1] + ")").css("background-color", randomRGB());
    $("main ul li:nth-child(" + ranNums[2] + ")").css("background-color", randomRGB());
    $("main ul li:nth-child(" + ranNums[3] + ")").css("background-color", randomRGB());
    $("main ul li:nth-child(" + ranNums[4] + ")").css("background-color", randomRGB());
    $("main ul li:nth-child(" + ranNums[5] + ")").css("background-color", $(".header-color").text());
}



//create initial randome rgb color in randome position 
radomnumber();


//create the new-color option

$(".new-color").click(function () {
    $(".header-color").text(randomRGB());
    radomnumber();
    $(".try-again").text("");
    $(".new-color").text("NEW COLORS");
    $("main li").css("opacity","1");
    $("main li").css("transition","opacity 1s");

})


//create the choice the right color
$("main ul").on("click", "li", function () {
    if ($(this).css("background-color") === $(".header-color").text())
        correctanswer();
    else{
        $(".try-again").text("Wronge");
        $(".try-again").toggleClass("animated wobble");
        $(this).css("opacity","0");
        $(this).css("transition","opacity 1s");
    }




})