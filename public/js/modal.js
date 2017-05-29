// $('.magic-button').click(function () {
//   $('.FundoEscuro').toggle();
//   $('.ModalConecta').fadeIn(3000);
// })


var modal = document.getElementById('myModal');
var btn1 = document.getElementsByClassName("magic-button")[0];
var btn2 = document.getElementsByClassName("magic-button")[1];
var btn3 = document.getElementsByClassName("magic-button")[2];
var btn4 = document.getElementsByClassName("magic-button")[3];


var span = document.getElementsByClassName("btn-close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

btn3.onclick = function() {
  modal.style.display = "block";
}

btn4.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  $('#success-message-modal1').fadeOut(0);
  $('#magic-button-modal1').fadeIn(0);
}

window.onclick = function(event) {
  if (event.target == modal) {
    $('#success-message-modal1').fadeOut(0);
    $('#magic-button-modal1').fadeIn(0);
    modal.style.display = "none";
  }
}
