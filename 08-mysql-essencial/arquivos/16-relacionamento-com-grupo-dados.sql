/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Utilizando agrupamento de dados (GROUP BY) com relacionamento (INNER JOIN) --
SELECT nomecategoria AS nome_categoria,
       COUNT(produtoID) AS total
FROM produtos
INNER JOIN categorias ON (produtos.categoriaID = categorias.categoriaID)
GROUP BY produtos.categoriaID
ORDER BY total DESC;