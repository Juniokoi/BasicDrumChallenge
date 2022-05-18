const numberOfDrums = document.querySelectorAll( '.drum' ).length;
const drumLayout = [
  [ "w", "tom-1" ],
  [ "a", "tom-2" ],
  [ "s", "tom-3" ],
  [ "d", "tom-4" ],
  [ 'j', "crash" ],
  [ "k", "kick-bass" ],
  [ "l", "snare" ],
];
const drumButton = document.querySelectorAll( '.drum' );

for ( let i = 0; i < numberOfDrums; i++ ) {
  drumButton[ i ].addEventListener( "click", () => {
    let buttonInnerText = drumButton[ i ].innerHTML;
    if ( drumLayout[ i ][ 0 ] == buttonInnerText ) {
      PlaySound( drumLayout[ i ][ 1 ] );
      buttonAnimate( drumLayout[ i ][ 0 ] );
    }
  } );

}



// //código não muito bonito abaixo.
// const btnW = document.querySelector( '.w' );
// const btnA = document.querySelector( '.a' );
// const btnS = document.querySelector( '.s' );
// const btnD = document.querySelector( '.d' );
// const btnJ = document.querySelector( '.j' );
// const btnK = document.querySelector( '.k' );
// const btnL = document.querySelector( '.l' );

// btnW.addEventListener( 'click', () => PlaySound( drumLayout[ 0 ][ 1 ] ) );
// btnA.addEventListener( 'click', () => PlaySound( drumLayout[ 1 ][ 1 ] ) );
// btnS.addEventListener( 'click', () => PlaySound( drumLayout[ 2 ][ 1 ] ) );
// btnD.addEventListener( 'click', () => PlaySound( drumLayout[ 3 ][ 1 ] ) );
// btnJ.addEventListener( 'click', () => PlaySound( drumLayout[ 4 ][ 1 ] ) );
// btnK.addEventListener( 'click', () => PlaySound( drumLayout[ 5 ][ 1 ] ) );
// btnL.addEventListener( 'click', () => PlaySound( drumLayout[ 6 ][ 1 ] ) );

// Fim do código feio - 



// Foi descoberto que da pra gerar um For Loop de 
// cada botão  com classe .drum, mesmo tendo vários, 
// logo não foi necessário mais usar estas linhas feias acima.



//Fica atento a quais teclas foram pressionadas, e já executa uma função
document.addEventListener( 'keydown', ( event ) => {
  let key = event.key;
  CheckKey( key );
} );





//Verifica se a tecla pressionada bate com alguma das listas criadas,
// se sim, executa uma função que faz tocar o som
function CheckKey ( keyName ) {
  for ( let i = 0; i < numberOfDrums; i++ ) {
    if ( drumLayout[ i ][ 0 ] == keyName ) {
      PlaySound( drumLayout[ i ][ 1 ] );
      buttonAnimate( drumLayout[ i ][ 0 ] );
    }
  }
};


//Puxa o áudio da pasta /sounds/ e executa. 
function PlaySound ( soundName ) {
  const audio = new Audio( `/sounds/${soundName}.mp3` );
  audio.muted = false; // Duas propriedades necessárias para conseguir
  audio.autoplay = false; // Executar sons em websites sem erro.
  audio.play();
  audio.volume = 0.5;
}

function buttonAnimate ( activeKey ) {
  let buttonPath = document.querySelector( `.${activeKey}` );
  buttonPath.classList.add( 'pressed' );
  setTimeout( () => { buttonPath.classList.remove( 'pressed' ); }, 100 );
  ;
  console.log( activeKey );
}