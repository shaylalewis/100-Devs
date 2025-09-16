document.querySelector('#check').addEventListener('click', check)
let message = "";

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  if (day == 'monday' || day == 'wednesday' || day == 'friday') {
    message = 'BOOOOOOOOOOOORING'
  } else if (day == 'tuesday' || day == 'thursday') {
    message = 'Class day!'
  } else {
    message = 'Weekend!'
  }
  document.querySelector('#placeToSee').innerHTML = message;
}
