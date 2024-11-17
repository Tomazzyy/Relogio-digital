const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let hr = dateToday.getHours();


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})