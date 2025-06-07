

export function showHome(){
const content = document.querySelector('.contentJs');

 // content container -- first section Text about restaurant
 const cntContainer = document.createElement('div');
 cntContainer.classList.add('container-content');
 const text = document.createElement('div');
 text.classList.add('text');
 text.innerText = 'Our restaurant is a reflection of the pleasure of the best taste. We have been making our pizza for years and our recipes come from traditional methods, selectively selected over the years so that every bite is an unforgettable delicacy!';
 cntContainer.appendChild(text);
 content.appendChild(cntContainer);
 // content container Hours
 const infoC = document.createElement('div');
 infoC.classList.add('info-container');
 const openC = document.createElement('div');
 openC.id = 'open-times'
 const openH = document.createElement('div');
 openH.classList.add('open-hours', 'flex-rows');
 openH.innerText = 'Open Hours';
 openC.appendChild(openH)
 infoC.appendChild(openC)
 const location = document.createElement('div');
 location.id = 'location';
 infoC.appendChild(location)
 cntContainer.appendChild(infoC);

 const weeksArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 const timesArray = ['10:00 AM - 22:00 PM', '10:00 AM - 2:00 AM']
 function createRows(){
    for(let i = 0; i < weeksArray.length; i++){
        const flexRows = document.createElement('div');
        const week = document.createElement('div');
        const times = document.createElement('div');
        flexRows.className = 'flex-rows';
        week.textContent = weeksArray[i];
        if(i < 5){
            times.textContent = timesArray[0]
        } else{
            times.textContent = timesArray[1];
        }
        flexRows.appendChild(week);
        flexRows.appendChild(times);
        openC.appendChild(flexRows)

    }
 }
 const locationArray = ['England', 'Poland', 'India'];
 const streets = ['London, street: Dreams 21/a', 'Warsaw, street: Babowicza 11', 'New Dehli, street: Abbratuli 7'];

 function createTimes(){
    const openH2 = document.createElement('div');
    openH2.classList.add('open-hours', 'flex-rows');
    openH2.textContent = 'Locations';
    location.appendChild(openH2);
    for(let i = 0; i < locationArray.length; i++){
        const flexRows2 = document.createElement('div');
        flexRows2.className = 'flex-rows2'
        const loc = document.createElement('div');
        const street = document.createElement('div');
        loc.textContent = locationArray[i];
        street.textContent = streets[i]
        flexRows2.appendChild(loc);
        flexRows2.appendChild(street);
        location.appendChild(flexRows2)
    }
 }
 createRows()
 createTimes()
}