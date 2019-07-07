const back = document.getElementById("modalBackground");
const tip = document.getElementById("modalTip");

let picsArray = document.getElementsByClassName("boxPic");
let contentArray = document.getElementsByClassName("box");

let contentCategories = document.getElementsByClassName("filterCategory");
const categories = ['tshirt', 'hoodie', 'cap', 'accessory'];
let sideBarArray = document.getElementsByClassName("sidebarCategory");

const siteCategories = document.getElementsByClassName('navigationField');
siteCategories[0].classList.add('choosen');

function openBox() {
    for (let i = 0; i < contentArray.length; i++) {
        contentArray[i].addEventListener("click", function () {
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
    for (let i = 0; i < contentArray.length; i++) {
        setDisplay('inline-block', i);
    }
    for (let i = 0; i < contentArray.length; i++) {
        if (string != null && contentCategories[i].innerText !== string) {
            setDisplay('none', i);
        }
    }
}

function checkArray() {
    for (let i = 0; i < sideBarArray.length; i++) {
        if (sideBarArray[i].classList.contains("pressed")) {
            return i;
        }
    }
}

function filterListen() {
    let allowedPress=1;
    for (let i = 0; i < sideBarArray.length; i++) {
        sideBarArray[i].addEventListener("click", function () {
            if (sideBarArray[i].classList.contains("pressed")) {
                sideBarArray[i].classList.remove("pressed");
                allowedPress++;
                filter();
            } else if (allowedPress === 1) {
                sideBarArray[i].classList.add("pressed");
                allowedPress--;
                filter(categories[i]);
            } else if (allowedPress === 0) {
                sideBarArray[checkArray()].classList.remove("pressed");
                sideBarArray[i].classList.add("pressed");
                filter(categories[i]);
            }
        })
    }
}

function setDisplay(string, i) {
    contentArray[i].style.display = string;
}

function main() {
    openBox();
    filterListen();
}

main();

