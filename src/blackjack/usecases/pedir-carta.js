/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} nuevoDeckCreado 
 * @returns {<string>}
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}