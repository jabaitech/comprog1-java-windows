function openWindow() {
    document.getElementById('WINDOW_HOLDER').style.display = 'flex';
}

function closeWindow() {
    document.getElementById('WINDOW_HOLDER').style.display = 'none';
}

function changeIframe(url, windowName) {
    openWindow();
    document.getElementById('content-iframe').src = url;
    document.getElementById('windowName').innerText = windowName;
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById("time").innerText = `${hours}:${minutes} ${ampm}`;
}

function updateDate() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    document.getElementById("date").innerText = `${month}/${day}/${year}`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('WINDOW_HOLDER').style.display = 'none';
    updateTime();
    updateDate();
    setInterval(updateTime, 60000);
});
