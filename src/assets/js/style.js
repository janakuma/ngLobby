$(function() {
    $('.bro-gnb li > a').on('mouseenter', function() {


        var menu_posX = $(this).offset().left;

        console.log(menu_posX);

        $('#menuBar').css({
            left : menu_posX.left + 'px'
        })
    })
})