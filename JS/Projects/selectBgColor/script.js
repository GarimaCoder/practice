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
//let colors=["red","black","orange","yellow","purple","green"]
let a=document.getElementById('para')
function change()
{

    //document.body.style.backgroundColor=colors[Math.round(Math.random()*6)]
   
    const rc=Math.round(Math.random()*10000000).toString(16)
   
document.body.style.backgroundColor="#"+rc
} 
function changemode()
{
    // document.body.style.backgroundColor="lightblue"
    // document.body.style.color="red"
    document.body.classList.toggle('dark')
}
changecolor()
{
   let select=document.getElementById('colors').value
   if(select!=="")
    document.body.style.backgroundColor=select 
else
document.body.style.backgroundColor="white"
}