let txt= document.getElementById('counter');
let btn = document.getElementById('increment-btn');
let counter= new Number(txt.innerHTML.valueOf());
let saved = document.getElementById('saving')

btn.addEventListener('click', function () {
    ++counter;
    txt.innerHTML = counter.toString();
});

function save() {
    if (saved.innerHTML.valueOf() === '') {
        saved.innerHTML = counter;
    }
    else {
        saved.innerHTML = saved.innerHTML.valueOf() + ' - ' + counter;
    }
    counter = 0;
    txt.innerHTML = counter;
}

let in1 = new Number (document.getElementById('in_1').value);
let in2 = new Number (document.getElementById('in_2').value);
let res = document.getElementById('result');
function plus() { res.innerHTML = (in1+in2).toString(); }
function subtract() { res.innerHTML = (in1-in2).toString(); }
function multi() { res.innerHTML = (in1*in2).toString(); }
function divid() { res.innerHTML = (in1/in2).toFixed(); }
