
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!")
}

function redirecionar (){
    window.open("https://github.com/darkson10/aula_javascript")
    //window.location.href = "https://github.com/darkson10/aula_javascript"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar op mouse"
    //alert("Trocar texto")
}

function voltar (elemento){
   elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma (n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true
    }
    else{
        validar = false
    }
    return validar;

}
var idade = prompt("qual sua idade?");
console.log(validaIdade (idade));

//alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <=5; count ++){
    alert(count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count +1;
}
*/

/*
var idade = prompt("qual sua idade?");
if (idade>=18){
    alert("maior de idade");
}
else{
    alert("Menor de idade");
}
*/

//var frutas = [{nome:"Maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


//var fruta = {nome:"Maçã", cor:"vermelha"}
//console.log(fruta);
//alert(fruta.cor);

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


/*var nome = "Dimas Costa";
var idade = 27;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2)
console.log(nome);
console.log(idade * idade2);
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil"));
*/