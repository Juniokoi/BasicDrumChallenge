const setLayout = document.querySelector( '.set' ).children.length;
const keyLayout = [
  [ "w", "tom-1" ],
  [ "a", "tom-2" ],
  [ "s", "tom-3" ],
  [ "d", "tom-4" ],
  [ 'j', "crash" ],
  [ "k", "kick-bass" ],
  [ "l", "snare" ],
];

//código não muito bonito abaixo.
const btnW = document.querySelector( '.w' );
const btnA = document.querySelector( '.a' );
const btnS = document.querySelector( '.s' );
const btnD = document.querySelector( '.d' );
const btnJ = document.querySelector( '.j' );
const btnK = document.querySelector( '.k' );
const btnL = document.querySelector( '.l' );

btnW.addEventListener( 'click', () => PlaySound( keyLayout[ 0 ][ 1 ] ) );
btnA.addEventListener( 'click', () => PlaySound( keyLayout[ 1 ][ 1 ] ) );
btnS.addEventListener( 'click', () => PlaySound( keyLayout[ 2 ][ 1 ] ) );
btnD.addEventListener( 'click', () => PlaySound( keyLayout[ 3 ][ 1 ] ) );
btnJ.addEventListener( 'click', () => PlaySound( keyLayout[ 4 ][ 1 ] ) );
btnK.addEventListener( 'click', () => PlaySound( keyLayout[ 5 ][ 1 ] ) );
btnL.addEventListener( 'click', () => PlaySound( keyLayout[ 6 ][ 1 ] ) );

// Fim do código feio

document.addEventListener( 'keydown', ( event ) => {
  let key = event.key;
  CheckKey( key );
} );






function CheckKey ( keyName ) {
  for ( let i = 0; i < setLayout; i++ ) {
    if ( keyLayout[ i ][ 0 ] == keyName ) {
      PlaySound( keyLayout[ i ][ 1 ] );
    }
  }
};

function PlaySound ( soundName ) {
  const audio = new Audio( `/sounds/${soundName}.mp3` );
  audio.muted = false;
  audio.autoplay = false;
  audio.play();
  audio.volume = 0.5;
}