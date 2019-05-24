const back = document.getElementById("background");
const tip = document.getElementById("tip");
let tilesArray = document.getElementsByClassName("tile");
let picsArray = document.getElementsByClassName("tilePic");
let contentCategories = document.getElementsByClassName("category");
let content = document.getElementsByClassName("tile");
let category = ['tshirt', 'hoodie', 'cap', 'accessory', 'all'];
let sideBarArray = document.getElementsByClassName("cat");

function openTile() {
    for (let i = 0; i < tilesArray.length; i++) {
        tilesArray[i].addEventListener("click", function () {
            setTileDisplay("inline-block", i);
        });
        picsArray[i].addEventListener("click", function () {
            setTileDisplay("none", i);
        });
        back.addEventListener("click", function () {
            setTileDisplay("none", i);
        });
    }
}

function setTileDisplay(value, i) {
    picsArray[i].style.display = value;
    back.style.display = value;
    tip.style.display = value;
}

document.getElementById("nemek").addEventListener("click", function () {
    document.getElementById("back").classList.add("fadeOut");
    document.getElementById("nemek").classList.add("delete");

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
            filter(category[i]);
        })
    }
}

function setDisplay(string, i) {
    content[i].style.display = string;
}

openTile();
filterListen();
