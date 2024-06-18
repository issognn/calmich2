let expression = '';

// Función para agregar números y operadores a la expresión
function appendInput(value) {
  expression += value;
  document.getElementById('screen').value = expression;
}

// Función para borrar la pantalla de la calculadora
function clearScreen() {
  expression = '';
  document.getElementById('screen').value = expression;
}

// Función para calcular el resultado de la expresión
function calculate() {
  try {
    expression = eval(expression); // Evalúa la expresión y calcula el resultado
    document.getElementById('screen').value = expression;
  } catch (error) {
    document.getElementById('screen').value = 'Error'; // Maneja los errores, como división por cero
  }
}
