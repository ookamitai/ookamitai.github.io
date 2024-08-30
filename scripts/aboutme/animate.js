function animateTitle() {
    setTimeout(() => {
        const t = document.querySelector(".title");
        t.style.opacity = "1";
    }, 250);
}

function animateIcon() {
    setTimeout(() => {
        document.querySelector("#avatar").style.opacity = "0.9";
    }, 400);
    setTimeout(() => {
        document.querySelector("#avatar-desc").style.opacity = "0.3";
    }, 400);
}

function animateTimer() {
    setTimeout(() => {document.querySelector("#block-container").style.opacity = "1";}, 500);
}

function cc() {
    const cc = document.querySelector("#link");
    const f = document.querySelector("#footer");
    f.addEventListener("mouseover", () => {
        cc.style.opacity = 1;   
    });
    f.addEventListener("mouseout", () => {
        cc.style.opacity = 0.7;
    });
}

function bright() {
    document.querySelector("#dim").style.opacity = "0";
}

function redirectAnimation() {
    document.querySelector("#dim").style.opacity = "1";
    setTimeout(() => {
        if (document.querySelector("#lang").textContent == "cn") {
            window.location.href = "../../index_cn.html";  
        } else {
            window.location.href = "../../";  
        }
    }, 300);
}

function setRedirect() {
    document.querySelector("#return").addEventListener("click", () => {
        redirectAnimation();
    });
}

function getDevTime(time, obj) {
    var now = Math.floor(Date.now() / 1000);
    obj.textContent = (now - time) + "s";
}

function ageTime() {
    var d = 3719692800;
    var b = 1195084800;
    var now = Date.now() / 1000;
    var percentage = (1 - (d - now) / (d - b)) * 100;
    document.querySelector("#time-age").textContent = percentage.toFixed(8) + "%";
}

window.addEventListener('load', () => {
    bright();
    animateTitle(); 
    animateIcon();
    animateTimer();
    cc();
    setRedirect();
    getDevTime(1650153600, document.querySelector("#time-dev"));
    setInterval(getDevTime, 1000, 1650153600, document.querySelector("#time-dev"));
    getDevTime(1609372805, document.querySelector("#time-utau"));
    setInterval(getDevTime, 1000, 1609372805, document.querySelector("#time-utau"));
    ageTime();
    setInterval(ageTime, 50);
});
