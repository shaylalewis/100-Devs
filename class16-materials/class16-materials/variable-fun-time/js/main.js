//--- Easy
//create a variable and assign it a number
let holdNum = 11;

//minus 10 from that number
holdNum = holdNum - 10;

//print that number to the console
console.log(holdNum);

//--- Medium
//create a variable that holds a value from the input
let holdings = document.querySelector('#danceDanceRevolution').value;

//add 25 to that number
holdings = holdings + 25;

//alert that number
alert(holdings);

//--- Hard
//create a variable that holds the h1
let head1 = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
head1.addEventListener('click', sum)

function sum() {
    let holdings = document.querySelector('#danceDanceRevolution').value;
    console.log(holdNum + Number(holdings))
}