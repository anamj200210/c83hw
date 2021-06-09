var mouseEvent = "";

var last_x , last_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d")

color = "pink"

width_of_line = 3;
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    //color = document.getElementById("color").value;
  //width_of_line = document.getElementById("width_of_line").value; 

    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    
    ctx.moveTo(last_x, last_y);
console.log("last_x = " + last_x + ",last_y = " + last_y);
    ctx.lineTo(current_x , current_y);
   console.log("current_x = " + current_x + ",current_y = " + current_y);
    ctx.stroke(); 
    }

last_x = current_x;
last_y = current_y;

}

function erase_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    var new_width = screen.width - 60;
    var new_height = screen.height - 100;

    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }


    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;       
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

         
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        

        last_position_of_x = current_x; 
        last_position_of_y = current_y;
    }

function erase_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}