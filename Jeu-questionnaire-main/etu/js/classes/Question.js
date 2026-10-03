/**
 * Classe Question
 * Représente une question de quiz avec ses options et la bonne réponse.
 */


export class Question {
 // sert a se que cela ne derange plus avec mes point d arret
    #enonce ;
    #options;
    #indexCorrect;


    /**
     * @param {Object} data - Données de la question
     * @param {string} data.question - L'intitulé de la question
     * @param {string[]} data.options - Tableau des 4 propositions
     * @param {number} data.correct - Index de la bonne réponse (0..3)
     */
    constructor({question, options, correct}) {


        this.#enonce  = question;
        // c est un tableau???????????, ben oui je suis stupide
        this.#options = [options];
        this.#indexCorrect = correct;

    }

// j assume qu il faut des getteur
    get question() {
        return this.#enonce ;
    }
//pourquoi ne se fait pas appeler :|
    get option() {
        return [this.#options];
    }

    // ben coup donc se fait deja appeler...
    get correct() {
       // return this.#indexCorrect;
        // jassume ici #TODO retirer du code si non besoin
        return indexDuTableau === this.#indexCorrect;
    }

    /**
     * Retourne la lettre correspondant à un index (A, B, C, D…).
     * @param {number} index
     * @returns {string}
     */
// ont m informe que je suis pas obiger de le faire pour chaque lettre YOUPI!!!
    lettreA(index) {
// pourquoi j ai ca la??????????????????? #TODO comprendre wtf c est quoi cela
        return String.fromCharCode(65+ index);
    }
/*
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
    */

}