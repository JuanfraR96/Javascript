   
      function CalcularIMC(altura, peso) 
      {
        altura = Math.round(altura) / 100;
        peso = Math.round(peso);
        
        let indice = (peso / Math.pow(altura, 2));
        let resultado = "";
            if (indice < 21)
            {
              resultado = "Peso inferior al normal.";
            }
            else if (indice >= 21 && indice < 25)
            {
              resultado = "Peso Normal.";
            }
            else if (indice >= 25 && indice < 30)
            {
              resultado = "Peso superior al normal.";
            }
            else
            {
              resultado = "Obesidad";
            }		   
        
        return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
      }
 
      function MostrarResultadoIMC (altura, peso, indice)
      {
        let mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n  " + indice;
        alert (mensaje);
      }	
 
      let altura = parseInt(prompt("Indique su altura en centímetros:", ""));
      let peso = parseInt(prompt("Indique su peso en kilógramos:", ""));
 
      let resultado = CalcularIMC(altura, peso);
      MostrarResultadoIMC(altura, peso, resultado); 