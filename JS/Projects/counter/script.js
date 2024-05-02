let c=0;

function incr()
{
    if((c<25))
    {
    c++;
    document.querySelectorAll(".para")[0].textContent=c;
    
    if(c%2==0)
    document.getElementById("OddEven").innerHTML="even";
else
document.getElementById("OddEven").innerHTML="odd";
}
else{
    alert("vlaue reached to its max limit ! reset the counter")
}}
function decr()
{if((c>-10))
    {
    c--;
    document.getElementById("count").textContent=c;
    if(c%2==0)
    document.getElementById("OddEven").innerText="even";
else
document.getElementById("OddEven").innerText="odd";

}
else{
    alert("vlaue reached to its min limit ! reset the counter")
}}
function reset()
{
    c=0;
    document.getElementById("count").textContent=c;
    document.getElementById("OddEven").innerText="even";
}