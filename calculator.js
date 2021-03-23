const calculatrices = [
    {
        valeur: 'x²',
        class: 'bouton'
    },
    {
        valeur: 'sin',
        class: 'bouton'
    },
    {
        valeur: 'cos',
        class: 'bouton'
    },
    {
        valeur: 'tan',
        class: 'bouton'
    },
    {
        valeur: 'AC',
        class: 'suppbouton'
    },
    {
        valeur: 'DEL',
        class: 'corrbouton'
    },
    {
        valeur:'%',
        class: 'bouton'
    },
    {
        valeur: '/',
        affichage: "÷",
        class: 'bouton'
    },
    {
        valeur: '1',
        class: 'bouton'
    },
    {
        valeur: '2',
        class: 'bouton'
    },
    {
        valeur: '3',
        class: 'bouton'
    },
    {
        valeur: '*',
        affichage: "x",
        class: 'bouton'
    },
    {
        valeur: '4',
        class: 'bouton'
    },
    {
        valeur: '5',
        class: 'bouton'
    },
    {
        valeur: '6',
        class: 'bouton'
    },
    {
        valeur: '-',
        class: 'bouton'
    },
    {
        valeur: '7',
        class: 'bouton'
    },
    {
        valeur: '8',
        class: 'bouton'
    },
    {
        valeur: '9',
        class: 'bouton'
    },
    {
        valeur: '+',
        class: 'bouton'
    },
    {
        valeur: '.',
        class: 'bouton'
    },
    {
        valeur: '0',
        class: 'bouton'
    },
    {
        valeur: '=',
        class: 'larges'
    },
]


document.querySelector('.calculatrice-contenaire').innerHTML = '';
const mainContainer = document.querySelector('.calculatrice-contenaire');

const resultat = document.createElement('div');
resultat.className = 'output'
mainContainer.appendChild(resultat);

//=========================== Historique + fonction ============================//
const historique = document.createElement('div');
historique.className = 'Operation-Precedente'
resultat.appendChild(historique);

let OperationPrecedente

function creation() {
    const p = document.createElement('p')
    p.textContent = OperationPrecedente
    historique.appendChild(p)
}

//===============================              =================================//

const OperationActuelle = document.createElement('div');
OperationActuelle.className = 'Operation-Actuel';
resultat.appendChild(OperationActuelle);

//========================== Fonction de calcul ================================//

function safeEval(str) {
    return Function('return ' + str)()
}

function sin() {
    return Math.sin(OperationActuelle.textContent)
}

function cos() {
    return Math.cos(OperationActuelle.textContent)
}

function tan() {
    return Math.tan(OperationActuelle.textContent)
}

function exp() {
    return Math.pow(OperationActuelle.textContent, 2)
}
function pourcent() {
    return (OperationActuelle.textContent/100)
}
//======================= Boucle d'affichage des valeurs =======================//
for (let element of calculatrices) {

    const buttons = document.createElement('button');

    //======================= afficher du signe ÷ ==========================//

    if (element.affichage) {
        buttons.textContent = element.affichage;
    } else {
        buttons.textContent = element.valeur;
    }
        buttons.className = element.class;
        mainContainer.appendChild(buttons);
        buttons.addEventListener("click", function () {

        //======================== bouton delete(clear) =========================//

        if (element.valeur == 'AC') {
            OperationActuelle.textContent = ' ';
            historique.textContent = ' ';

        } else if (element.valeur == 'DEL') {
            OperationActuelle.textContent = ' ';
        }
        //======================== bouton égal (=) ==============================//
        else if (element.valeur == '=') {
            OperationPrecedente = OperationActuelle.textContent;
            let calcul = safeEval(OperationActuelle.textContent);
            OperationActuelle.textContent = calcul;
            OperationPrecedente = OperationPrecedente + '=' + calcul;
            creation(OperationPrecedente);
            OperationActuelle.textContent = ' ';
        } 
        //======================== bouton sinus (sin) ===========================//
        else if (element.valeur == 'sin') {
            OperationPrecedente = 'sin('+ OperationActuelle.textContent ;
            let sinus = sin(OperationActuelle.textContent);
            OperationActuelle.textContent = sinus;
            OperationPrecedente = OperationPrecedente + '=' + sinus;
            creation(OperationPrecedente);
            OperationActuelle.textContent = ' ';
        } 
        //======================= bouton cosinus (cos) ==========================//
        else if (element.valeur == 'cos') {
            OperationPrecedente = 'cos('+ OperationActuelle.textContent ;
            let cosinus = cos(OperationActuelle.textContent);
            OperationActuelle.textContent = cosinus;
            OperationPrecedente = OperationPrecedente + '=' + cosinus;
            creation(OperationPrecedente);
            OperationActuelle.textContent = ' ';
        } 
        //======================= bouton tangente (tan) ==========================//
        else if (element.valeur == 'tan') {
            OperationPrecedente = 'tan('+ OperationActuelle.textContent ;
            let tangente = tan(OperationActuelle.textContent);
            OperationActuelle.textContent = tangente;
            OperationPrecedente = OperationPrecedente + '=' + tangente;
            creation(OperationPrecedente);
            OperationActuelle.textContent = ' ';  
        } 
        //====================== bouton exposant (exp) ==========================//
        else if (element.valeur == 'x²') {
            OperationPrecedente =OperationActuelle.textContent +'²' ;
            let exposant = exp();
            OperationActuelle.textContent = exposant;
            OperationPrecedente = OperationPrecedente + '=' + exposant;
            creation(OperationPrecedente);
            OperationActuelle.textContent = ' ';
        } 
        //====================== bouton pourcentage (%) ==========================//
        else if (element.valeur == '%') {
            OperationPrecedente =OperationActuelle.textContent +'%' ;
            let pourcentage = pourcent();
            OperationActuelle.textContent = pourcentage;
            OperationPrecedente = OperationPrecedente + '=' + pourcentage;
            creation(OperationPrecedente);
            OperationActuelle.textContent = ' ';
        }
        else {
            OperationActuelle.textContent = OperationActuelle.textContent + element.valeur;
        }
    })

}