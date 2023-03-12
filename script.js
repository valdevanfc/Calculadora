function inserirValor(numero) {
    const num = document.getElementById('caixa_resultado').innerHTML;
    document.getElementById('caixa_resultado').innerHTML = num + numero;
}

function apagar_resultado() {
    document.getElementById('caixa_resultado').innerHTML = "";
}

function apagar() {
    const result = document.getElementById('caixa_resultado').innerHTML;
    document.getElementById('caixa_resultado').innerHTML = result.substring(0, result.length - 1);
}

function efetuarIgualdade() {
    const valor = document.getElementById('caixa_resultado').innerHTML;
    if (valor) {
        document.getElementById('caixa_resultado').innerHTML = eval(valor).toFixed(2);
    }
}
