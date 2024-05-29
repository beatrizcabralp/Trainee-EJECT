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

//incremento

var incremento = 2;
var decremento = 2;
var stringenum = '2';

console.log(++incremento);

console.log(--decremento);

console.log(stringenum);

console.log(stringenum + incremento);

console.log(+stringenum);

console.log(-stringenum + incremento);

// Qual o resultado da seguinte expressão?

var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var um = 1;
var dois = 2;
var seg = 's';

console.log(um + seg);
console.log(dois+seg);


// Somar a string '200' com o número 50 e retornar 250

var duzentos = 200;
var cinquenta = 50;

console.log(duzentos+cinquenta);

// Incremente o número 5 e retorne o seu valor incrementado

var cinco = 5;

console.log(++cinco);

// Como dividir o peso por 2?
var oitenta = '80';
var unidade = 'kg';
console.log(+oitenta);
var por2 = oitenta/2;
var peso = por2 + unidade; // '80kg'

console.log(peso);

