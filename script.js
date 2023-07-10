const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const resultado = document.querySelector('#resultado');

 btn.addEventListener('click', btnonclick);



function btnonclick() {
    const sumainputs = +input1.value + +input2.value;
    resultado.innerText = "Resultado: " + sumainputs;
}

