import showAbout from './about.js'
import { showHome } from './home.js'
import { showMenu } from './menu.js'
import './about.js'
import './styles/style.css'
import './styles/menu.css'
import './styles/nav-styles.css'
import './styles/about.css'
import showHeadline from './headline.js'
import './home.js'
import './obj.js'
import './menu.js'
import './about.js'
const content = document.querySelector('.contentJs')
showHeadline()
showHome();
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener('click', () =>{ 
        if(btn.id === 'homeJs'){
            content.innerHTML = '';
            showHeadline()
            showHome()
        } else if(btn.id === 'menuJs'){
            content.innerHTML = ''
            showHeadline()
            showMenu()
        } else {
            content.innerHTML = ''
            showHeadline()
            showAbout()
        }
    })
})