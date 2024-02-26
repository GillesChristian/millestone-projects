const span = document.querySelectorAll('span');
const term = document.querySelector('sup');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const checkMonth = (month) => {
    return months[month];
};
const checkDay = (day) => {
    return days[day-1];
};
const checkTerm = (day) => (
    day === 1 || day === 21 || day === 31 ? "st" :
    day === 2 || day === 22 ? "nd" :
    day === 3 || day === 23 ? "rd" :
    "th"
);  

function updateClock() {
    const currentTime = new Date();

    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    span.forEach(key => {
        key.classList.contains('seconds') ?  key.innerText = seconds:
        key.classList.contains('minutes') ?  key.innerText = minutes:
        key.classList.contains('hours') ?  key.innerText = hours:
       '0';
    })

}

function setDate() {
    const currentTime = new Date();

    span.forEach(key => {
        key.classList.contains('date') ?  key.innerText = checkDay(currentTime.getDay()):
        key.classList.contains('day') ?  key.innerText = currentTime.getDate():
        key.classList.contains('month') ?  key.innerText = checkMonth(currentTime.getMonth()):
        key.classList.contains('year') ?  key.innerText = currentTime.getFullYear():
    '0';
    })

   term.innerText = checkTerm(currentTime.getDate());
};
setDate();
setInterval(updateClock, 1000);