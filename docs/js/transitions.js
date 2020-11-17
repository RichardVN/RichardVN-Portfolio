$(document).ready(function () {
    // transition for masthead headers
    $('.ui.masthead .ui.container h1').transition({
        animation: 'fade in',
        duration: '.8s',
        onComplete: () =>  $('.ui.masthead .ui.container h2').transition({
            animation: 'fade in',
            duration: '.6s'
        })
    })

    // fix the following menu when passed
    $(".masthead").visibility({
        once: false,
        onBottomPassed: function () {
            $(".fixed.menu").transition("fade in", "800ms");
        },
        onBottomPassedReverse: function () {
            $(".fixed.menu").transition("fade out");
        },
    });

});

if ($('.secondary.menu').hasClass('hidden')) {
}