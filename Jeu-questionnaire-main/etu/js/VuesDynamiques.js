// apparement inutile ?? >>>import { questionsData } from "./donnees";

export const TEMPLATE_BIENVENUE = `
    <div class="welcome-screen">
        <h1>🧠 Quiz à deux</h1>
        <p class="subtitle">Entrez les noms des deux joueurs</p>
        <p> ceci est un test de TEMPLATE_BIENVENUE</p>
        <div class="player-input-group">
            <div class="player-input-box">
                <label for="player1">Joueur 1</label>
                <input type="text" id="player1" placeholder="Nom du joueur 1">
            </div>
            <div class="player-input-box">
                <label for="player2">Joueur 2</label>
                <input type="text" id="player2" placeholder="Nom du joueur 2">
            </div>
        </div>
        <div class="error-msg" id="errorMsg"></div>
        <button class="btn btn-start" id="startBtn">Démarrer</button>
    </div>
`;

// apparement il faut que j utilise HTMLElement dataset property?
export const TEMPLATE_OPTION = (classes, index, lettre, option) => `
    <div class="${classes}" data-index="${index}">
        <span class="letter">${lettre}</span>
        ${option}
         
         
         <p> ceci est un test de template option</p>
    </div>
   
`;

// Compléter TEMPLATE_BADGE_JOUEUR
//#TODO remplir l inteireur et se renquerir sur se a quoi cela sert? , poser question / se frapper la tete contre un mur

// cette classe selon les indice donné utilise :player-badge, active, name, score, indicator
export const TEMPLATE_BADGE_JOUEUR = (nom,score,estActif )=> `
<div class="player-badge ${estActif ? 'active' : ''}">  
<div class="nom">
<div class="score">
<div class="estActif">
</div>


`;



/*
//#TODO modifier cela ce n est pas correct
 <h1>TEMPLATE_BADGE_JOUEUR</h1>


 <p class="name">${nom}</p>



   <p> ceci est un test de TEMPLATE_BADGE_JOUEUR</p>
    <p class="subtitle">TEMPLATE_BADGE_JOUEUR</p>


    <div class="player-badge"  >
        <div class="player-input-box">${A & B}</div>
        <div class="score">
            ${htmlJoueurs}
        </div>
        <button class="btn btn-restart" id="restartBtn">🔄 Nouvelle partie</button>
    </div>
    */














// Compléter TEMPLATE_QUIZ
//#TODO vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// avec les indice donné Template_quiz dois utiliser : subtitle, player-status, question-text,
// toujours avec les indices donne les choix de réponses utilisent les classes: options-grid,
// La partie du bouton utilise les classes : nav-buttons, btn et btn-next
export const TEMPLATE_QUIZ = (    htmlJoueurs,nom,score,htmlOption,htmlQuestion                                   )=> `




//#TODO modifier cela ce n est pas correct
 <h1>TEMPLATE_QUIZ</h1>
 
    <p class="question-text">TEMPLATE_QUIZ</p>
    
<p> ceci est un test de TEMPLATE_QUIZ</p>

    <div class="question-text"> 
    
    
     <p class="subtitle">${nom}</p>
    <div class="players-status" >${htmlQuestion}</div>
    <div class="question-text" >${htmlQuestion}</div>
    <div class="options-grid"> ${htmlOption}</div>
    <div class="nav-buttons">
    <button id="nextBtn" class="btn btn-next" type="button">Suivant</button>
</div>
    


`;

//peu reutiliser cela au besoin
/*


<p class="jaune-couleur-texte-TODO?">A (${questionsData}) </p>
</div>
    <div class="question-text">
<p class="jaune-couleur-texte-TODO?">B (${questionsData}) </p>
</div>
    <div class="question-text">
<p class="jaune-couleur-texte-TODO?">C (${questionsData}) </p>
</div>
    <div class="question-text">
<p class="jaune-couleur-texte-TODO?">D (${questionsData}) </p>
</div>

    <div class="result-message">${A & B}</div>
    <div class="result-score">
        ${htmlJoueurs}
    </div>
    <button class="btn btn-restart" id="restartBtn">🔄 Nouvelle partie</button>

*/


//#TODO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




export const TEMPLATE_JOUEUR_RESULTAT = (nom, score, estGagnant, htmlIcones = '') => `
    <div class="result-player ${estGagnant ? 'winner' : ''}">
        <div class="name">${nom}</div>
        <div class="score">${score}</div>
           <p> ceci est un test de TEMPLATE_JOUEUR_RESULTAT</p>
    </div>
`;

export const TEMPLATE_RESULTAT = (htmlJoueurs, messageGagnant ) => `
    <h1>🧠 Quiz</h1>
    <p class="subtitle">Résultat final</p>

    <div class="result-container">
        <div class="result-message">${messageGagnant}</div>
        <div class="result-score">
             <p> ceci est un test de TEMPLATE_RESULTAT</p>
            ${htmlJoueurs}
        </div>
        <button class="btn btn-restart" id="restartBtn">🔄 Nouvelle partie</button>
    </div>
`;

