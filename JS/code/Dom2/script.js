let p1=document.getElementById("para")
let p2=document.getElementById("para2")
let input=document.getElementById('inp')
function update()
{
    input.value="madam"
   //alert(p1.textContent)
  //alert(p1.innerText)

   p1.innerHTML="<Strong> Garima</Strong>"
   p2.textContent=input.value
   let str=input.value
   let a=str.length-1;
   let rev=''
   while(a>=0)
   {
rev+=str[a];
a--;

   }
input.value=rev
p2.style.backgroundColor="orange";
if(rev==str)
{
    p1.textContent="palendrome"
}
}