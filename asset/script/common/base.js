"use strict";

$(function () {
    console.log('test jquery');
    $('.l-nav__burger').click(function(){
        $('html').toggleClass('show-nav');
    });
});
