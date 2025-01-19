
// Toggles dark mode on the webpage
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


//  toggle between play and pause 
function toggleAudio(audioId) {
    // Get the audio element by its ID
    var audioElement = document.getElementById(audioId);

    // Check if the audio is already playing
    if (audioElement.paused) {
        // If it is paused, play it
        audioElement.play();

        // Change button text to "Pause"
        document.querySelector(`#${audioId}`).previousElementSibling.textContent = 'Pause Song';
    } else {
        // If it is playing, pause it
        audioElement.pause();

        // Reset the audio to the beginning
        audioElement.currentTime = 0;

        // Change button text to "Play"
        document.querySelector(`#${audioId}`).previousElementSibling.textContent = 'Play Song';
    }

    // Pause and reset all other audios
    var audios = document.querySelectorAll('audio');
    audios.forEach(function(audio) {
        if (audio.id !== audioId) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}
