const display = document.querySelector('.display');

function updateHour() {
    const currentData =  new Date();

    const currentHour = `${addZero(currentData.getHours())}:${addZero(currentData.getMinutes())}:${addZero(currentData.getSeconds())}`;

    display.textContent = currentHour;  
}

function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }

    return num;
}

updateHour();
setInterval(updateHour, 1000); 
  