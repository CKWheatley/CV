// JavaScript Document
$(document).ready(() => {
    $("#entrybutton").click(() => {
        $("#entryprompt").fadeOut(1000);
        // dont fade out but do the good afternoon / morning thing with a button that scrolls to my profile
        $("#main").fadeIn(1000).removeClass("hidden");
    })
    $(".cardlink").click(() => {
        $("#cards").fadeIn(1000).removeClass("hidden");
    })
    $("#contactbutton").click(() => {
        $("#contactform").removeClass("hidden");
        $(".contactoption").addClass("hidden");
    })
    $("#closeemail").click(() => {
        $("#contactform").addClass("hidden");
        $(".contactoption").removeClass("hidden");
    })
    $('.selectable').click(() => {
        $('.selectable').addClass('selected').siblings('.selected').removeClass('selected');
    })
    // sort this out ^^
})
function tab_click(){
    function action(value){
        value.slideDown(500).siblings().slideUp(500);
    }
    $("#profiletab").click(() => {
        action($("#profile"));
    });
    $("#personalitytab").click(() => {
        action($("#personality"));
    });
    $("#educationtab").click(() => {
        action($("#education"));
    });
    $("#experiencetab").click(() => {
        action($("#experience"));
    });
    $("#contacttab").click(() => {
        action($("#contact"));
        $(".contactfadeout").delay(1000).fadeOut(2000);
        $(".contactfadein").delay(3000).fadeIn(1000);
        document.getElementById("footballpic").style.animation = "football 2s 0.2s forwards";
        var tempname = $("#tempname").val();
        let name = tempname;
        $("#name").val(name);
    });
};
tab_click();

