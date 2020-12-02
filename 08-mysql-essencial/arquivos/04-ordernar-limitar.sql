/**
 * Author:  William
 * Created: 05/04/2019
 */

-- "ORDER BY" = Ordernar por coluna informada --
-- "ASC" = De forma ascendente --
-- "DESC" = De forma decrescente --
-- "LIMIT" = Limita por 'n' registros --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
ORDER BY precounitario ASC, tempoentrega DESC
LIMIT 10;