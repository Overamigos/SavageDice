import { generateDie } from "./die.js";
import { executeAction  } from "./action.js";
import ready from "./ready.js";

ready(main);

function main() {
    const dieList = [];

    const dieSides = document.getElementById("die-sides");
    const dieAmount = document.getElementById("die-amount");
    const dieAce = document.getElementById("die-ace");
    const addButton = document.getElementById("die-add");

    const actionWild = document.getElementById("action-wild");
    const actionModifier = document.getElementById("action-modifier");
    const executeButton = document.getElementById("action-execute");

    addButton.addEventListener("click", () => {
        const sides = parseInt(dieSides.value, 10);
        const amount = parseInt(dieAmount.value, 10);
        const canAce = dieAce.checked;

        dieList.push(generateDie({ sides, amount, canAce }));
    });

    executeButton.addEventListener("click", () => {
        const compositeDieFn = () => dieList.reduce((acc, die) => acc + die(), 0);
        const wild = actionWild.checked;
        const modifier = parseInt(actionModifier.value, 10);

        alert(executeAction({ wild, modifier, dieFn: compositeDieFn }));
    });
}
