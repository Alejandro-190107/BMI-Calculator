
const btnDelete = document.getElementById("btnDelete");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

btnDelete.addEventListener("click", function () {

  document.getElementById('result').innerHTML = "";
  height.value = "";
  weight.value = "";

});

const btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener("click", function () {

  var result = document.getElementById("result");
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  height = height / 100;

  let imc = weight / (height * height);

  imc = imc.toFixed(2);

  if (height == "" || weight == "") {

    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '¡Por favor complete los campos de entrada!',
      showCloseButton: true,
    });
  }else {

    result.innerHTML += `
    <div class="alert" role="alert">
      <p> Tu Índice De Masa Corporal es <spam class="alert-link"> ${imc} </spam> </p>
    </div>`;
  }
});