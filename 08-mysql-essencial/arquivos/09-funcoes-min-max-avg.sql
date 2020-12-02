/**
 * Author:  William
 * Created: 05/04/2019
 */

-- "MIN ()" = Retorna o valor minimo de uma coluna numerica --
-- "AS" = Permite atribuir um alias para uma coluna ou operacao / funcao --
SELECT MIN(precounitario) AS menor_preco
FROM produtos;

-- "MAX ()" = Retorna o valor maximo de uma coluna numerica --
-- "AS" = Permite atribuir um alias para uma coluna ou operacao / funcao --
SELECT MAX(precounitario) AS maior_preco
FROM produtos;

-- "AVG ()" = Retorna o valor medio de uma coluna numerica --
-- "AS" = Permite atribuir um alias para uma coluna ou operacao / funcao --
SELECT AVG(precounitario) AS preco_medio
FROM produtos;