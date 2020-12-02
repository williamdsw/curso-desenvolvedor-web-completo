"use strict";

/* Permite passar valores 'default' para parametros caso nada seja passado */
function jogoEliminatorias (time1 = "Brasil", time2 = "Argentina")
{
    console.log (`Hoje tem ${time1} x ${time2}`);
}

jogoEliminatorias ();
jogoEliminatorias ("Colombia");
jogoEliminatorias ("Peru", "Uruguai");