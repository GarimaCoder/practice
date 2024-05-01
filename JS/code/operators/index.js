var a=4
var b=5
var c=6
if((a>b)&&(a>c))
{
console.log("${a} is Max No.")
if(b>c)
console.log("c is min")
else
console.log("b is min")

}
else if((b>a)&&(b>c))
{
console.log("${b} is Max no")
if(a>c)
console.log("c is min")
else
console.log("a is min")
}
else
{console.log("${c} is Max no")
(a>b)?console.log("${b} is min"):("${a} is min")
}