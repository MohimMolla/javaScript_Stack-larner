var a = 42
var b = 60
var c = 900
var d = 50

if( a > b && c > d ) {
	console.log("A is gretter than B and C is gretter than D")
}
else{
	console.log("One Condation is false")
}

if( a > b || c > d ) {
	console.log("A is gretter than B or C is gretter than D")
}
else{
	console.log("One Condation is false")
}

var x = !( a > b)
console.log(x)