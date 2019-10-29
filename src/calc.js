function max(a, b) {
    return a > b ? a : b;
}

function roll(die) {
    const rollRes = Math.round(Math.random() * die) + 1;

    if (rollRes === die) {
        return rollRes + roll(die);
    }

    return rollRes;
}

function d4() {
    return roll(4);
}

function d6() {
    return roll(6);
}

function d8() {
    return roll(8);
}

function d10() {
    return roll(10);
}

export function d12() {
    return roll(12);
}

function _4d10() {
    let sum = 0;
    for (let i = 0; i < 4; ++i) {
        sum += d10();
    }

    return sum;
}

export function rollAgainst(what, attacks, dieFn, wildCard, bonus) {
    const successes = [];
    for (let i = 0; i < attacks; ++i) {
        const genericDie = dieFn();
        const wildDie = wildCard ? d6() : 0;

        const dmax = max(genericDie, wildDie) + bonus;

        console.log(`rolled ${genericDie} and ${wildDie}, max was ${dmax}`);

        if (dmax >= what) {
            successes.push(dmax);
        }
    }

    return successes;
}