let run = () => {
    let fahren = document.querySelector('#fahrenheit').value;
    let celsius = (fahren - 32) * 5 / 9;
    document.querySelector('#cellDisplay').innerHTML = `${celsius}°C`
};

document.querySelector('#convert').addEventListener('click', run);

// document.querySelector('#convert').addEventListener('click', run)

// function run() {
//     let fahren = document.querySelector('#fahrenheit').value;
//     let celsius = (fahren - 32) * 5 / 9;
//     document.querySelector('#cellDisplay').innerHTML = `${celsius} °C`;
// }