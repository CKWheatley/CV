import {variables} from "./variables.js";
import { isMobileDevice } from "./functions.js";

function email(){
    variables.mailerClient.classList.remove('hidden');
    let en = document.querySelector('#name').value;
    let ec = document.querySelector('#company').value;
    let jt = document.querySelector('#jtitle').value;
    let pay = document.querySelector('#pay').value;
    let jd = document.querySelector('#jdescription').value;
    let jl = document.querySelector('#jlocation').value;
    let ex = document.querySelector('#extrainfo').value;
    variables.mailerClient.classList.remove('hidden');
    let mailer = `mailto:ckwheatley15@gmail.com?subject=Job Offer From Github Pages
    &body=Employer Name: ${en}%0D%0ACompany: ${ec}%0D%0AJob Title: ${jt}%0D%0APay: ${pay}%0D%0AJob Description: ${jd}%0D%0AJob Location: ${jl}%0D%0AFurther Comments: %0D%0A%0D%0A${ex}
    `
    variables.mailerClient.setAttribute('href', mailer)
}

variables.mailButton.addEventListener('click', () => {
    email();
})

variables.mailerClient.addEventListener('click', () => {
    variables.mailerClient.innerHTML = '';
    variables.mailerClient.classList.add('hidden');
});

variables.contactButton.addEventListener('click', () => {
    variables.contactForm.classList.remove('hidden');
    variables.bugDiv.classList.add('hidden');
    variables.contactOption.forEach(option => option.classList.add('hidden'));
})

variables.closeEmail.addEventListener('click', () => {
    variables.contactForm.classList.add('hidden');
    variables.bugDiv.classList.remove('hidden');
    variables.contactOption.forEach(option => option.classList.remove('hidden'));
})
// mail function



// bug report ########################## FINISH UP ON THIS ##########################################
function bugReport(){
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let deviceType = isMobileDevice ? 'Mobile' : 'Desktop';
    let modelInfo = '';

    let userAgent = navigator.userAgent;
    let browser;

    if (userAgent.indexOf("Chrome") != -1) {
        browser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") != -1) {
        browser = "Apple Safari";
    } else if (userAgent.indexOf("Firefox") != -1) {
        browser = "Mozilla Firefox";
    } else if (userAgent.indexOf("MSIE") != -1) {
        browser = "Internet Explorer";
    } else if (userAgent.indexOf("Opera") != -1) {
        browser = "Opera";
    } else if (userAgent.indexOf("Edge") != -1){
        browser = 'Edge';
    }
    else {
        browser = "Other Browser - Please Specify:";
    }


    if(isMobileDevice){
        modelInfo = '%0D%0AYour Device Model: %0D%0A'
    }
    let mailerLink = `mailto:ckwheatley15@gmail.com?subject=Web CV Bug Report
    &body=Any pre-populated information isnt stored and is only populated when clicking the report bug button.%0D%0APlease tell us what you were doing when you encountered this bug:%0D%0ADevice Type: ${deviceType} W-${viewportWidth} H-${viewportHeight}${modelInfo}%0D%0ABrowser: ${browser}
    `;
    window.location.href = mailerLink
}
variables.bugButton.addEventListener('click', bugReport);