/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Adicionando relacionamentos entre tabelas com "INNER JOIN (interno)" --
-- E igualando IDs no "ON" --
SELECT nomeproduto AS nome_produto, 
       nomefornecedor AS nome_fornecedor
FROM produtos
INNER JOIN fornecedores ON (produtos.fornecedorID = fornecedores.fornecedorID)