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

    var height = $(document).height()
    var bins = 5
    var curScroll = $(document).scrollTop()
    var activeScreen = Math.ceil(bins * (curScroll - 0) / (height - 0))+1
    // (np.round((B * (X - xmin) / (xmax - xmin)))

    $("nav li").removeClass("active");
    $("nav li:nth-child(" + activeScreen + ")").addClass("active");
});

$(document).ready(function () {
    var name = "johnjdilger";
    var domain = "gmail";
    $("#target").attr("href", "mailto:" + name + "@" + domain + ".com");
});