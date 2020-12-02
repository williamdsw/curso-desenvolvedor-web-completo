/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Adicionando relacionamentos entre tres tabelas com "INNER JOIN" --
SELECT nomeproduto AS nome_produto, 
       nomefornecedor AS nome_fornecedor, 
       nomecategoria AS nome_categoria
FROM produtos
INNER JOIN fornecedores ON (produtos.fornecedorID = fornecedores.fornecedorID)
INNER JOIN categorias ON (produtos.categoriaID = categorias.categoriaID)