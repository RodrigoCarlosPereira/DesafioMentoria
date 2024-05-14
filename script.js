
const buttonVoltar = document.getElementById("voltar");

const buttonPlay = document.querySelector("#play");

const buttonPause = document.getElementById("pause");

const buttonAvancar = document.getElementById("avancar");

let intervalo;




const music = new Audio('./assets/Sunny (320).mp3');

function updateTempo(){
    const tempoAtual = document.getElementById('tempoAtual');
    const progressBar = document.getElementById("progressBar");
    const progresso = (music.currentTime/music.duration) * 100;
    tempoAtual.textContent = formatTempo((music.currentTime / music.duration) * 100);
    progressBar.value = progresso;
}


function formatTempo(sec){
    const minutos = Math.floor(sec / 60);
    const segundos = Math.floor(sec % 60);
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

music.addEventListener('loadedmetadata', function(){
    tempoTotal.textContent = formatTempo(music.duration);
})

function play(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    music.play();
}

intervalo = setInterval(updateTempo, 1000);

function pause(){
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    music.pause();
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
