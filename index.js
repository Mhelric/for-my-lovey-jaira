function nextPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    page1.classList.remove('active');
    page2.classList.add('active');
}

function prevPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    page2.classList.remove('active');
    page1.classList.add('active');
}