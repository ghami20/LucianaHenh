document.addEventListener('DOMContentLoaded', (event) => {
    var video = document.querySelector('.video-background');
    var startTime = 50;  // Tiempo de inicio en segundos
    var loopStartTime = 50;  // Inicio del bucle en segundos
    var loopEndTime = 60;    // Fin del bucle en segundos

    video.currentTime = startTime;

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= loopEndTime) {
            video.currentTime = loopStartTime;
        }
    });

    video.addEventListener('seeked', function() {
        if (video.currentTime < loopStartTime) {
            video.currentTime = loopStartTime;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#menu a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 64,  // Ajuste para compensar el navbar fijo
                behavior: 'smooth'
            });
        });
    });
});
