function animateTitle() {
    setTimeout(() => {
        const t = document.querySelector(".title");
        t.style.paddingLeft = "1em";
        t.style.opacity = "1";
    }, 500);
}

function animateText() {
    var a = document.querySelectorAll("#container #text");
    var time = 750;
    a.forEach((element) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.marginLeft = "0";
            element.style.marginRight = "0";
        }, time);
        time += 50;
    });
}

function cc() {
    const cc = document.querySelector("#link");
    const f = document.querySelector("#footer");
    f.addEventListener("mouseover", () => {
        cc.style.opacity = 1;   
    });
    f.addEventListener("mouseout", () => {
        cc.style.opacity = 0.3;
    });
}

window.addEventListener('load', () => {
    animateTitle(); 
    animateText();
    cc();
});

