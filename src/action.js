import { generateDie } from "./die.js";

const d6 = generateDie({ sides: 6, amount: 1, canAce: true, modifier: 0 });

export function executeAction({ dieFn, wild, modifier }) {
    const genericDie = dieFn();
    const wildDie = wild ? d6() : 0;

    const dmax = Math.max(genericDie, wildDie) + modifier;

    return dmax;
}
