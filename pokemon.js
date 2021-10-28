

// 1 need a buttondown function to clear the screen.. or possibly just wipe the text.

// 2. second function that pulls up new display?

// 3. third function that pulls the pokemon info and displays it.

const soundBtn = document.querySelector('.play-sound-btn');
let myAudio = document.querySelector('#audio');
soundBtn.addEventListener('click', ()=>{
  myAudio.play()
});

var url = "https://pokeapi.co/api/v2/pokemon/";
var whichPokemon;
var textbox;

function cleartext(){
  var textbox = document.getElementById("textbox");
  textbox.innerHTML = "";
}


function searchPokemon() {
  whichPokemon = document.getElementById("searchbar").value;
  whichPokemon = whichPokemon.toLowerCase();
  url = "https://pokeapi.co/api/v2/pokemon/"
  url += whichPokemon; // url = url + pokemon
  fetch(url)
  .then(response => response.json())
  .then(pokemon => {
      var pname = document.getElementById('pname');
      var sprite = document.getElementById('sprite');
      var type = document.getElementById('type');
      var moves = document.getElementById('moves');
      var move1 = document.getElementById('move1');
      var move2 = document.getElementById('move2');
      var move3 = document.getElementById('move3');
      var move4 = document.getElementById('move4');
      moves.innerHTML = '<p>'+" Your "+  pokemon.name + " has the following moves:"
      move1.innerHTML = pokemon.moves[1].move.name;
      move2.innerHTML = pokemon.moves[2].move.name;
      move3.innerHTML = pokemon.moves[3].move.name;
      move4.innerHTML = pokemon.moves[4].move.name;
      pname.innerHTML = '<p>' + pokemon.name +'</p>';
      sprite.innerHTML += "<img src=" + pokemon.sprites.front_default + ">";
      type.innerHTML = pokemon.types[0].type.name + " type pokemon";
      //console.log(pokemon);
  }).catch(err => console.log(err))
}
