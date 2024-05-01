var a=4
var b=3
function circleArea(a){
   return Math.PI*a*a
}

function square(a)
{
   return a*a 
}

function rectangle(a,b)
{
    return a*b
}

function area(circleArea,square,rectangle)
{
switch(choice)
{
    case 1:console.log(circleArea(a));break;
    case 2:console.log(square(a));break;
    case 3:console.log(rectangle(a,b));break;
    default:alert("Exitting");break;
}
}
var choice=+prompt("Enetr your choice \n 1 ) CircleArea \n 2 ) square area \n 3 ) rectangle area")
if((choice==1)||(choice==2)||(choice==3))
{
area(circleArea,square,rectangle)
}
else{
    alert("Plz enter valid choice")
}