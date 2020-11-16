$(document).ready(function () {
    // transition for top menu
    $('.ui.masthead .ui.container h1').transition({
        animation: 'fade in',
        duration: '1s',
        onComplete: () =>  $('.ui.masthead .ui.container h2').transition({
            animation: 'fade in',
            duration: '1s'
        })
    })

    // fix the following menu when passed
    $(".masthead").visibility({
        once: false,
        onBottomPassed: function () {
            $(".fixed.menu").transition("fade in");
        },
        onBottomPassedReverse: function () {
            $(".fixed.menu").transition("fade out");
        },
    });

});

if ($('.secondary.menu').hasClass('hidden')) {
}