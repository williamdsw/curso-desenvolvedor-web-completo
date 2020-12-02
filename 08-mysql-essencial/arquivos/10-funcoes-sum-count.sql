/**
 * Author:  William
 * Created: 05/04/2019
 */

-- "COUNT ()" = Retorna o numero de registros de determinda coluna --
-- "SUM ()" = Retorna a soma de todos registros de determinada coluna numerica  --
-- "YEAR ()" = Retorna o ano de determinada coluna de data --
SELECT COUNT(pedidoID) AS numero_pedidos, 
       SUM(valor_pedido) AS valor_total
FROM pedidos
WHERE YEAR(data_pedido) = '2006'