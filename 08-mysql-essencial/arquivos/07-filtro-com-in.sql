/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Aplicando filtro onde valor 'tempoentrega' e (IN) 5 ou 3 --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE tempoentrega 
IN (5, 30);

-- Aplicando filtro onde valor 'tempoentrega' nao e (NOT IN) 5 ou 3 --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE tempoentrega 
NOT IN (5, 30);