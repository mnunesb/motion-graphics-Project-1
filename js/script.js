// jQuery - Set DOM ready
$(document).ready(function(){
    var $IsItOn = "on";
    // jQuery - Event handler for onclick
    $("#slider h2").click(function(event){
        // Add/remove CSS class that moves the button
        $("#slider h2").toggleClass("on");
        $("body").toggleClass("toggleBG");
        $("h1 , h3").toggleClass("toggleColor");

        if ($IsItOn === "on") {
            $("img").attr("src", "img/lightbulb-off.png");
            $IsItOn = "off";
            $("#secret").addClass("visible");
            $("#secret").removeClass("hidden");
        }
        else {
            $("img").attr("src", "/img/lightbulb-on.png");
            $IsItOn = "on";
            $("#secret").removeClass("visible");
            $("#secret").addClass("hidden");
        }
    });
});