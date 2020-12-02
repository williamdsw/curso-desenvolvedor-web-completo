/**
 * Author:  William
 * Created: 05/04/2019
 */

-- "HAVING" = Permite adicionar filtros depois de um "GROUP BY" --
SELECT tempoentrega, 
       COUNT(produtoID) AS total
FROM produtos
GROUP BY tempoentrega
HAVING total >= 4
ORDER BY total ASC