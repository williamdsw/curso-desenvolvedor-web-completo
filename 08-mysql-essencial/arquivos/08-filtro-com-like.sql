/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Aplicando filtro onde valor 'nomeproduto' contem (LIKE) 'mug' --
-- '%mug' = Aonde termina com 'mug' --
SELECT nomeproduto
FROM produtos
WHERE nomeproduto LIKE '%mug';

-- Aplicando filtro onde valor 'nomeproduto' contem (LIKE) 'mug' --
-- 'brave%' = Aonde comeca com 'brave' --
SELECT nomeproduto
FROM produtos
WHERE nomeproduto LIKE 'brave%';

-- Aplicando filtro onde valor 'nomeproduto' contem (LIKE) 'mug' --
-- '%blend%' = Aonde comeca ou termina com 'blend' --
SELECT nomeproduto
FROM produtos
WHERE nomeproduto LIKE '%blend%';