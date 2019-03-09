var music = new Audio('../sound/Game Over.mp3');
var state = false;
music.addEventListener('loadeddata', () => {
    document.onkeypress = () => {
        if (!state) {
            music.play()
            .then(_=> state = true)
            .catch(err=>console.log(err));
        }
    }
  // The duration variable now holds the duration (in seconds) of the audio clip 
})