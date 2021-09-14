function ConverterDolar() {
  var vE = document.getElementById("valor");
  var valor = vE.value;
  var valorDolarN = parseFloat(valor);

  var valorReal = valorDolarN * 5.26;

  var valorRF = valorReal.toFixed(2);

  var eValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorRF;

  eValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var vE = document.getElementById("valor");
  var valor = vE.value;
  var valorEuroN = parseFloat(valor);

  var valorReal = valorEuroN * 6.19;

  var valorRF = valorReal.toFixed(2);

  var eValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorRF;

  eValorConvertido.innerHTML = valorConvertido;
}
