const spanDays = document.querySelector('.days');
const spanHours = document.querySelector('.hours');
const spanMinutes = document.querySelector('.minutes');
const spanSeconds = document.querySelector('.seconds');
const endTime = new Date('2021-06-21 13:00:00').getTime();
setInterval(() => {
    const nowTime = new Date().getTime();
    const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));
    spanDays.textContent = `${days}dni `;
    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    hours < 10 ? hours = "0" + hours : hours;
    spanHours.textContent = `${hours}godzin `;
    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    minutes < 10 ? minutes = "0" + minutes : minutes;
    spanMinutes.textContent = `${minutes} minut`;
    let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    seconds < 10 ? seconds = "0" + seconds : seconds;
    spanSeconds.textContent = `${seconds} sekund`
}, 1000)