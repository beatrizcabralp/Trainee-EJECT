var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'


//numeros

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'


//funcoes

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado.toString();
  //"function areaQuadrado(lado) {
  //  return lado * lado;
  //}"
  
  areaQuadrado.length; // 1

  
//objetos do dom

<a class="btn">Clique</a>

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})


