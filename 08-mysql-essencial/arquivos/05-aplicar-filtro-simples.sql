/**
 * Author:  William
 * Created: 05/04/2019
 */

-- "WHERE" = Aplica um filtro --
-- "AND" = Aplica outro filtro --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE tempoentrega = 5
AND precounitario = 12