// =============================================================================
// Templates HTML (Constantes)
// =============================================================================

import {
    TEMPLATE_BIENVENUE,
    TEMPLATE_OPTION,
    TEMPLATE_BADGE_JOUEUR,
    TEMPLATE_QUIZ,
    TEMPLATE_JOUEUR_RESULTAT,
    TEMPLATE_RESULTAT
} from "../VuesDynamiques.js";
//#TODO handleRecommancer n est connecter sur rien trouver ou faire dans le pdf
import {handleDemarrer, handleChoixDeReponse, handleQuestionSuivante, handleRecommancer} from "../evenements.js";

//apparement fait boguer toute mes affaire je la met en commentaire VVVVVV
//import {questionsData} from "../donnees";

/**
 * Classe VueQuiz
 * Responsable de l'affichage dans le DOM.
 * Ne contient aucune logique de jeu.
 */
export class VueQuiz {
    #conteneur;
    #quiz;
    #nomsJoueurs = ['', ''];

    /**
     * @param {HTMLElement} conteneur - Élément racine qui accueille la vue
     * @param {Quiz} quiz - Le modèle Quiz
     */
    constructor(quiz) {
        this.#conteneur = document.getElementById('app');
        this.#quiz = quiz;
        quiz.surChangement = () => {
            this.affiche()
        };

    }

    // ---------- Getters & Setters ----------
    get nomsJoueurs() {
        return [...this.#nomsJoueurs];
    }

    get quiz() {
        return this.#quiz;
    }

    definirNomsJoueurs(p1, p2) {
        this.#nomsJoueurs = [p1, p2];
    }

    // ---------- Point d'entrée du rendu ----------
    affiche() {
        if (!this.#quiz.estDemarre) {
            this.#afficheBienvenue();
        } else if (this.#quiz.estTermine) {
            this.#afficheResultat();
        } else {
            this.#afficheQuiz();
        }
    }

    // ---------- Écran d'accueil ----------

    //#TODO a modifier pour montrer des choses ... je pense?
    #afficheBienvenue() {

        this.#conteneur.innerHTML = TEMPLATE_BIENVENUE;
        document.getElementById('startBtn').addEventListener('click', (ev) => {
            handleDemarrer(ev, this)
        });

        const champJoueur1 = this.#conteneur.querySelector('#player1');
        const champJoueur2 = this.#conteneur.querySelector('#player2');

        if (champJoueur1 && this.#nomsJoueurs[0]) {
            champJoueur1.value = this.#nomsJoueurs[0];
        }
        if (champJoueur2 && this.#nomsJoueurs[1]) {
            champJoueur2.value = this.#nomsJoueurs[1];
        }
    }

    // ---------- Écran de quiz ----------
    #afficheQuiz() {

        // fait des constante pour la panoplie d affaire pas referencer
        const quiz = this.#quiz;
        const q = quiz.questionActuelle;
        const estRepondu = quiz.estRepondu;
        const reponseChoisie = quiz.reponseChoisie;

        if (!q) {
            alert("no question 97")
        }
        if (q.options === false) {
            alert("ne va pas dans la question? 100")
        }
        //apparement je me suis gourer quelque part la dedans?
        let htmlOptions = '';
        for (let i = 0; i < q.options.length; i++) {
            const option = q.options[i];
            const classes = this.#determinerClasseAppropriee(i, q, estRepondu, reponseChoisie);
            htmlOptions += '' + TEMPLATE_OPTION(classes, i, q.lettreA(i), option);
        }


        // #TODO besoin d un affichage TODO
// je ne sais pas trop demander de l aide a comprendre par moi meme plus tard...
        const htmlBadge = quiz.joueurs.map((joueur, index) =>
            TEMPLATE_BADGE_JOUEUR(
                joueur.nomsJoueurs,
                joueur.scoreJoueur,
                index === quiz.indexJoueurActuel
            )
        ).join('');
        // trouver que fait Html OPTION
        this.#conteneur.innerHTML = TEMPLATE_QUIZ(htmlBadge, this.nomsJoueurs, q.scoreJoueur, htmlOptions, q.question);

        //juste un event listener sufisant ???
        this.#conteneur.querySelector('#nextBtn')?.addEventListener('click', (ev) => {
            handleQuestionSuivante(ev, quiz);
            //this.#afficheQuiz();
        });

        //OUFFF
        this.#conteneur.querySelectorAll('[data-index]').forEach((option) => {
            option.addEventListener('click', (ev) => {
                handleChoixDeReponse(ev, quiz)
            });
        });

    }

    /*
        document.getElementById('nextBtn').addEventListener('click',
    (ev) => {
        handleQuestionSuivante(ev, quiz)
    }
    );
    */

    // ---------- Écran de résultat ----------
    #afficheResultat() {

        // faire une fonction qui affiche le resultat , je guess que je dois faire appel a Joueur
        Joueur.scoreJoueur


    }

    // ---------- Utilitaires ----------
    /**
     * Détermine les classes CSS d'une option en fonction de l'état de la question.
     */
    #determinerClasseAppropriee(index, question, estRepondu, reponseChoisie) {
        const classes = ['option-btn'];
        let retClasses = "";

        if (!estRepondu) {
            retClasses = classes.join(' '); // pour retirer le tableau
        } else {
            classes.push('disabled');
            if (index === question.indexCorrect) {
                classes.push('correct');
            } else if (index === reponseChoisie) {
                classes.push('incorrect');
            }
            if (index === reponseChoisie) {
                classes.push('selected');
            }
            retClasses = classes.join(' '); // pour retirer le tableau et joindre les classes sélectionnées
        }

        return retClasses;

    }
}
