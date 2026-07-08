function nextPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    // Switch pages
    page1.classList.remove('active');
    page2.classList.add('active');

    const bgSong = document.getElementById('bg-song');
    const voiceRecord = document.getElementById('voice-recording');

    // 1. Play background music at exactly 10% volume
    bgSong.load();
    bgSong.volume = 0.1; // 10% volume
    bgSong.play().catch(error => console.log("Music blocked or missing:", error));

    // 2. Play your apology recording after 3 seconds
    setTimeout(() => {
        voiceRecord.load();
        voiceRecord.volume = 1.0; // Max digital volume for absolute clarity
        
        // Optional: Drop music slightly lower (to 5%) while you are speaking so you are crystal clear
        bgSong.volume = 0.05; 
        
        voiceRecord.play().catch(error => console.log("Voice recording blocked or missing:", error));
        
        // Optional: Bring background music back up to 10% once your recording finishes
        voiceRecord.onended = () => {
            bgSong.volume = 0.1;
        };
    }, 3000); 
}

function prevPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    page2.classList.remove('active');
    page1.classList.add('active');
}