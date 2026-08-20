let cloud = document.querySelector(".cloudy");
let sunny = document.querySelector(".sunny");
let rainy = document.querySelector(".rainy");
let thunder = document.querySelector(".thunder");
let snowy = document.querySelector(".snowy");
let hamburger = document.querySelector(".hamburger");
let middlefinger = document.querySelector(".middlefinger");
let hhj = document.querySelector(".hhj");

let input = document.querySelector(".w_input");

input.addEventListener("input", () => {
    cloud.classList.remove("on");
    sunny.classList.remove("on");
    ranny.classList.remove("on");
    thunder.classList.remove("on");
    snowy.classList.remove("on");
    hamburger.classList.remove("on");
    middlefinger.classList.remove("on");
    hhj.classList.remove("on");

    if (input.value == "흐림" || input.value == "구름" || input.value == "구름2" || input.value == "구름이") {
        cloud.classList.add("on");
    }
    else if (input.value == "맑음") {
        sunny.classList.add("on");
    }
    else if (input.value == "비" || input.value == "강우") {
        rainy.classList.add("on");
    }
    else if (input.value == "번개" || input.value == "뇌우") {
        thunder.classList.add("on");
    }
    else if (input.value == "눈") {
        snowy.classList.add("on");
    }
    else if (input.value == "햄버거") {
        hamburger.classList.add("on");
    }
    else if (input.value == "중지") {
        middlefinger.classList.add("on");
    }
    else if (input.value == "한형준" || input.value == "형준" || input.value == "멍청이") {
        hhj.classList.add("on");
    }
});

