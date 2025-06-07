export default function showAbout(){
    const content = document.querySelector('.contentJs')
const container = document.createElement('div');
container.className = 'container-content'; 

const sectionArray = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id bibendum risus. Phasellus tempor quam quis arcu rhoncus, vel luctus est iaculis. Curabitur luctus ultrices eros ac varius. Vestibulum blandit eros vitae vehicula pulvinar. Morbi commodo nec tellus vitae venenatis. Maecenas libero ligula, rutrum ut sodales ac, imperdiet sed ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut rhoncus lorem quis varius semper. Vivamus in lacinia risus, malesuada imperdiet quam. Praesent gravida magna ullamcorper elit tincidunt bibendum. Aliquam sed lorem id mi ultrices feugiat sit amet vitae nibh. Proin sollicitudin fermentum nunc, id condimentum nulla vehicula non. Maecenas efficitur, lorem gravida consequat fringilla, quam nunc laoreet enim, sed laoreet nibh felis eu ex.', 'Suspendisse potenti. Pellentesque facilisis tristique pretium. Aliquam suscipit iaculis lacinia. Ut congue risus eget leo malesuada, at blandit lacus vestibulum. Pellentesque vestibulum, lacus et tristique tincidunt, quam quam fermentum nisi, euismod gravida ante libero a felis. Donec vitae turpis pulvinar, ultrices leo sit amet, facilisis leo. Vestibulum dapibus urna eget feugiat elementum. Aenean non quam et nunc dignissim congue. Fusce molestie rhoncus bibendum. Nam facilisis ut arcu eu euismod. Suspendisse pulvinar arcu dolor, quis placerat diam placerat vel', 'Nullam congue, nisi sit amet tincidunt elementum, leo ipsum faucibus quam, eget volutpat orci turpis at enim. Ut at purus sed leo consectetur semper non hendrerit enim. Fusce eget augue ante. Fusce gravida porttitor tempus. Praesent imperdiet sodales lectus, eu ultricies lorem laoreet sit amet. Praesent aliquet velit a enim porttitor efficitur. Sed non est eget ligula aliquam placerat. Vivamus sodales laoreet semper. Vestibulum semper euismod ornare. Nunc sed aliquet quam, sit amet rhoncus quam. Praesent dapibus risus nec massa iaculis venenatis. Duis posuere, arcu et rhoncus feugiat, felis turpis vulputate velit, id imperdiet metus massa porttitor nulla.']
for(let i = 0; i < sectionArray.length; i++){
    const sect = document.createElement('section');
    sect.textContent = sectionArray[i];
    container.appendChild(sect)
}
content.appendChild(container);
}
