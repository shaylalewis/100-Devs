//Create a conditonal that checks their age


document.querySelector('h1').addEventListener('click', ageCheck);

function ageCheck() {
    let age = document.querySelector('#danceDanceRevolution').value;
    let message = "";

    if (age < 16) {
        message = "You can't drive."
    } else if (age < 18) {
        message = "You can't hate from outside the club, because you can't even get in"
    } else if (age < 21) {
        message = "You can't drink"
    } else if (age < 25) {
        message = "You can't rent cars affordably"
    } else if (age < 30) {
        message = "You can't rent fancy cars affordably"
    } else {
        message = "There is nothing left to look forward to"
    }

    document.querySelector('p').innerHTML = message;
}

//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
