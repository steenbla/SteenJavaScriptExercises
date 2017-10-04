
//Blair Steen, 9/26/2017

// Exercise One:

alert(" -- EXERCISE ONE --");

var x = prompt("Enter a Number", "0");
var num = parseInt(x);
var numtotal = 0 

for (var x = 0; x <= num; x ++) {
	numtotal = numtotal + x;
}

alert("Your consecutive sum is " + numtotal);


// Exercise Two:

alert(" -- EXERCISE TWO --");

var wordtotal = " ";

do {
	var play = prompt("Do you want to play?", "'yes' or 'no'");
	if (play === 'yes') {
		var word = prompt("Enter a word");
	    word = " " + word;
		var concatwords = wordtotal.concat(word);
		wordtotal = concatwords;
		count += 1;
	}
} while (play === 'yes')

alert("Output: " + wordtotal);

// Exercise Three:

alert(" -- EXERCISE THREE --");

var printname = prompt("Would you like to print your name?", "'yes' or 'no'");
var name = prompt("What is your name?");
var nametotal = " ";
explanationmark = ""

while (printname === 'yes') {
	alert("Hello. My name is " + name + explanationmark)
	explanationmark += "!"
	var printname = prompt("Would you like to print this again?", "'yes' or 'no'");
}

// Exercise Four:

alert(" -- EXERCISE FOUR --");

var timeofday = prompt("What time of day is it?", "'morning', 'noon', or 'evening'");

if (timeofday === 'morning') {
	alert("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (timeofday === 'noon') {
	alert("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if (timeofday === 'evening') {
	alert("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
} else {
	alert("The time of day that you entered isn't when people normally eat. Sorry.")
}

