let slideIndex = 1;
let text = document.getElementsByClassName("text");
let sizeArray = document.getElementsByClassName("size");
let quantityArray = [4, 7, 9, 3];

function incDivs() {
    showDivs(slideIndex += 1);
}

function decDivs() {
    showDivs(slideIndex -= 1);
}

function showDivs(n) {
    let x = document.getElementsByClassName("pics");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function chooseSize() {
    ///FOR EACH
    for (let i = 0; i < sizeArray.length; i++) {
        sizeArray[i].addEventListener("click", function () {
            if (sizeArray[i].classList.contains("active")) {
                sizeArray[i].classList.remove("active");
                document.getElementById("available_field").innerHTML = "-";
            } else {
                for (let j = 0; j < sizeArray.length; j++) {
                    sizeArray[j].classList.remove("active");
                }
                document.getElementById("available_field").innerHTML = quantityArray[i].toString();
                sizeArray[i].classList.add("active");
            }
            if (quantityArray[i] == 0) {
                document.getElementById("status").innerText = 'OUT OF STOCK';
            } else if (quantityArray[i] > 0) {
                document.getElementById("status").innerText = 'AVAILABLE';
            }
        })
        refreshNumbers();
    }
}

document.getElementById("buttonLeft").addEventListener("click", decDivs);
document.getElementById("buttonRight").addEventListener("click", incDivs);

function changeText() {
    document.getElementById("read").style.display = "none";
    document.getElementById("readButton").addEventListener("click", function () {
        document.getElementById("read").style.display = "block";
        document.getElementById("buy").style.display = "none";
    });
    document.getElementById("buyButton").addEventListener("click", function () {
        document.getElementById("read").style.display = "none";
        document.getElementById("buy").style.display = "block";
    });
}

function addItem() {
    let button = document.getElementById("addToBasket");
    button.addEventListener("click", function () {
        for (let i = 0; i < sizeArray.length; i++) {
            if (sizeArray[i].classList.contains("active") && quantityArray[i] > 0) {
                document.getElementById('itemsNr').innerText++;
                quantityArray[i]--;
                refreshNumbers();
            }
            if (sizeArray[i].classList.contains("active") && quantityArray[i] == 0) {
                document.getElementById("status").innerText = 'OUT OF STOCK';
            }
        }
    })
}

function refreshNumbers() {
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].classList.contains("active")) {
            document.getElementById("available_field").innerHTML = quantityArray[i].toString();
        }
    }
}

chooseSize();
showDivs(slideIndex);
changeText();
addItem();









