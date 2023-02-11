(function ($) {

    "use strict";

    /* *********************************************************
        Easy selector function
    ********************************************************* */

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /* *********************************************************
        Preloader
    ********************************************************* */

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    /* *********************************************************
        Close navbar on click
    ********************************************************* */

    $(document).on('click', function () {
        $('.collapse').collapse('hide');
    })

}(jQuery))