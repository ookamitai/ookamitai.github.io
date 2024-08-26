async function randomBlink() {
    const element = document.querySelector('#blink');
    const randomTime = element.style.opacity == '0.2' ? Math.random() * 1000 : Math.random() * 100; // 500 - 2500 ms
    element.style.opacity = element.style.opacity == '0.2' ? '1' : '0.2';
    setTimeout(randomBlink, randomTime);
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function randomBlinkWrapper() {
    await timeout(1000);
    randomBlink();
}

function bg() {
    document.querySelector('body').style.backdropFilter = "blur(3px)";
}

async function bgWrapper() {
    await timeout(1000);
    bg();
}

function turnOnNeon() {
    const element = document.querySelector('#name-box');
    setTimeout(() => {
        element.style.opacity = 1;
        document.querySelectorAll('.name').forEach((element) => {
            element.style.textShadow = "0px 0px 50px lightblue, 0px 0px 10px lightsteelblue";    
        });
        
    }, 1000);
}

function changeDef(){
    document.querySelector('#name-box').style.opacity = 0.3;
}

function changeDefOut(){
    document.querySelector('#name-box').style.opacity = 1;
}

function entry() {
    var entryAreas = document.querySelectorAll(".entry");
    entryAreas.forEach((entry) => {
        entry.addEventListener("mouseover", changeDef);
        entry.addEventListener("mouseout", changeDefOut);
    });
}

function hint() {
    const hint = document.querySelector("#name-box");
    hint.addEventListener("mouseover", () => {
        document.querySelector("#hint").style.opacity = 1;
        document.querySelector("#hint").style.marginTop = "-1.8em";
    });
    hint.addEventListener("mouseout", () => {
        document.querySelector("#hint").style.marginTop = "-2em";
        document.querySelector("#hint").style.opacity = 0;
    });
}

function move() {
    const move = document.getElementById("move");

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;
        move.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {duration: 250, fill: "both"})
    }
}

function toggle() {
    var useFlashlight = false;
    const toggle = document.querySelector("#toggle");
    toggle.addEventListener("click", () => {
        useFlashlight = !useFlashlight;
        const m = document.querySelector("#move");
        const t = document.querySelector("#toggle-text");
        if (useFlashlight) {
            m.style.opacity = 1;
            t.textContent = "[Flashlight ON]";
            t.style.opacity = "0.7";
        } else {
            m.style.opacity = 0;
            t.textContent = "[Flashlight OFF]";
            t.style.opacity = "0.3";
        }
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

function bs() {
    document.querySelector("#name-box").style.marginLeft = "1em";
    setTimeout(() => {
        document.querySelector("#blinkpre").textContent = "blog";
        document.querySelector("#blink").textContent = "s";
        document.querySelector("#blinkafter").textContent = "paces";
    }, 200);
    
    setTimeout(() => {
        document.querySelector("#name-box").style.marginLeft = "0em";
    }, 200);
}

function git() {
    document.querySelector("#name-box").style.marginLeft = "1em";
    setTimeout(() => {
        document.querySelector("#blinkpre").textContent = "git";
        document.querySelector("#blink").textContent = "h";
        document.querySelector("#blinkafter").textContent = "ub";
    }, 200);
    
    setTimeout(() => {
        document.querySelector("#name-box").style.marginLeft = "0em";
    }, 200);
}

function okmt() {
    document.querySelector("#name-box").style.marginLeft = "1em";

    setTimeout(() => {
        document.querySelector("#blinkpre").textContent = "o";
        document.querySelector("#blink").textContent = "o";
        document.querySelector("#blinkafter").textContent = "kamitai";
    }, 200);

    setTimeout(() => {
        document.querySelector("#name-box").style.marginLeft = "0em";
    }, 200);

}

function setupbs() {
    const bst = document.querySelector("#bs");
    bst.addEventListener("mouseover", () => {
        bs();
    });
    bst.addEventListener("mouseout", () => {
        okmt();
    });
}

function question() {
    const over = document.querySelector("#overlay");
    over.textContent += "THE SCREAMS OF THE DOOMED\n";
}

function setQ() {
    document.querySelector("#elipses").addEventListener("click", () => {
        question();
    });
}


window.addEventListener('load', () => { 
    turnOnNeon();
    randomBlinkWrapper();
    hint();
    move();
    toggle();
    entry();
    cc();
    setupbs();
    bgWrapper();
    setQ();
});
