// var i = 0
// while (i <10){
// 	// console.log(i++)
// 	console.log((i++) +" Mohim")
// }
var isRunning = true;
while (isRunning){
	var rand = (Math.floor(Math.random() * 10 + 1))
	if (rand === 9){
		console.log("Winner Winner Chicken Diner")
		isRunning = false		
	}
	else {
		console.log("You Have got " + rand )
	}
}