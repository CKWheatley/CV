// Nav Settings
import { variables as variables } from "./variables.js";

variables.menuButton.addEventListener('click', () => {
    variables.nav.style.display = 'flex';
    variables.nav.style.flexFlow = 'column';
    variables.nav.style.transition = 'opacity 0.4s ease-in-out';
    variables.nav.style.opacity = 0;
    setTimeout(() => {
      variables.nav.style.opacity = 1;
    }, 100);
  });

export function mobMenuClose(){
    let closeables = [variables.profileTab, variables.personalityTab, variables.educationTab, variables.experienceTab, variables.contactTab]
    for(let i = 0; i < closeables.length; i++){
        closeables[i].addEventListener('click', () => {
            if(window.innerWidth < 1025){
                variables.nav.style.display = 'none';
            }else{
                variables.nav.style.display = "flex";
            }
        })
    }
}
mobMenuClose();
