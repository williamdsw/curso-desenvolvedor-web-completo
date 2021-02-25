/* Math.random() = 
             * gera numero aleatorio entre 0.000000000000001 ... 0.999999999999999 */
            var randomico = Math.random ();
            
            console.log ("Numero randomico: " + randomico);
            
            /* Multiplicando por 10, pra nao ficar so com "0" */
            var multiplicado = randomico * 10;
            
            console.log ("Numero randomico multiplicado por 10 : " + multiplicado);
            
            /* Math.ceil() = arredonda um numero quebrado para cima 
             *               Nesse caso e util para gerar um numero entre 1 e 10 */
            var arredondado = Math.ceil (multiplicado);
            
            console.log ("Numero randomico multiplicado arredondado : " + arredondado);