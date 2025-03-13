const toggleButton1 = document.getElementById('suma');
const pestaña1 = document.getElementById('pestaña1');

const toggleButton2 = document.getElementById('resta');
const pestaña2 = document.getElementById('pestaña2');

const toggleButton3 = document.getElementById('mult');
const pestaña3 = document.getElementById('pestaña3');

const toggleButton4 = document.getElementById('div');
const pestaña4 = document.getElementById('pestaña4');

toggleButton1.addEventListener('click', () => {
  pestaña1.classList.toggle('pestaña-visible1');
  pestaña1.classList.toggle('pestaña-oculta1');
});

toggleButton2.addEventListener('click', () => {
  pestaña2.classList.toggle('pestaña-visible2');
  pestaña2.classList.toggle('pestaña-oculta2');
});

toggleButton3.addEventListener('click', () => {
  pestaña3.classList.toggle('pestaña-visible3');
  pestaña3.classList.toggle('pestaña-oculta3');
});

toggleButton4.addEventListener('click', () => {
  pestaña4.classList.toggle('pestaña-visible4');
  pestaña4.classList.toggle('pestaña-oculta4');
});

function sumArit(){

    const suma1 =document.getElementById('n1');
    const suma2 =document.getElementById('n2');

    const result1 = suma1 + suma2

    return result1.innerText= "El resultado de la suma es:" + " " + result1
}
function restaArit(){
    const resta1 =document.getElementById('n3');
    const resta2 =document.getElementById('n4');

    const result2 = resta1 - resta2

    return result2.innerText= "El resultado de la resta es:" + " " + result2
}
function multArit(){
    const mult1 =document.getElementById('n5');
    const mult2 =document.getElementById('n6');

    const result3 = mult1 * mult2

    return result3.innerText= "El resultado de la multiplicación es:" + " " + result3
}
function divArit(){
    const div1 =document.getElementById('n7');
    const div2 =document.getElementById('n8');

    const result4 = div1 * div2

    return result4.innerText= "El resultado de la division es:" + " " + result4
}