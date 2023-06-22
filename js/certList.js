// Cert Viewer Settings
const lanList = document.querySelector('#lanlist');
const certViewer = document.querySelector('.certviewer');

lanList.addEventListener('click', () => {
    certViewer.classList.remove('hidden')
})
function cert_src(value1, value2){
    value1.addEventListener('click', () => {
        document.querySelector('#cert-pdf').setAttribute('src', value2)
        document.querySelector('#cert-list').classList.add('hidden')
    })
}

const certs = {
    html1: document.querySelector('#html1'),
    html2: document.querySelector('#html2'),
    html3: document.querySelector('#html3'),
    html4: document.querySelector('#html4'),
    html5: document.querySelector('#html5'),
    html6: document.querySelector('#html6'),
    js1: document.querySelector('#js1'),
    js2: document.querySelector('#js2'),
    sql1: document.querySelector('#sql1'),
    php1: document.querySelector('#php1'),
    py1: document.querySelector('#py1')
}

/*
For the cert loop do objects 

function cert_loop(){
    for(i in certs){
        cert_src(cert[i], cert[i].src)
    }
}
*/ 
cert_src(certs.html1, './images/certificates/CIW Advanced HTML5 and CSS3 Specialist certificate.png');
cert_src(certs.html2, './images/certificates/CSS Intermediate Certificate.png');
cert_src(certs.html3, './images/certificates/SASS Certificate.png');
cert_src(certs.html4, './images/certificates/HTML Certificate.png');
cert_src(certs.html5, './images/certificates/CSS Certificate.png');
cert_src(certs.html6, './images/certificates/Bootstrap Certificate.png');
cert_src(certs.js1, './images/certificates/JavaScript Certificate.png');
cert_src(certs.js2, './images/certificates/JQuery Certificate.png');
cert_src(certs.sql1, './images/certificates/SQL Certification.png');
cert_src(certs.php1, './images/certificates/PHP Certificate.png');
cert_src(certs.py1, './images/certificates/Python Fundamentals.png');

function resetCertList(){
    for(const key in certs){
        if (certs.hasOwnProperty(key)) {
            const element = certs[key];
            element.classList.add("hidden");
          }
    }
    const certH4 = document.querySelector('#cert-h4');
    certH4.classList.add('hidden');
}

/*
function cert_selected(value1,value2, start, end){
    value1.click(() => {
        for(i in end){
            cert_list[start].
        }
        resetCertList()
        value2.removeClass('hidden')
    })
}

Work on this to clean up code below

*/

document.querySelector('#html').addEventListener('click', () => {
    document.querySelector('#cert-list').classList.remove('hidden');
    // resetCertList();
    certs.html1.classList.remove('hidden');
    certs.html2.classList.remove('hidden');
    certs.html3.classList.remove('hidden');
    certs.html4.classList.remove('hidden');
    certs.html5.classList.remove('hidden');
    certs.html6.classList.remove('hidden');
  });
document.querySelector('#js').addEventListener('click', () => {
    document.querySelector('#cert-list').classList.remove('hidden');
    resetCertList();
    certs.js1.classList.remove('hidden');
    certs.js2.classList.remove('hidden');
});
document.querySelector('#sql').addEventListener('click', () => {
    document.querySelector('#cert-list').classList.remove('hidden');
    resetCertList();
    certs.sql1.classList.remove('hidden');
});
document.querySelector('#php').addEventListener('click', () => {
    document.querySelector('#cert-list').classList.remove('hidden');
    resetCertList();
    certs.php1.classList.remove('hidden');
});
document.querySelector('#py').addEventListener('click', () => {
    document.querySelector('#cert-list').classList.remove('hidden');
    resetCertList();
    certs.py1.classList.remove('hidden');
});

document.querySelector('#close-certs').addEventListener('click', () => {
    document.querySelector('#cert-list').classList.add('hidden');
    document.querySelector('.certviewer').classList.add('hidden');
    document.querySelector('#cert-pdf').setAttribute('src', '')
})