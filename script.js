function Vi(){
    let n1, n2;
    let resultado = document.getElementById("re1");

    n1 = Number(window.prompt("Informe o primeiro número: "));
    n2 = Number(window.prompt("Informe o segundo número: "));

    if(n1 > n2){
        resultado.innerHTML = (n2 + " é menor que " + n1);
    } else if (n2 > n1){
        resultado.innerHTML = (n1 + " é menor que " + n2);
    } else {
        resultado.innerHTML = ("Os números são iguais");
    }
}   


function pi(){
    let sexo, altura, peso;
    let resultado = document.getElementById("re2");

    sexo = window.prompt("Informe seu sexo [M/F]: ");
    altura = parseFloat(window.prompt("Informe sua altura (exemplo: 1.80): "));

    if (sexo == 'M'){
        peso = (72.7 * altura) - 58;
        resultado.innerHTML = ("Seu peso ideal é: " + peso.toFixed(2) + "kg.");
    } else if (sexo == 'F'){
        peso = (62.1 * altura) - 44.7;
        resultado.innerHTML = ("Seu peso ideal é " + peso.toFixed(2) + "kg.");
    } else {
        alert("Informações Inválidas, Informe a partir do exemplo.");
    }
}

function mt(){
    let n1, n2, n3;
    let resultado = document.getElementById("re3");

    n1 = Number(window.prompt("Informe o 1er número: "));
    n2 = Number(window.prompt("Informe o 2do número: "));
    n3 = Number(window.prompt("Informe o 3ero número: "));

    let menor = Math.min(n1, n2, n3);
    resultado.innerHTML = `O menor numero é ${menor}.`;
}

function poi(){
    let num = parseInt(window.prompt("Informe um número: "));
    let resultado = document.getElementById("re4");
    
    if (num >= 0){
        if (num % 2 == 0){
            resultado.innerHTML = `O número ${num} é par.`;
        } else {
            resultado.innerHTML = `O número ${num} é ímpar.`;
        }
    } else {
        resultado.innerHTML = `O valor absoluto de ${num} e ${num * -1}`;
    }
}

function didt(){
    let num = parseInt(window.prompt("Informe um número: "));
    let resultado = document.getElementById("re5");

    if ((num % 2 == 0) && (num % 3 == 0)){
        resultado.innerHTML = `O número ${num} é divisível por 2 e por 3.`;
    } else {
        resultado.innerHTML = `O número ${num} não é divisível por 2 e 3.`;
    }
}

function dids(){
    let num = parseInt(window.prompt("Informe um número: "));
    let resultado = document.getElementById("re6");

    if ((num % 2 == 0) && (num % 7 == 0)){
        resultado.innerHTML = `O número ${num} é divisível por 2 e por 7.`;
    } else if (num % 2 == 0){
        resultado.innerHTML = `O número ${num} é divisível por 2, porém não por 7.`;
    } else if (num % 7 == 0){
        resultado.innerHTML = `O número ${num} é divisível por 7, porém não por 2.`;
    } else {
        resultado.innerHTML = `O número ${num} não é divisível por 2 nem 7.`;
    }
}

function ds(){
    let dia = Number(window.prompt("Informe um número entre 1 e 7: "));
    let resultado = document.getElementById("re7");

    switch (dia){
        case 1:
            resultado.innerHTML = `O dia ${dia} é Domingo`;
            break;

        case 2:
            resultado.innerHTML = `O dia ${dia} é Segunda-Feira`;
            break;

        case 3:
            resultado.innerHTML = `O dia ${dia} é Terça-Feira`;
            break;

        case 4:
            resultado.innerHTML = `O dia ${dia} é Quarta-Feira`;
            break;

        case 5:
            resultado.innerHTML = `O dia ${dia} é Quinta-Feira`;
            break;

        case 6:
            resultado.innerHTML = `O dia ${dia} é Sexta-Feira`;
            break;

        case 7:
            resultado.innerHTML = `O dia ${dia} é Sábado`;
            break;
    }
}

function sp(){
    let resultado = document.getElementById("re8");
    let pares = 0;

    for (let num = 0; num < 21; num++){
        if (num % 2 == 0){
            pares += num;
        }
    }

    resultado.innerHTML = `A somatoria dos números pares de 1 a 20 é ${pares}`;
 
}

function ta(){
    let resultado = document.getElementById("re9");
    let num = parseInt(window.prompt("Informe um número: "));
    let tab = '';

    for (let i = 1; i < 11; i++){
        tab += num + " x " + i + " = " + num * i + "<br />";
        resultado.innerHTML = tab;
    }
}

function fa(){
    let apresentacao = document.getElementById("re10");
    let numeroRecebido = parseInt(window.prompt("Informe um número: "));
    let resultado = numeroRecebido;
    let primeiroMultiplicador = numeroRecebido - 1;

    for (let i = primeiroMultiplicador; i > 1; i--){
        resultado *= i;
    }
    
    apresentacao.innerHTML = resultado;

}

