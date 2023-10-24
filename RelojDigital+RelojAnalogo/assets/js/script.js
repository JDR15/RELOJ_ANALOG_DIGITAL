const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(() => {
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    
    let ampm = hora >= 12 ? "PM" : "AM";
    
    let zonaHoraria = hora % 12 || 12;
    zonaHoraria = zonaHoraria < 10 ? '0' + zonaHoraria : zonaHoraria;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    
    let pantallaReloj = zonaHoraria + ":" + minuto + ":" + segundo + " " + ampm;
    let relojDigital = document.querySelector(".reloj-digital");
    relojDigital.innerHTML = pantallaReloj;
    
}, 1000);
