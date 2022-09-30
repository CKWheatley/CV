// JavaScript Document
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
    /*$('.selectable').click(() => {
        $('.selectable').addClass('selected').siblings('.selected').removeClass('selected');
        // fix this code
    })*/
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
function tab_click(){
    function action(value){
        value.slideDown(500).siblings().slideUp(620);
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
$("#lanlist").click(() => {
    $(".pdfviewer").removeClass("hidden")
})
// add js to resize the section 2 for the experience part so it fits




function cert_src(value1, value2){
    $(value1).click(() => {
        $("#cert-pdf").attr("src", value2)
    })
}
/*
For the cert loop do objects 

function cert_loop(){
    for(i in certs){
        cert_src(cert[i], cert[i].src)
    }
}
*/ 
cert_src($("#html1"), "/images/certificates/CIW Advanced HTML5 and CSS3 Specialist certificate.pdf#view=fitH")
cert_src($("#html2"), "/images/certificates/CSS Intermediate Certificate.pdf#view=fitH")
cert_src($("#html3"), "/images/certificates/SASS Certificate.pdf#view=fitH")
cert_src($("#html4"), "/images/certificates/HTML Certificate.pdf#view=fitH")
cert_src($("#html5"), "/images/certificates/CSS Certificate.pdf#view=fitH")
cert_src($("#html6"), "/images/certificates/Bootstrap Certificate.pdf#view=fitH")
cert_src($("#js1"), "/images/certificates/JavaScript Certificate.pdf#view=fitH")
cert_src($("#js2"), "/images/certificates/JQuery Certificate.pdf#view=fitH")
cert_src($("#sql1"), "/images/certificates/SQL Certification.pdf#view=fitH")
cert_src($("#php1"), "/images/certificates/PHP Certificate.pdf#view=fitH")
cert_src($("#py1"), "/images/certificates/Python Fundamentals.pdf#view=fitH")


// make sure to include #view=fitH to fit to width
let cert_list = [$("#html1"),$("#html2"),$("#html3"),$("#html4"),$("#html5"),$("#html6"),$("#js1"),$("#js2"),$("#sql1"),$("#php1"),$("#py1")
]
function reset_cert_list(){
    for(i in cert_list){
        cert_list[i].addClass("hidden")
    }
}

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
    $(".pdfviewer").addClass("hidden");
    $("#cert-list").addClass("hidden");
    $("#cert-pdf").attr("src", "")
    console.log("done")
})

