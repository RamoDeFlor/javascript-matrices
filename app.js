function sumaMatrices(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      throw new Error("Las matrices deben tener la misma forma para sumarlas.");
    }
  
    const resultado = [];
  
    for (let i = 0; i < matriz1.length; i++) {
      const filaResultado = [];
  
      for (let j = 0; j < matriz1[0].length; j++) {
        const suma = matriz1[i][j] + matriz2[i][j];
        filaResultado.push(suma);
      }
  
      resultado.push(filaResultado);
    }
  
    return resultado;
  }
  
  function restaMatrices(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      throw new Error("Las matrices deben tener la misma forma para restarlas.");
    }
  
    const resultado = [];
  
    for (let i = 0; i < matriz1.length; i++) {
      const filaResultado = [];
  
      for (let j = 0; j < matriz1[0].length; j++) {
        const resta = matriz1[i][j] - matriz2[i][j];
        filaResultado.push(resta);
      }
  
      resultado.push(filaResultado);
    }
  
    return resultado;
  }
  
  function multiplicacionMatrices(matriz1, matriz2) {
    if (matriz1[0].length !== matriz2.length) {
      throw new Error("El número de columnas de la matriz 1 debe ser igual al número de filas de la matriz 2 para multiplicarlas.");
    }
  
    const resultado = [];
  
    for (let i = 0; i < matriz1.length; i++) {
      const filaResultado = [];
  
      for (let j = 0; j < matriz2[0].length; j++) {
        let producto = 0;
  
        for (let k = 0; k < matriz2.length; k++) {
          producto += matriz1[i][k] * matriz2[k][j];
        }
  
        filaResultado.push(producto);
      }
  
      resultado.push(filaResultado);
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  const matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const matriz2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
  
  // Sumar matrices
  const resultadoSuma = sumaMatrices(matriz1, matriz2);
  
  // Restar matrices
  const resultadoResta = restaMatrices(matriz1, matriz2);
  
  // Multiplicar matrices
  const resultadoMultiplicacion = multiplicacionMatrices(matriz1, matriz2);
  
  console.log("Resultado de la suma:");
  console.log(resultadoSuma);
  
  console.log("Resultado de la resta:");
  console.log(resultadoResta);
  
  console.log("Resultado de la multiplicación:");
  console.log(resultadoMultiplicacion);