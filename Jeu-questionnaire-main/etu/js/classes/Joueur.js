/**
 * Classe Joueur
 * Représente un joueur avec son nom et son score.
 */
class Joueur {
    #nomsJoueurs;
    #scoreJoueur;


    constructor() {
        //   this.payerAroB = false ; // est-ce ton tour # NE SERAIS PAS NECESAIRE
        this.#nomsJoueurs = ""; // ton nom recoit un parametre en chaine de charatere  #TODO Dois etre > get <
        this.#scoreJoueur = 0; // tes points  #TODO Dois etre > get <
    }


    get nomJoueur() {
        return this.#nomsJoueurs;
    }

    get scoreJoueur() {
        return this.#scoreJoueur;
    }

    /**
     * Compare le score avec un autre joueur.
     * @param {Joueur} autre
     * @returns {number} 1 si supérieur, -1 si inférieur, 0 si égalité
     */
    comparerA(autre) {

        if (this.#scoreJoueur > autre.#scoreJoueur) {
            return 1
        } else if (this.#scoreJoueur < autre.#scoreJoueur) {
            return -1
        } else return 0;


    }

// ajouteur de point a joueur ...???? c est pas juste un get++ ???? #TODO chercher le piege
    ajouterPoint() {
        this.#scoreJoueur++;
    }

// cela ne peu pas etre aussi facile que ca??? #TODO chercher le piege
    reinitialiser() {
        this.#scoreJoueur = 0;
    }

}
