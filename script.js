const currentTime = getCurrentTime();
const currentDate = getCurrentDate();

function openWindow() {
    document.getElementById('WINDOW_HOLDER').style.display = 'flex';
}

function closeWindow() {
    document.getElementById('WINDOW_HOLDER').style.display = 'none';
}

function changeIframe(url) {
    openWindow();
    document.getElementById('content-iframe').src = url;
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? String(hours) : '12';
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
}

function getCurrentDate() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    return `${month}/${day}/${year}`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('WINDOW_HOLDER').style.display = 'none';
    document.getElementById("time").innerText = currentTime;
    document.getElementById("date").innerText = currentDate;
});
