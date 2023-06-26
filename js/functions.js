import { toggleDisplay as theme } from "./theme.js";
import { mobMenuClose as mobile } from "./mobile.js";
import { variables } from "./variables.js";

export let isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function faderIn(element, duration, displayType = 'flex'){
    element.classList.remove('hidden');
    element.style.display = displayType;
    element.style.opacity = 0;
    
    const increment = 0.01;
    const interval = duration / (1 / increment);
    let opacity = 0;
  
    const timer = setInterval(() => {
      opacity += increment;
      element.style.opacity = opacity;
  
      if (opacity >= 1) {
        clearInterval(timer);
      }
    }, interval);
}
function faderOut(element, duration, displayType = 'flex') {
    element.style.opacity = 1;
    const increment = 0.01;
    const interval = duration / (1 / increment);
    let opacity = 1;
  
    const timer = setInterval(() => {
      opacity -= increment;
      element.style.opacity = opacity;
  
      if (opacity <= 0) {
        clearInterval(timer);
        element.classList.add('hidden');
        element.style.opacity = "";
        element.style.display = 'none';
      }
    }, interval);
}
function delayFade(fadeFunction, element, delay, duration){
    setTimeout(() => {
        fadeFunction(element, duration);
    }, delay);
}
function scrollToCards(){
    const cardSection = document.querySelector('.cardsection')
    const offset = cardSection.offsetTop;
    window.scrollTo({
        top: offset,
        behaviour: 'smooth'
    })
}
window.onload = () => {
    variables.entryButton.addEventListener('click', () => {
        faderOut(variables.entryPrompt, 500)
        setTimeout(() => {
            faderIn(variables.main, 1500)
            faderIn(variables.header, 1500)
            action(document.querySelector("#profile"));
        })
    });
    variables.selectables.forEach(selectable => {
        selectable.addEventListener('click', (event) => {
            // document.querySelector('.cardsection').style.display = 'flex'
            if(!event.target.classList.contains('noScroll')){
                scrollToCards();
            }
        });
    });
    const cardLink = document.querySelectorAll('.cardlink')
    cardLink.forEach(link => {
        link.addEventListener('click', scrollToCards)
    });
    checkWindowWidth();
    stickyNav();
    tab_click();
}

// Nav bar sticky
function stickyNav(){
    window.addEventListener('scroll', function() {
        // const nav = document.querySelector('nav');
        if(window.innerWidth > 1024){
            if (window.scrollY < 120) {
                variables.nav.style.top = (150 - window.scrollY) + "px";
            } else {
                variables.nav.style.top = 20 + "px";
            }
        }
    });
}

function checkWindowWidth(){
    if(window.innerWidth < 1025){
        variables.tabs.forEach(tab => {
            tab.classList.add('tabspanded');
        })
        variables.tabHDR.forEach(hdr => {
            hdr.classList.remove('hidden');
        })
        variables.menuButton.classList.remove('hidden');
        variables.header.classList.remove('hidden');
    }
    else{
        variables.tabs.forEach(tab => {
            tab.classList.remove('tabspanded');
        })
        variables.tabHDR.forEach(hdr => {
            hdr.classList.add('hidden');
        })
        variables.selectables.forEach(function(selectable) {
            selectable.addEventListener('click', function() {
                const selected = document.querySelector('.selected')
                if(selected){
                    selected.classList.remove("selected");
                }
                this.classList.add("selected");
          })
          variables.header.classList.add('hidden');
        })
        faderIn(variables.nav,500); // may change this to a slide down or slide in in animations update
        variables.menuButton.classList.add('hidden');
        variables.header.classList.add('fixed');
    }
}


function getSiblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, child => child !== element);
}
// Here's a breakdown of how the function works: ^^^^^^

// element.parentNode returns the parent element of the given element.
// element.parentNode.children returns a collection of all the child elements of the parent element.
// Array.prototype.filter.call() is used to convert the collection of child elements into an array and then apply the filter method to it.
// The filter method is called with a callback function that iterates over each child element in the array.
// Inside the callback function, child !== element is used as the filtering condition to exclude the original element itself from the resulting array.
// The filter method returns a new array containing only the sibling elements (i.e., elements that are not the same as the given element).
// Finally, the getSiblings function returns the resulting array of sibling elements.

function action(fader){
    const colour = window.getComputedStyle(fader).backgroundColor;
    const siblings = getSiblings(fader);


    faderIn(fader, 600);
    siblings.forEach(sib => faderOut(sib, 400));
    document.querySelectorAll('.tab').forEach(tab => tab.style.border = 'solid 3px ' + colour);
    window.scrollTo({top: 0, behavior: 'smooth', duration: 600});

    const faderHeight = window.getComputedStyle(fader).getPropertyValue('height');
    variables.mainColLast.style.height = faderHeight;
    document.querySelector('.cardsection').style.display = 'none'
}
function tabbed(tab){
    tab.classList.add("tabbed");
    getSiblings(tab).forEach(sib => sib.classList.remove("tabbed"));
}
function tab_click(){
    variables.profileTab.addEventListener('click', function(){
        tabbed(this);
        action(document.querySelector("#profile"));
    });
    variables.personalityTab.addEventListener('click', function(){
        tabbed(this);
        action(document.querySelector("#personality"));
    });
    variables.educationTab.addEventListener('click', function(){
        tabbed(this);
        action(document.querySelector("#education"));
    });
    variables.experienceTab.addEventListener('click', function(){
        tabbed(this);
        action(document.querySelector("#experience"));
    });
    variables.contactTab.addEventListener('click', function(){
        document.querySelector('#footballpic').style.animation = "football 2s 0.2s forwards";

        tabbed(this);
        const contactFadeOut = document.querySelectorAll('.contactfadeout');
        const conntactFadeIn = document.querySelectorAll('.contactfadein');
        const firstContactFadeIn = document.querySelector('.contactfadein:first-of-type');
        contactFadeOut.forEach(element => delayFade(faderOut,element,1000,2000));
        firstContactFadeIn.style.flexFlow = 'column'
        conntactFadeIn.forEach(element => delayFade(faderIn, element, 3000, 1000));
        action(document.querySelector("#contact"));
        action(document.querySelector("#contact"));

        const tempName = document.querySelector("#tempname").value;
        document.querySelector("#name").value = tempName;
    });
}
window.addEventListener('resize', () => {
    checkWindowWidth();
    mobile.mobMenuClose();
    stickyNav();
});
document.querySelector("#name").value = document.querySelector("#tempname").value;