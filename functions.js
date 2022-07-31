// JavaScript Document
$(document).ready(() => {
    $("#entrybutton").click(() => {
        $("#entryprompt").fadeOut(0);
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
    $('#mailer-button').click(() =>{
        let a = $('#mailer-client')
        a.removeClass('hidden')
        let en = $('#name').val();
        let ec = $('#company').val();
        let jt = $('#jtitle').val();
        let pay = $('#pay').val();
        let jd = $('#jdescription').val();
        let jl = $('#jlocation').val();
        let ex = $('#extrainfo').val();
        let mailer = `mailto:ckwheatley15@gmail.com?subject=Job Offer From Github Pages (dont change subject please)
        &body=Employer Name: ${en}%0D%0ACompany: ${ec}%0D%0AJob Title: ${jt}%0D%0APay: ${pay}%0D%0AJob Description: ${jd}%0D%0AJob Location: ${jl}%0D%0AFurther Comments: %0D%0A%0D%0A${ex}
        `
        a.attr('href', mailer)
    })
    $('#mailer-client').click(() => {
        $('#mailer-client').html("").addClass('hidden')
    })
    window_width()
})
function window_width(){
    if($(window).width() < 800){
        $('.selectable').click(() => {
            $(window).scrollTop(0)
        })
    }
}
// get this function to work on resize
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
$(window).resize(() => {
    window_width()
})
// add js to resize the section 2 for the experience part so it fits

