"use strict";

$(function () {
    var carousel = $('.carousel');
    if (carousel) {
        // Aplicando configuracoes
        carousel.carousel({
            interval: 3000,
            pause: 'null'
        });
    }
});