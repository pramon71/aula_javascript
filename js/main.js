/* Manipulando Elementos da Página */
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por Clicar</strong>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    //alert("Trocar texto.");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui.";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

function load() {
    alert("Página carregada!");
}

function onChange(elemento) {
    console.log(elemento.value);
}
/*Desenvolva páginas web com JavaScript
// Funções
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

function validarIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite uma idade: ");
console.log(validarIdade(idade));

console.log(soma(3, 3));
console.log(setReplace("O(A) girafa é grande.", "girafa", "rato"));
*/

/* Condicionais, laços de repetição e Date 
// Date
console.log("Trabalhando com Datas")
var d = new Date();
console.log(d);
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());

// Laços de Repetição
console.log("Trabalhando com Laços de Repetição")
var count = 0;
while(count < 5) {
    console.log(count);
    count++;
}

for(var i = 0; i < 5; i++) {
    console.log(i);
}

//Condicionais
console.log("Trabalhando com Condicionais")
var idade = prompt("Qual sua idade? ");

if(idade >= 18) {
    console.log("Sua idade: " + idade + ". Maior de Idade");
} else {
    console.log("Sua idade: " + idade + ". Menor de idade.");
}
*/

/* Array de Dicionário
frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
*/

/* Operações com Dicionário 
fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

/* Operações com Arrays
var lista = ["Maçã", "Pêra", "Laranja"];
lista.push("Uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/* Operação com Variáveis - Inteiro e String
var nome = "João Gilberto";
var n1 = 27;
var n2 = 10;
var frase = "O Tosco é o pior presidente do mundo."
*/
/* Chamada da função alert() */
//alert(nome + " tem " + n1 + " anos.");
/*
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Tosco", "Satan Goss"));
console.log(frase.toLocaleUpperCase());
console.log(frase.toLocaleLowerCase());
*/