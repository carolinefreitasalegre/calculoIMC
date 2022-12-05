function calcular() {
    var img = document.getElementById("img")
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const nome = document.getElementById('nome').value;
 
    const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));

    const element = document.getElementById('text-area')


    
    if (imc < 18.5) {
        //ok
        document.getElementById("img").src ="img/baixopeso.png";
        element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e você está abaixo do peso. Bora comer!!!`
         
    } else if (imc < 24.9) {
        //ok
        document.getElementById("img").src ="img/pesonormal.png";
        element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com IMC normal.  Parabéns!!!`
        
    } else if (imc < 29.9) {
        document.getElementById("img").src ="img/sobre.png";
        element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com sobrepeso.  Sinal de alerta!!!`
        
    } else if (imc < 34.9) {
        //ok
        document.getElementById("img").src ="img/obesidadehm.png";
        element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com obesidade. Alerta vermelha!!!`
        
    } else if (imc < 39.9) {
        document.getElementById("img").src ="img/dr.png";
        element.textContent += `Olá ${nome}, seu IMC é de ${imc.toFixed(2)}, e  você está com obesidade mórbida.  Procure já o Dr. Nowzaradan !!!`
     }
    

}
