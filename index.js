function nextPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    // Switch the notebook page
    page1.classList.remove('active');
    page2.classList.add('active');

    // Get audio elements
    const bgSong = document.getElementById('bg-song');
    const voiceRecord = document.getElementById('voice-recording');

    // 1. Play background song immediately on loop
    bgSong.volume = 0.4; // Set background music slightly softer so your voice is clear
    bgSong.play().catch(error => console.log("Audio playback faded or blocked:", error));

    // 2. Play the voice recording after a 3-second delay (3000 milliseconds)
    setTimeout(() => {
        voiceRecord.volume = 1.0; // Full volume for your voice
        voiceRecord.play().catch(error => console.log("Voice recording blocked:", error));
    }, 3000); 
}

function prevPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    page2.classList.remove('active');
    page1.classList.add('active');
}