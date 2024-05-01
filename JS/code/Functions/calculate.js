var choice=+prompt(" Enter the Operation you want to perform.\npress\n 1 )for Addition.\n 2) for subtraction.\n 3) for Multiplication .\n 4) for division.\n 5)Exit\n")


    var a=+prompt("Enter the first no")
var b=+prompt("enter the second no.")

function add(a,b)//declaration
{
    alert(`sum of a and b is ${a+b}`)
}
function sub(a,b)//declaration
{
    alert(`difference of a and b is ${a-b}`)
}
function mul(a,b)//declaration
{
    alert(`product of a and b is ${a*b}`)
}
function div(a,b)//declaration
{
    alert(` Quotient of a/b is ${a/b}`)
}
function calculate(add,sub,mul,div)
{
switch(choice)
{
    case 1:add(a,b);break;
    case 2:sub(a,b);break;
    case 3:mul(a,b);break;
    case 4:div(a,b);break;
    default:alert("Exitting");break;
}
}
if((choice==1)||(choice==2)||(choice==3)||(choice==4))
{
calculate(add,sub,mul,div)
}
else{
    alert("Plz enter valid choice")
}