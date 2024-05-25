var nome ='Ana';
var idade = 22;
var falaingerus = true;

console.log(nome, idade, falaingerus);

var preco= 25;
var quantidade = 7;
var total = preco * quantidade;

console.log(total);

var sobrenome = 'Beatriz'
     var cidade = 'Natal';

console.log(sobrenome, cidade);

var semdefinir;

console.log(semdefinir);

/*****exercicio */

/* Declarar uma variavel com meu nome*/

var meunome = 'Ana Beatriz';
console.log(meunome);

/* Declarar uma variavel com minha idade*/

var minhaidade = 22;
console.log(minhaidade);

/* Declarar uma variavel com minha comida fav e nao atribuir valor*/

var comidafav;

/* Atibuir valor a sua comida*/

comidafav = 'batata';
console.log(comidafav);

/*Declarar 5 variaveis diferentes sem valores*/

var idiomas;
var flores;
var paises;
var musicas;
var comidas;

//************Tipos de variáveis************* */

var nomee = 'Anya'; /*string*/

var numero = 22; /*number*/

var verdade = true; /*boolean*/

var indefinida; /*true or false*/

var comida = null; /*null*/

var simbolo = Symbol(); /*symbl*/

var objeto = {}; /*object*/

/********verificando o tipo de dado */

var nomeee = 'André';
console.log(typeof nomeee);
// retorna string

//juntar variaveis sem quebrar demais

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frase2);
