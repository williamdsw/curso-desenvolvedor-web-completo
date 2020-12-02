/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Adicionando relacionamento entre tabelas adicionando ambas no "FROM" e igualando IDs no "WHERE" --
SELECT nomeproduto, nomefornecedor
FROM produtos, fornecedores
WHERE produtos.fornecedorID = fornecedores.fornecedorID