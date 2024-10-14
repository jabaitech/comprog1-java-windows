/*
    Simplified and hardcoded kasi ang buggy ahhaha
*/
let count = 0;
function openWindow() {

    try {
        document.getElementById('WINDOW_HOLDER').style.display = 'flex';
    } catch(err) {
        console.error("Error: " + err)
    }
    
}
function closeWindow() {
    try {
        document.getElementById('WINDOW_HOLDER').style.display = 'none';
    } catch(err) {
        console.error("Error: " + err)
    }   
}

function changeIframe(url, windowName, icon) {
    document.getElementById('content-iframe').src = url;
    document.getElementById('windowName').innerText = windowName;
    document.getElementById('topbarIcon').src = icon
    openWindow();
}

function startPanel() {
    if (count == 0) {
        count = count + 1;
        document.getElementById('start').style.display = 'flex';
    } else {
        count = 0;
        document.getElementById('start').style.display = 'none';
    }
}

function forceCloseStartPanel() {
    document.getElementById('start').style.display = 'none';
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

document.addEventListener("DOMContentLoaded", function () {
    closeWindow();
    forceCloseStartPanel();
    updateTime();
    updateDate();
    setInterval(updateTime, 60000);
});

document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('click', (e) => {
    const startPanel = document.getElementById('start');
    const button = document.getElementById('windowsIconHolder') || document.getElementById('windowsIcon');

    try {
        if (!startPanel.contains(e.target) && e.target !== button) {
            forceCloseStartPanel();
        }
    } catch(err) {
        console.log("Caught Error:" + err);
    }

    
});
