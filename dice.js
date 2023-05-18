let _white, _white2, _yellow, _green, _red, _blue;
let elList = "";
let playEnNumber = 0;

const $white = document.getElementById("white");
const $white2 = document.getElementById("white2");
const $yellow = document.getElementById("yellow");
const $red = document.getElementById("red");
const $green = document.getElementById("green");
const $blue = document.getElementById("blue");

const $calww = document.getElementById("calww");
const $calwy = document.getElementById("calwy");
const $calwr = document.getElementById("calwr");
const $calwb = document.getElementById("calwb");
const $calwg = document.getElementById("calwg");
const $calw2y = document.getElementById("calw2y");
const $calw2r = document.getElementById("calw2r");
const $calw2g = document.getElementById("calw2g");
const $calw2b = document.getElementById("calw2b");

const list = document.getElementById("list");

const _roller = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const _diceRoller = () => {
    _yellow = _roller();
    _white = _roller();
    _white2 = _roller();
    _green = _roller();
    _blue = _roller();
    _red = _roller();

    diceTypeSet($white, _white);
    diceTypeSet($white2, _white2);
    diceTypeSet($yellow, _yellow);
    diceTypeSet($red, _red);
    diceTypeSet($green, _green);
    diceTypeSet($blue, _blue);

    $calww.innerText = _white + _white2;
    $calwy.innerText = _white + _yellow;
    $calwr.innerText = _white + _red;
    $calwg.innerText = _white + _green;
    $calwb.innerText = _white + _blue;
    $calw2y.innerText = _white2 + _yellow;
    $calw2r.innerText = _white2 + _red;
    $calw2g.innerText = _white2 + _green;
    $calw2b.innerText = _white2 + _blue;

    elList += '<ul class="number">';
    elList += "<li>" + _white + "</li>";
    elList += "<li>" + _white2 + "</li>";
    elList += "<li>" + _yellow + "</li>";
    elList += "<li>" + _red + "</li>";
    elList += "<li>" + _green + "</li>";
    elList += "<li>" + _blue + "</li>";
    elList += "</ul>";

    list.innerHTML = elList;
};

const removeDice = (color) => {
    const list = document.getElementsByClassName("bg-" + color);
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("dim");
    }
    playEnNumber++;
    playEnd(playEnNumber);
};

const reset = () => {
    const dim = document.querySelectorAll(".dim");
    const num = document.querySelectorAll(".num");
    dim.forEach((e) => {
        e.classList.remove("dim");
    });
    num.forEach((e) => {
        e.innerText = 0;
    });
    list.innerHTML = "";
    elList = "";
    playEnNumber = 0;
};

const playEnd = (num) => {
    if (num >= 2) {
        alert("게임이 종료 되었습니다.");
        reset();
    }
};

const numberSet = () => {};

const diceTypeSet = (el, num) => {
    const box = el.children[0];
    box.className = "box";
    box.classList.add("spin");
    const spin = setTimeout(() => {
        box.classList.remove("spin");
        box.classList.add(`type${num}`);
    }, 1000);
};
