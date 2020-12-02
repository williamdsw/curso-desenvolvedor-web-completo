/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Aplicando filtro onde 'precounitario' e igual (=) a '12' --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario = 12;

-- Aplicando filtro onde 'precounitario' e menor (<) a '12' --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario < 12;

-- Aplicando filtro onde 'precounitario' e menor ou igual (<=) a '12' --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario <= 12;

-- Aplicando filtro onde 'precounitario' e maior (>) a '12' --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario > 12;

-- Aplicando filtro onde 'precounitario' e maior ou igual (>=) a '12' --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario >= 12;

-- Aplicando filtro onde 'precounitario' e diferente (<>) de '12' --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario <> 12;

-- Aplicando filtro onde 'precounitario' esta entre (BETWEEN) 5 e (AND) 15 --
SELECT nomeproduto, precounitario, tempoentrega
FROM produtos
WHERE precounitario
BETWEEN 5 AND 15;