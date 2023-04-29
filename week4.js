//1.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(33); // added a new number to the end of the list to ensure it is dynamic. The console printed 90 before adding this.
console.log((ages[ages.length - 1]) - ages[0]); // used .lenght to find the last value and then subtracted the first value from it
var sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
} // created a for loop that indexes the values up to the lenght of the array and adds them.
var avg = sum / ages.length; // variable to find the average of the array.
console.log(avg);

//2.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];




//3.
// You can use the .lenght property to find the last element of an array. For example, array[array.lenght - 1];

//4.
// The number index of an array always starts with 0, so the first element of an array will always will be 0. You can access it with array[0].

//7.
let hola = (a, b) => {     // function that takes two parameters.
    let print = '';        // string variable.
    for (let i = 0; i < b; i++) {   // for loop that starts from 0 and goes up to whatever number represents b.
        print += a; // adds the a string value together
    }
    return print; // returns the variable function
};
console.log(hola('Hello', 3)); // passing in the parametere values.

//8.
let fullName = (firstName, lastName) => `${firstName} ${lastName}`; // arrow function that takes the two parameters firstName and lastName and uses a template literal to combine them in a string.
console.log(fullName('Joe', 'Manganiello'));

//9.

function addNumbers(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    } if (total < 100){
        return true;
    }
}
console.log(addNumbers([3, 12, 60, 44]));

//10.
function avgArray(array) {
    let sum = 0;
    for (let i =0; i < array.lenght; i++) {
        sum += array[i];
    }
    return sum / array.lenght;
}
console.log(avgArray([37, 90, 22, 38]));

//12.
function willBuyDrink(isHotOutside, moneyInPocket) { 
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true; // wrote a function with an if statement for the boolean and number elements.
    }
}
console.log(willBuyDrink(true, 12));

//13.
function shouldGoToBed(tired, day, time) {
    if (tired = true || day  < 6 && time >= 23) {
        return true
    }
}
console.log(shouldGoToBed(false, 3, 23));
// Wrote a function that determines if i should go to bed by checking if a am tired and or what day and time it is. The if statement checks to see if being tired is true and if it is, the function will return true right then and there. The or statement checks the day and time if tired returns false. If the day is < 6 meaning friday and the time is <= the 23rd hour of the day being 11pm, the function will also return true.







