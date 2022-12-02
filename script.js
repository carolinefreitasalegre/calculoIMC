function calcular() {

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const nome = document.getElementById('nome').value;
 
    const imc = peso / (altura * altura)

    const element = document.getElementById('text-area')


     if (imc < 18.5) {
         element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e você está magro. Bora comer!!!`
     } else if (imc < 24.9) {
         element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com IMC normal.  Parabéns!!!`
     } else if (imc < 29.9) {
         element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com sobrepeso.  Cuide-se!!!`
     } else if (imc < 23.9) {
         element.textContent +=  `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com obesida.  Cuide-se!!!`
     } else if (imc < 24.9) {
         element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com obesidade mórbida.  Cuide-se!!!`
     }
    

}