$(document).ready(() => {
    $("#entrybutton").click(() => {
        $("#entryprompt").fadeOut(0);
        $("#main").fadeIn(2000).removeClass("hidden");
        $("header").fadeIn(4000).removeClass("hidden");
    })
    function scrollToCards(){
        $('html, body').animate({
            scrollTop: $(".cardsection").offset().top
        }, 400);
    }
    $('.selectable').click(() => {
        if($(this).id !== "lanlist"){
            scrollToCards();
        }
    })
    $(".cardlink").click(() => {
        scrollToCards();
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
    checkWindowWidth()
    stickyNav()
    mobMenuClose()
    tab_click();
    toggle_display()
})

// Nav bar sticky
function stickyNav(){
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if(window.innerWidth > 1024){
            if (window.scrollY < 120) {
                nav.style.top = (150 - window.scrollY) + "px"
            } else {
                nav.style.top = 20 + "px";
            }
        }
    });
}
// Nav Settings
$(".menu-button").click(() => {
    $("nav").fadeIn(400);
    $("nav").css("display", "flex");
    $("nav").css("flex-flow", "column");
})
function mobMenuClose(){
    let closeables = [$(".profiletab"),$(".personalitytab"),$(".educationtab"),$(".experiencetab"),$(".contacttab"),$("#close-menu")]
    for(i in closeables){
        $(closeables[i]).click(() => {
            if($(window).width() < 1025){
                $("nav").fadeOut(400);
            }else{
                $("nav").stop(false,true);
            }
        })
    }
}
function checkWindowWidth(){
    if($(window).width() < 1025){
        $('.tab').addClass('tabspanded')
        $('.tabHDR').removeClass('hidden')
        $('.menu-button').removeClass('hidden')
        $('header').removeClass('fixed')
    }
    else{
        $('.tab').removeClass('tabspanded')
        $('.tabHDR').addClass('hidden')
        var selectables = document.querySelectorAll('.selectable');
        selectables.forEach(function(selectable) {
            selectable.addEventListener('click', function() {
                $(".selected").removeClass("selected")
                this.classList.add("selected")
          })
        })
        $("nav").fadeIn(400);
        $('.menu-button').addClass('hidden')
        $('header').addClass('fixed')
    }
}
function action(fader){
    const colour = fader.css('background-color');
    fader.fadeIn(600).siblings().fadeOut(400);
    $('.tab').css('border', 'solid 3px ' + colour)
    window.scrollTo({top: 0, behavior: 'smooth',duration: 600})
}
function tabbed(tab){
    tab.addClass("tabbed").siblings().removeClass("tabbed")
}
action($("#profile"));
tabbed($(".profiletab"));
function tab_click(){
    $(".profiletab").click(function(){
        tabbed($(this));
        action($("#profile"));
    });
    $(".personalitytab").click(function(){
        tabbed($(this));
        action($("#personality"));
    });
    $(".educationtab").click(function(){
        tabbed($(this));
        action($("#education"));
    });
    $(".experiencetab").click(function(){
        tabbed($(this));
        action($("#experience"));
    });
    $(".contacttab").click(function(){
        tabbed($(this));
        action($("#contact"));
        $(".contactfadeout").delay(1000).fadeOut(2000);
        $(".contactfadein").delay(3000).fadeIn(1000);
        document.getElementById("footballpic").style.animation = "football 2s 0.2s forwards";
        var tempname = $("#tempname").val();
        let name = tempname;
        $("#name").val(name);
    });
};


$(window).resize(() => {
    checkWindowWidth()
    mobMenuClose()
    stickyNav()
})
// add js to resize the section 2 for the experience part so it fits





// Cert Viewer Settings
$("#lanlist").click(() => {
    $(".certviewer").removeClass("hidden")
})
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

const icon = document.getElementById("togglebutton");
const night_icon = 'assets/toggle_night.png';
const day_icon = 'assets/toggle_day.png';

function toggle_display(){
    function switch_display(target,property, setting){
        target.css('transition', 'all 0.5s 0.2s ease')
        if(setting === 'd'){
            target.css(property, 'rgb(5, 26, 37)')
        }else if(setting === 'l'){
            target.css(property, 'rgb(244, 235, 217)')
        }else if(setting === 't'){
            target.css(property, 'transparent')
        }
    }
    function switch_icons(from, to){
        $(".tab-icons").each(function() {
            let newSrc = this.src.replace(from, to)
            $(this).fadeTo(400, 0, function() {
                $(this).attr("src", newSrc);
            }).fadeTo(400, 1);
        });
        $('.menu-button img').fadeTo(400, 0, function() {
            let newSrc = this.src.replace(to, from)
            $(this).attr("src", newSrc);
        }).fadeTo(400, 1);
    }
    if($(window).width() > 1025){
        switch_display($("header"),'background-color', 't')
    }
    $(".displaytog").click(() => {
        if(icon.src.includes(night_icon)){
            // switches to day mode
            // add rising sun animation
            switch_icons('white', 'black')
            $(icon).animate({ right: '25%' });
            icon.src = day_icon;
            switch_display($("body"),'background-color', 'l')
            switch_display($("html"),'background-color', 'l')
            switch_display($("prompt"),'background-color', 'l')
            switch_display($(".tab"),'background-color', 'l')
            switch_display($("nav h3"),'color', 'd')
            if($(window).width() < 1025){
                switch_display($("nav"),'background-color', 'l')
                switch_display($(".menu-button"),'color', 'l')
                switch_display($("header"),'background-color', 'd')
            }else{
                switch_display($("nav"),'background-color', 't')
                switch_display($("header"),'background-color', 't')
            }
        }else{
            // switches to dark mode.
            // add rising moon animation
            $(icon).animate({ right: '0%' });
            icon.src = night_icon;
            switch_icons('black', 'white')
            switch_display($("body"),'background-color', 'd')
            switch_display($("html"),'background-color', 'd')
            switch_display($("prompt"),'background-color', 'd')
            switch_display($(".tab"),'background-color', 'd')
            switch_display($("nav h3"),'color', 'l')
            if($(window).width() < 1025){
                switch_display($("nav"),'background-color', 'd')
                switch_display($(".menu-button"),'color', 'd')
                switch_display($("header"),'background-color', 'l')
            }else{
                switch_display($("nav"),'background-color', 't')
                switch_display($("header"),'background-color', 't')
            }
        }
    })
    // add more elements to change
}

