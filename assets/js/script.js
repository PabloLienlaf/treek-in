$(function () {

    //Función para que la hamburguesa pueda desplegarse al hacer clic
    $('#menu').click(function () {
        if ($(this).is(':checked')) {
            $(".navigation__container").animate({
                'max-height': '100%'

            });
        } else {
            $(".navigation__container").animate({
                'max-height': '0'
            });
        }

    });

});
