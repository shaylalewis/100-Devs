//Write your pseduo code first!
// Start
//     Ask user to enter a temperature in Fahrenheit
//     Store input in variable fahrenheit

//     Define function convertToCelsius(fahrenheit):
//         Use formula: celsius = (fahrenheit - 32) * 5/9
//         Return celsius

//     Call convertToCelsius(fahrenheit) and store result in variable celsius

//     Display celsius to the user
// End

document.querySelector('#convert').addEventListener('click', run)

function run() {
    let fahren = document.querySelector('#fahrenheit').value;
    let celsius = (fahren - 32) * 5 / 9;
    document.querySelector('#cellDisplay').innerHTML = `${celsius} °C`;
}
