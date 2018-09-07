var btnCalc = document.querySelector("#btn-calcular");
btnCalc.addEventListener("click", function(event){
  event.preventDefault();
  var altura = document.querySelector("#txt-altura").value;
  var peso = document.querySelector("#txt-peso").value;

  if(!validarPeso(peso) | !validarAltura(altura)){
    return;
  }

  var imc = calcularIMC(peso, altura);
  var condicao = verificarCondicao(imc, document.querySelector("#gen").value);
  alert("IMC de: " + imc + "\n" + condicao);
});

function calcularIMC(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}

function verificarCondicao(imc, genero){
  switch(genero){
    case "m":
      if(imc < 20.7){
        return "Abaixo do peso.";
      }
      else if(imc >= 20.7 && imc < 26.4){
        return "Peso normal.";
      }
      else if(imc >= 26.4 && imc < 27.8){
        return "Marginalmente acima do peso.";
      }
      else if(imc >= 27.3 && imc < 32.3){
        return "Acima do peso ideal.";
      }
      else if(imc >= 32.3){
        return "Obeso.";
      }
    break;
    case "f":
      if(imc < 19.1){
        return "Abaixo do peso.";
      }
      else if(imc >= 19.1 && imc < 25.8){
        return "Peso normal.";
      }
      else if(imc >= 25.8 && imc < 27.3){
        return "Marginalmente acima do peso.";
      }
      else if(imc >= 27.3 && imc < 31.1){
        return "Acima do peso ideal.";
      }
      else if(imc >= 31.1){
        return "Obeso.";
      }
    break;
    default:
    return "Gênero inválido.";
  }
}

function validarPeso(peso){
  var lab = document.querySelector("#erro-peso");
  lab.textContent = "";
  if(peso <= 0 || peso >= 1000){
    lab.textContent = "Peso inválido.";
    return false;
  }
  return true;
}

function validarAltura(altura){
  var lab = document.querySelector("#erro-altura");
  lab.textContent = "";
  if(altura <= 0 || altura >= 3){
    lab.textContent = "Altura inválido.";
    return false;
  }
  return true;
}
