 export default function showHeadline(){
    const content = document.querySelector('.contentJs');

const headline = document.createElement('div');
headline.classList.add('headline');
const leftHead = document.createElement('div');
leftHead.classList.add('left-head');
leftHead.innerHTML =  `Pizza delucia
                <p>
                    The most tasty <span id="pizza">pizza</span> in the World!
                </p>`;
const rightHead = document.createElement('div');
rightHead.classList.add('right-head');
headline.appendChild(leftHead);
headline.appendChild(rightHead);
content.appendChild(headline);
 }
 
