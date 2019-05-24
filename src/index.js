const back = document.getElementById("modalBackground");
const tip = document.getElementById("modalTip");
let tilesArray = document.getElementsByClassName("box");
let picsArray = document.getElementsByClassName("boxPic");
let contentCategories = document.getElementsByClassName("filterCategory");
let content = document.getElementsByClassName("box");
let categories = ['tshirt', 'hoodie', 'cap', 'accessory', 'all'];
let sideBarArray = document.getElementsByClassName("sidebarCategory");

function openTile() {
    for (let i = 0; i < tilesArray.length; i++) {
        tilesArray[i].addEventListener("click", function () {
            setBoxDisplay("inline-block", i);
        });
        picsArray[i].addEventListener("click", function () {
            setBoxDisplay("none", i);
        });
        back.addEventListener("click", function () {
            setBoxDisplay("none", i);
        });
    }
}

function setBoxDisplay(value, i) {
    picsArray[i].style.display = value;
    back.style.display = value;
    tip.style.display = value;
}

document.getElementById("nemekAnimation").addEventListener("click", function () {
    document.getElementById("animationBackground").classList.add("fadeOut");
    document.getElementById("nemekAnimation").classList.add("delete");

});

function filter(string) {
    for (let i = 0; i < content.length; i++) {
        setDisplay('inline-block', i);
    }
    for (let i = 0; i < content.length; i++) {
        if (string !== 'all' && contentCategories[i].innerText !== string) {
            setDisplay('none', i);
        }
    }
}

function filterListen() {
    for (let i = 0; i < sideBarArray.length; i++) {
        sideBarArray[i].addEventListener("click", function () {
            filter(categories[i]);
        })
    }
}

function setDisplay(string, i) {
    content[i].style.display = string;
}

function main() {
    openTile();
    filterListen();
}

main();

