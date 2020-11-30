window.addEventListener('DOMContentLoaded', (event) => {

    // Navigation toggle
    
    $('#nav__toggle').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#nav__content').removeClass('active');
        } else {
            $(this).addClass('active');
            $('#nav__content').addClass('active');
        }
    });

});