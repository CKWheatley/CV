$(document).ready(() => {
    $("#entrybutton").click(() => {
        $("#entryprompt").fadeOut(0);
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
// mail function
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
        let mailer = `mailto:ckwheatley15@gmail.com?subject=Job Offer From Github Pages
        &body=Employer Name: ${en}%0D%0ACompany: ${ec}%0D%0AJob Title: ${jt}%0D%0APay: ${pay}%0D%0AJob Description: ${jd}%0D%0AJob Location: ${jl}%0D%0AFurther Comments: %0D%0A%0D%0A${ex}
        `
        a.attr('href', mailer)
    })
    $('#mailer-client').click(() => {
        $('#mailer-client').html("").addClass('hidden')
    })
    window_width()
})
// nav bar sticky
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main')
    let offset = main.offsetTop - nav.offsetTop
    if (window.scrollY < 120) {
        nav.style.top = (150 - window.scrollY) + "px"
    } else {
        nav.style.top = 20 + "px";
    }
  });


$(".menu-button").click(() => {
    $("#mobmenu").slideDown(400);
    $("#mobmenu").css("display", "flex");
    $("#mobmenu").css("flex-flow", "column");
})

function close_menu(){
    let closeables = [$(".profiletab"),$(".personalitytab"),$(".educationtab"),$(".experiencetab"),$(".contacttab"),$("#close-menu")]
    for(i in closeables){
        $(closeables[i]).click(() => {
            $("#mobmenu").slideUp(400);
        })
    }
}
close_menu()

function window_width(){
    if($(window).width() < 800){
        $('.selectable').click(() => {
            $(window).scrollTop(0)
        })
    }else{
        var selectables = document.querySelectorAll('.selectable');
        selectables.forEach(function(selectable) {
            selectable.addEventListener('click', function() {
                $(".selected").removeClass("selected")
                this.classList.add("selected")
          })
        })
    }
}
function action(fader){
    const colour = fader.css('background-color');
    fader.fadeIn(600).siblings().fadeOut(400);
    $('.tab').css('border', 'solid 3px ' + colour)
}
action($("#profile"));
function tab_click(){
    $(".profiletab").click(() => {
        action($("#profile"));
    });
    $(".personalitytab").click(() => {
        action($("#personality"));
    });
    $(".educationtab").click(() => {
        action($("#education"));
    });
    $(".experiencetab").click(() => {
        action($("#experience"));
    });
    $(".contacttab").click(() => {
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
$("#lanlist").click(() => {
    $(".certviewer").removeClass("hidden")
})
// add js to resize the section 2 for the experience part so it fits

function cert_src(value1, value2){
    $(value1).click(() => {
        $("#cert-pdf").attr("src", value2)
        $("#cert-list").addClass("hidden");
    })
}

let cert_list = [$("#html1"),$("#html2"),$("#html3"),$("#html4"),$("#html5"),$("#html6"),$("#js1"),$("#js2"),$("#sql1"),$("#php1"),$("#py1")]
/*
For the cert loop do objects 

function cert_loop(){
    for(i in certs){
        cert_src(cert[i], cert[i].src)
    }
}
*/ 
cert_src($("#html1"), "./images/certificates/CIW Advanced HTML5 and CSS3 Specialist certificate.png")
cert_src($("#html2"), "./images/certificates/CSS Intermediate Certificate.png")
cert_src($("#html3"), "./images/certificates/SASS Certificate.png")
cert_src($("#html4"), "./images/certificates/HTML Certificate.png")
cert_src($("#html5"), "./images/certificates/CSS Certificate.png")
cert_src($("#html6"), "./images/certificates/Bootstrap Certificate.png")
cert_src($("#js1"), "./images/certificates/JavaScript Certificate.png")
cert_src($("#js2"), "./images/certificates/JQuery Certificate.png")
cert_src($("#sql1"), "./images/certificates/SQL Certification.png")
cert_src($("#php1"), "./images/certificates/PHP Certificate.png")
cert_src($("#py1"), "./images/certificates/Python Fundamentals.png")

function reset_cert_list(){
    for(i in cert_list){
        cert_list[i].addClass("hidden")
        $("#cert-h4").addClass("hidden");
    }
}

/*
function cert_selected(value1,value2, start, end){
    value1.click(() => {
        for(i in end){
            cert_list[start].
        }
        reset_cert_list()
        value2.removeClass("hidden")
    })
}

Work on this to clean up code below

*/
$("#html").click(() =>{
    $("#cert-list").removeClass("hidden");
    reset_cert_list()
    $("#html1").removeClass("hidden");
    $("#html2").removeClass("hidden");
    $("#html3").removeClass("hidden");
    $("#html4").removeClass("hidden");
    $("#html5").removeClass("hidden");
    $("#html6").removeClass("hidden");
})
$("#js").click(() =>{
    $("#cert-list").removeClass("hidden");
    reset_cert_list()
    $("#js1").removeClass("hidden");
    $("#js2").removeClass("hidden");
})
$("#sql").click(() =>{
    $("#cert-list").removeClass("hidden");
    reset_cert_list()
    $("#sql1").removeClass("hidden");
})
$("#php").click(() =>{
    $("#cert-list").removeClass("hidden");
    reset_cert_list()
    $("#php1").removeClass("hidden");
})
$("#py").click(() =>{
    $("#cert-list").removeClass("hidden");
    reset_cert_list()
    $("#py1").removeClass("hidden");
})
// clean up the above code


$("#close-certs").click(() =>{
    $(".certviewer").addClass("hidden");
    $("#cert-list").addClass("hidden");
    $("#cert-pdf").attr("src", "")
    $("#cert-h4").removeClass("hidden");
})

var icon = document.getElementById("togglebutton");
var night_icon = 'assets/toggle_night.png';
var day_icon = 'assets/toggle_day.png';

function toggle_display(){
    function switch_display(value1){
        value1.toggleClass("night")
        value1.toggleClass("day")
    }
    function set_day(){
        $("body").toggleClass("day")
        $("html").toggleClass("day")
        $("prompt").toggleClass("day")
    }
    set_day()
    $(".displaytog").click(() => {
        if(icon.src.includes(night_icon)){
            // switches to day mode
            // add rising sun animation
            $(icon).animate({ right: '25%' });
            icon.src = day_icon;
            switch_display($("body"))
            switch_display($("html"))
            switch_display($("prompt"))
        }else{
            // switches to dark mode.
            // add rising moon animation
            $(icon).animate({ right: '0%' });
            icon.src = night_icon;
            switch_display($("body"))
            switch_display($("html"))
            switch_display($("prompt"))
        }
    })
    // add more elements to change
}
toggle_display()