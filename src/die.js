function roll(die, canAce) {
    const rollResult = Math.ceil(Math.random() * die);

    if (rollResult === die && canAce) {
        return rollResult + roll(die, canAce);
    }

    return rollResult;
}

/**
 * Gera uma função que simula uma rolagem de amount dados
 * @param {number} die A quantidade de lados dos dados
 * @param {number} amount A quantidade de dados a serem rolados
 * @param {boolean} canAce Indica se o dado pode "estourar"
 * @returns {Function} Função que simula a rolagem
 */
export function generateDie({ sides, amount, canAce }) {
    return function() {
        let accumulator = 0;

        for (let i = 0; i < amount; i++) {
            accumulator += roll(sides, canAce);
        }

        return accumulator;
    };
}
