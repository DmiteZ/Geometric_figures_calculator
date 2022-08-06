// CONSTANTES A UTILIZAR
// CONSTANTE CUADRADO
const inputCuadrado = document.getElementById("inputCuadrado");


// CONSTANTES DEL  TRIANGULO
const inputTrianguloLado1 = document.getElementById("inputLado1Triangulo");
const inputTrianguloLado2 = document.getElementById("inputLado2Triangulo");
const inputTrianguloBase = document.getElementById("inputBaseTriangulo");
const inputTrianguloAltura = document.getElementById("inputAlturaTriangulo");

// CONSTANTE DEL CIRCULO
const inputRadio = document.getElementById("inputRadioCirculo");

// CODIGO DE OPERACINES DEL CUADRADO
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

// CODIGO DE OPERACIONES DEL TRIANGULO
const alturaTriangulo = (lado, base) => {
  return Math.sqrt(lado ** 2 - base ** 2 / 4)
};
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (altura, base) => (base * altura) / 2;

// CODIGO DE OPERACIONES DEL CIRCULO
const PI = Math.PI; // para tener PI
const diametroCirculo = radio => radio * 2;
const circunferenciaCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
const areaCirculo = (radio) => (radio * radio) * PI;

// FUNCIONES PARA LIMPIAR
const textPerimetro = "El perimetro de tu figura es:";
const textArea = "El área de tu figura es:";
const textDiametro = "El diametro de tu circulo es:";
const textoAlturaTriangulo = "La altura de tu triángulo es:";

const clean = (resultadoPerimetro, resultadoArea, input1) => {
  resultadoPerimetro.innerHTML = textPerimetro;
  resultadoArea.innerHTML = textArea;
  input1.value = "";
}
const cleanTriangulo = (resultadoPerimetro, resultadoArea, input1, input2, input3, input4) => {
  clean(resultadoPerimetro, resultadoArea, input1);
  input2.value = "";
  input3.value = "";
  input4.innerHTML = textoAlturaTriangulo;
}
const cleanCirculo = (resultadoDiametro, resultadoPerimetro, resultadoArea, input1) => {
  clean(resultadoPerimetro, resultadoArea, input1)
  resultadoDiametro.innerHTML = textDiametro;
}

// FUNCION PARA VALIDAR OPERACION(cuadrado y diametro)
const validar = (valor, funcion, resultado, textoAMostrar) => {
  if (!(valor == "")) {
    operacion = funcion(valor);
    resultado.innerHTML = `${textoAMostrar} ${operacion}`
  } else {
    alert(`POR FAVOR, RELLENE LOS CAMPOS`);
  }
}

const validarTriangulo = (valor1, valor2, valor3, funcion, resultado, textoAMostrar) => {
  if (!(valor1 == "") && !(valor2 == "") && !(valor3 == "")) {
    if (valor1 === valor2 && valor1 !== valor3) {
      const operacion = funcion(valor1, valor2, valor3);
      resultado.innerHTML = `${textoAMostrar} ${operacion}`;
    } else {
      alert("Verifique que el primer lado sea igual al segundo lado, y estos que sean diferentes de la base");
    }
  } else {
    alert("POR FAVOR, RELLENE LOS CAMPOS");
  }
}
// INTERACCIÓN CON EL HTML
// FORM DEL CUADRADO
const calcularPerimetroCuadrado = () => {
  const valueCuadrado = Number(inputCuadrado.value);
  validar(valueCuadrado, perimetroCuadrado, resultadoPerimetroCuadrado, textPerimetro);

}
const calcularAreaCuadrado = () => {
  const valueCuadrado = Number(inputCuadrado.value);
  validar(valueCuadrado, areaCuadrado, resultadoAreaCuadrado, textArea);
}

// FORM DEL TRIANGULO
const calcularAlturaTriangulo = () => {
  const value1 = Number(inputTrianguloLado1.value);
  const value2 = Number(inputTrianguloLado2.value);
  const valueBase = Number(inputTrianguloBase.value);

  validarTriangulo(value1, value2, valueBase, alturaTriangulo, resultadoAlturaTriangulo, textoAlturaTriangulo);
}
const calcularPerimetroTriangulo = () => {
  const value1 = Number(inputTrianguloLado1.value);
  const value2 = Number(inputTrianguloLado2.value);
  const valueBase = Number(inputTrianguloBase.value);

  validarTriangulo(value1, value2, valueBase, perimetroTriangulo, resultadoPerimetroTriangulo, textPerimetro);
}
const calcularAreaTriangulo = () => {
  const value1 = Number(inputTrianguloLado1.value);
  const valueBase = Number(inputTrianguloBase.value);
  const valueAltura = alturaTriangulo(value1, valueBase);
  if (!(valueBase == "")) {
    const area = areaTriangulo(valueBase, valueAltura);
    resultadoAreaTriangulo.innerHTML = `El área del triangulo es: ${area}`;
  } else {
    alert("POR FAVOR, RELLENE LOS CAMPOS");
  }
}


// FORM CIRCULO
const calcularDiametroCirculo = () => {
  const valueRadio = Number(inputRadio.value);
  validar(valueRadio, diametroCirculo, resultadoDiametroCirculo, textDiametro);
}
const calcularPerimetroCirculo = () => {
  const valueRadio = Number(inputRadio.value);
  validar(valueRadio, circunferenciaCirculo, resultadoPerimetroCirculo, textPerimetro);
}
const calcularAreaCirculo = () => {
  const valueRadio = Number(inputRadio.value);
  validar(valueRadio, areaCirculo, resultadoAreaCirculo, textArea);
}