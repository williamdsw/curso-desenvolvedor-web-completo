/**
 * Author:  William
 * Created: 05/04/2019
 */

-- Criando banco de dados --
CREATE SCHEMA `agenda`;

-- Criando tabela --
CREATE TABLE `contatos`
(
    `contatoID` INT(11) NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(15) NOT NULL,
    `ddd` VARCHAR(3) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `foto` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`contatoID`)
);