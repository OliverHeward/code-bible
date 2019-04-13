$('#inputfield').on('change', function() {
            event.preventDefault();

            const userInput = '1';
            const degreeHandle = 6;

            if (userInput >= 1; userInput <= 60) {
                compOutput = userInput * degreeHandle,
                    console.log('The minute hand is at' + compOutput);
            } else {
                console.log('You entered a bad number, try put one between 1 - 60');
            }
        };



// CHALLENGE 2

const goldBuy = ['45', '24', '35', '31', '40', '38', '11'];

if (goldBuy[1] < goldBuy[4]) {
	profit = goldBuy[1] - goldBuy[4],
		console.log('The profit you made was ' + profit + ' today');
}	else {
	console.log('You lost ' + profit ' today');
}

