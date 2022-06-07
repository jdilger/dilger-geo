var s = skrollr.init({
    mobileCheck: function () {
        return false;
    },
    forceHeight: false,
});

$("nav li").click(function () {
    var destination = $(this).data("screen");
    $("html, body").animate(
        {
            scrollTop: $(destination).offset().top,
        },
        2000,
        "easeOutCubic"
    );
});
$(document).scroll(function () {
    var activeScreen = Math.round($(document).scrollTop() / $(window).height()) + 1;
       var t =Math.round(Math.log($(window).height())/Math.log($(document).scrollTop()) ) + 1;
        // Math.round($(document).scrollTop() / $(window).height()) + 1;
    console.log(t,'t')
    console.log($(document).scrollTop() ,'doc scroll top')
    console.log($("nav li").scrollTop() ,'"nav li" scroll top')
    console.log($(window).height(),'window height')
    console.log(Math.floor( $(window).height()/activeScreen ),'activeScreen /window height')

    $("nav li").removeClass("active");
    $("nav li:nth-child(" + activeScreen + ")").addClass("active");
});

$(document).ready(function () {
    var name = "johnjdilger";
    var domain = "gmail";
    $("#target").attr("href", "mailto:" + name + "@" + domain + ".com");
});