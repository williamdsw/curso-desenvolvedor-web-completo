/**
 * Author:  William
 * Created: 05/04/2019
 */

-- "GROUP BY" = Agrupa valores unicos de acordo com as colunas informadas --
SELECT tempoentrega, 
       COUNT(produtoID) AS total
FROM produtos
GROUP BY tempoentrega