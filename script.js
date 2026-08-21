let cloud = document.querySelector(".cloudy");
let sunny = document.querySelector(".sunny");
let rainy = document.querySelector(".rainy");
let thunder = document.querySelector(".thunder");
let snowy = document.querySelector(".snowy");
let hamburger = document.querySelector(".hamburger");
let middlefinger = document.querySelector(".middlefinger");
let hhj = document.querySelector(".hhj");

let w_input = document.querySelector(".w_input");


w_input.addEventListener("input", () => {
    cloud.classList.remove("on");
    sunny.classList.remove("on");
    rainy.classList.remove("on");
    thunder.classList.remove("on");
    snowy.classList.remove("on");
    hamburger.classList.remove("on");
    middlefinger.classList.remove("on");
    hhj.classList.remove("on");

    if (w_input.value == "흐림" || w_input.value == "구름" || w_input.value == "구름2" || w_input.value == "구름이") {
        cloud.classList.add("on");
    }
    else if (w_input.value == "맑음") {
        sunny.classList.add("on");
    }
    else if (w_input.value == "비" || w_input.value == "강우") {
        rainy.classList.add("on");
    }
    else if (w_input.value == "번개" || w_input.value == "뇌우") {
        thunder.classList.add("on");
    }
    else if (w_input.value == "눈") {
        snowy.classList.add("on");
    }
    else if (w_input.value == "햄버거") {
        hamburger.classList.add("on");
    }
    else if (w_input.value == "중지") {
        middlefinger.classList.add("on");
    }
    else if (w_input.value == "한형준" || w_input.value == "형준" || w_input.value == "마피아42") {
        hhj.classList.add("on");
    }
});

let mtp = document.querySelector(".mtp");
let htp = document.querySelector(".htp");
let ltp = document.querySelector(".ltp");
let mts = document.querySelector(".mts");
let hts = document.querySelector(".hts");
let lts = document.querySelector(".lts");
let t_input = document.querySelector(".t_input");
let h_input = document.querySelector(".h_input");
let l_input = document.querySelector(".l_input");


t_input.addEventListener("input", () => {
    mts.textContent = t_input.value;
});

h_input.addEventListener("input", () => {
    hts.textContent = h_input.value;
});

l_input.addEventListener("input", () => {
    lts.textContent = l_input.value;
});
