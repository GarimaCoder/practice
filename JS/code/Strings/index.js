var s=" javascript "
var s1='to learn'
console.log(s)
console.log(s.toUpperCase())
console.log(s.concat(" is intersting"))
console.log(s1+s+"is interesting")
console.log("I m 'Garima Sharma'")
console.log(s,s1)

/*use of back tick */
var cost1=2000
var cost2=3000
console.log(`Cost Price of 2 items are \n 1) ${cost1}\n 2) ${cost2}`)
console.log(s1.split(" "))
console.log(s1.concat("javascript is awesome").split(" "))
console.log((s1.split(' ')).join('-'))
console.log(s1.startsWith('to'))
console.log(s1.charAt(4))
console.log(s1.repeat(3))
console.log(s1.indexOf('l'))
console.log(s1.includes('learn'))//returns true if includes else false
console.log(s1.replace('n','ning'))
console.log(s1.length)// to get the length
console.log(s1.slice(3,6))//3rd index to 5th index(6-1)
console.log(s1.substr(3,4))//3rd index to length of substring