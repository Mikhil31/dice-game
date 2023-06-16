var rand1= Math.floor((Math.random())*6)+1;
var rand2= Math.floor((Math.random())*6)+1;
if(rand1===rand2){
    document.querySelector("#wins").innerHTML="It's a DRAW!!";
} else if(rand1>rand2){
    document.querySelector("#wins").innerHTML="Player 1 wins!!";
} else if(rand2>rand1){
    document.querySelector("#wins").innerHTML="Player 2 wins!!";
}
switch (rand1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/1.png");       
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/2.png");       
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/3.png");       
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/4.png");       
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/5.png");       
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/6.png");       
        break;
    default:
        alert("default triggered in dice 1");
        break;
}

switch (rand2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/1.png");       
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/2.png");       
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/3.png");       
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/4.png");       
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/5.png");       
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/6.png");       
        break;
    default:
        alert("default triggered in dice 2");
        break;
}