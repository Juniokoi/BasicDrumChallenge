const setLayout = document.querySelector( '.set' ).children.length;

const button = document.querySelector( );

document.addEventListener( 'keydown', ( event ) => {
  let key = event.key;
  CheckKey( key );
} );


const keyLayout = [
  [ "w", "tom-1" ],
  [ "a", "tom-2" ],
  [ "s", "tom-3" ],
  [ "d", "tom-4" ],
  [ 'j', "crash" ],
  [ "k", "kick-bass" ],
  [ "l", "snare" ],
];



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