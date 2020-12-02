/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Excluindo registro --
DELETE FROM estados
WHERE estadoID = 31;

-- Excluindo 1 ou mais registros --
DELETE FROM estados
WHERE estadoID IN (31, 32, 33);