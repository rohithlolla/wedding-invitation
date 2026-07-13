const weddingDate = new Date("August 19, 2026 10:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (gap % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (gap % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);
const copyBtn = document.querySelector(".copy-btn");
const alertBox = document.getElementById("copy-alert");

copyBtn.addEventListener("click", async () => {

    await navigator.clipboard.writeText(window.location.href);

    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2500);

});