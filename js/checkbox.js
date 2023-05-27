const checkbox_one = document.querySelector('.one');
const checkbox_two = document.querySelector('.two');
const checkbox_three = document.querySelector('.three');
const checkbox_four = document.querySelector('.four');
const checkbox_five = document.querySelector('.five');
const checkbox_six = document.querySelector('.six');

const totalCost = document.getElementById('totalCost');

var total = 0;

totalCost.innerHTML = "Coût total de votre site : 0€";

checkbox_one.addEventListener('change', function () {
    if (this.checked) {
        total += 100;
    } else if(!this.checked) {
        total -= 100;
    }
    button();
});
checkbox_two.addEventListener('change', function () {
    if (this.checked) {
        total += 100;
    } else if(!this.checked) {
        total -= 100;
    }
    button();
});
checkbox_three.addEventListener('change', function () {
    if (this.checked) {
        total += 100;
    } else if(!this.checked) {
        total -= 100;
    }
    button();
});
checkbox_four.addEventListener('change', function () {
    if (this.checked) {
        total += 100;
    } else if(!this.checked) {
        total -= 100;
    }
    button();
});
checkbox_five.addEventListener('change', function () {
    if (this.checked) {
        total += 100;
    } else if(!this.checked) {
        total -= 100;
    }
    button();
});
checkbox_six.addEventListener('change', function () {
    if (this.checked) {
        total += 100;
    } else if(!this.checked) {
        total -= 100;
    }
    button();
});

function button() {
    totalCost.innerHTML = "Coût total de votre site : " + total + "€";
}
