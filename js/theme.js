import { variables } from "./variables.js";

const icon = document.querySelector('#togglebutton')
const night_icon = 'assets/toggle_night.png'
const day_icon = 'assets/toggle_day.png'

export function toggleDisplay(){
    function switchDisplay(target, property, setting){
        target.style.transition = 'all 0.5s 0.2s ease';
        if(setting === 'd'){
            target.style[property] = 'rgb(5, 26, 37)';
        }else if(setting === 'l'){
            target.style[property] = 'rgb(244, 235, 217)';
        }else if(setting === 't'){
            target.style[property] = 'transparent';
        }
    }
    function switchIcons(from, to){
        variables.tabIcons.forEach(function(icon) {
            let newSrc = icon.src.replace(from,to);
            icon.style.opacity = 0;
            icon.style.transition = 'opacity 0.4s ease-in-out';
            setTimeout(function() {
                icon.src = newSrc;
                icon.style.opacity = 1;
            }, 400);
        });
        variables.menuButtonIMG.style.opacity = 0;
        let newSrc = variables.menuButtonIMG.src.replace(to,from);
        setTimeout(function(){
            variables.menuButtonIMG.src = newSrc;
            variables.menuButtonIMG.style.opacity = 1;
            variables.menuButtonIMG.transition = 'opacity 0.4s ease-in-out';
        })
    }
    if(window.innerWidth > 1025){
        switchDisplay(variables.header,'background-color', 't')
    }
    function toggleMode(mode) {
        switchIcons(mode === 'dark' ? 'black' : 'white', mode === 'dark' ? 'white' : 'black');
        icon.style.right = mode === 'dark' ? '0%' : '25%';
        icon.src = mode === 'dark' ? night_icon : day_icon;
        switchDisplay(variables.body, 'background-color', mode === 'dark' ? 'd' : 'l');
        switchDisplay(variables.page, 'background-color', mode === 'dark' ? 'd' : 'l');
        switchDisplay(variables.prompt, 'background-color', mode === 'dark' ? 'd' : 'l');
        variables.tabs.forEach(tabElement => {
            switchDisplay(tabElement, 'background-color', mode === 'dark' ? 'd' : 'l');
        })
        variables.navH3s.forEach(navH3 => {
            switchDisplay(navH3, 'color', mode === 'dark' ? 'l' : 'd');
          });
        if(window.innerWidth < 1025) {
          switchDisplay(variables.nav, 'background-color', mode === 'dark' ? 'd' : 'l');
          switchDisplay(variables.menuButton, 'color', mode === 'dark' ? 'd' : 'l');
          switchDisplay(variables.header, 'background-color', mode === 'dark' ? 'l' : 'd');
        } else {
          switchDisplay(variables.nav, 'background-color', 't');
          switchDisplay(variables.nav, 'background-color', 't');
        }
      }
      variables.displayTog.addEventListener('click', () => {
        if (icon.src.includes(night_icon)) {
          // switches to day mode
          // add rising sun animation
          toggleMode('light');
        } else {
          // switches to dark mode.
          // add rising moon animation
          toggleMode('dark');
        }
      });
      

    // add more elements to change
}
toggleDisplay();