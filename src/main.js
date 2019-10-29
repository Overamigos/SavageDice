import * as calc from './calc.js';
import ready from './ready.js';

ready(main);

function main() {
    const input = document.getElementById("against");

    input.addEventListener("change", function() {
        const val = this.nodeValue;

        console.log(calc.rollAgainst(val, 4, calc.d12, false, 0));
    });
}
