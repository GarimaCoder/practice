//let colors=["red","black","orange","yellow","purple","green"]
let a=document.getElementById('para')
function change()
{
a.textContent="hellooooooooooooooo"
    //document.body.style.backgroundColor=colors[Math.round(Math.random()*6)]
    a.textContent=Math.round(Math.random()*6)
    const rc=Math.round(Math.random()*10000000).toString(16)
    a.textContent="#"+rc
document.body.style.backgroundColor="#"+rc
} 