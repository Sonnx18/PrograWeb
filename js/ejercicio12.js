function convertir() {
    var pesos = document.getElementById("PPPP").value;
    var resultado = document.getElementById("DDDD");
    var dolares = pesos * 0.055;
    resultado.value = dolares.toFixed(2);
    return false;
}