

/**
 * Classe Question
 * Représente une question de quiz avec ses options et la bonne réponse.
 */




 class Question {

    /**
     * @param {Object} data - Données de la question
     * @param {string} data.question - L'intitulé de la question
     * @param {string[]} data.options - Tableau des 4 propositions
     * @param {number} data.correct - Index de la bonne réponse (0..3)
     */
    constructor({question, options, correct}) {

     this.#question = question;
       this.#options = options;
       this.#correct = correct;

    }

// j assume qu il faut des getteur
    get question(){
        return this.#question;
    }
    get option(){
        return this.#options;
    }
    // ben coup donc se fait deja appeler...
    get correct(){
        return this.#correct;
    }

    /**
     * Retourne la lettre correspondant à un index (A, B, C, D…).
     * @param {number} index
     * @returns {string}
     */

    lettreA(index) {
// pourquoi j ai ca la??????????????????? #TODO comprendre wtf c est quoi cela
    return 'A';
    }
// #TODO j ose assumer qu il y a b, c ,d   ?????????????
    lettreB(index) {
// pourquoi j ai ca la??????????????????? #TODO comprendre wtf c est quoi cela
        return 'B';
    }

    lettreC(index) {
// pourquoi j ai ca la??????????????????? #TODO comprendre wtf c est quoi cela
        return 'C';
    }

    lettreD(index) {
// pourquoi j ai ca la??????????????????? #TODO comprendre wtf c est quoi cela
        return 'D';
    }
}