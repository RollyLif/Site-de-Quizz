let score=0;
let choix=-1;
let chrono=60;

let bouton=document.querySelector('#Commencer');
if(bouton){
    bouton.onclick = function(){
        let nom = document.getElementById('nom').value;
        let email = document.getElementById('email').value;
        let exp= new RegExp("^\\w{2,}$");
        let exp1=new RegExp("^[a-zA-Z]([a-zA-Z0-9._-]{2,})@([a-z0-9._-]{3,})\.([a-z]{2,})$");
        if(exp.test(nom)){
            document.querySelector('.nom_erreur').style.display = 'none';
        }else{
            document.querySelector('.nom_erreur').style.display = 'block';
        }
        if(exp1.test(email)){
            document.querySelector('.email_erreur').style.display = 'none';
        }else{
            document.querySelector('.email_erreur').style.display = 'block';
        }
    
        if(exp.test(nom) && exp1.test(email)){
            localStorage.setItem("nom",nom);
            localStorage.setItem("email", email);
            localStorage.setItem("score", 0);
            
            window.open("Questionnaire.html", "_self");
        }
    };
}

function cocher() {
    let assertions = document.querySelectorAll('.answer');
    assertions.forEach((i)=> 
        i.addEventListener("input", (e) => {
            choix = e.target.id;
        }));
}

cocher();

const questions = [
    {
        Question :"Dans quel balise HTML plaçons-nous le code JavaScript?",
        choix: ["La balise js","La balise javascript","La balise script","La balise rel"],
        reponse :"La balise script"
    },
    {
        Question :"Comment faire appelle à une fonction nommée « sum »?",
        choix: ["sum()","call function sum()","call sum()","Aucune de ces réponses n’est vraie."],
        reponse :"sum()"
    },
    {
        Question :"Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?",
        choix: ['<script href="myscript.js">','<script name="myscript.js">','<script src="myscript.js">','Tout les réponses sont vrais'],
        reponse :'<script src="myscript.js">'
    },
    {
        Question :"Le fichier externe de JavaScript doit contenir la balise <script>?",
        choix: ['Vrai','Faux', null, null],
        reponse :"Faux"
    },
    {
        Question :"Quel est le bon endroit pour insérer un code JavaScript?",
        choix: ['La section <head>','Les deux sections <head> et <body> sont correctes','La section <body>','Aucune de ces réponses n’est vraie.'],
        reponse :'Les deux sections <head> et <body> sont correctes'
    },
    {
        Question :'Comment écrivez-vous « Hello World » dans une boîte d’alerte?',
        choix: ['msg("Hello World");','alert("Hello World");','msgBox("Hello World");','alertBox("Hello World");'],
        reponse :'alert("Hello World");'
    },
    {
        Question :"Comment écrire une condition IF en JavaScript?",
        choix: ['if a = 2 then','if a = 2','if a == 2 else','if (a == 2)'],
        reponse :'if (a == 2)'
    },
    {
        Question :"Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?",
        choix: ['if a <> 2','if (a != 2)','if a =! 2 then','if (a <> 2)'],
        reponse :'if (a != 2)'
    },
    {
        Question :"Comment créer une fonction en JavaScript?",
        choix: ['function f()','function = f()','function:f()',"Aucune de ces réponses n’est vraie."],
        reponse :'function f()'
    },
    {
        Question :'Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?',
        choix: ['if (c == "XYZ") then { } else { }','if (c = "XYZ") then { } else { }','if (c == "XYZ") { } else { }','if (c = "XYZ") { } else { }'],
        reponse :'if (c == "XYZ") { } else { }'
    },
    {
        Question :"Par quoi se termine une instruction en javascript?",
        choix: ["?",".","/",";"],
        reponse :";"
    },
    {
        Question :'Si ch1="ABCED", que retourne ch1.charAt(3)',
        choix: ['true','C','E', 'une erreur'],
        reponse :"E"
    },
    {
        Question :'parseInt("101 dalmatiens"); renvoie',
        choix: ['NaN (Not a Number)','101','une erreur','18'],
        reponse :"101"
    },
    {
        Question :'Quel est l\'utilité de "unsigned" ?',
        choix: ["n'existe pas en JavaScript","déclarer un entier non signé","déclarer un plugin sans certificat","prendre la valeur absolue d'un nombre"],
        reponse :"n'existe pas en JavaScript"
    },
    {
        Question :"Quel objet permet au JavaScript de dialoguer avec un serveur web ?",
        choix: ['XMLparseRequest','XMLHttpRequest','mysql_db_query','http_get_request'],
        reponse :"XMLHttpRequest"
    }
];

function resultat() {
    localStorage.setItem("score", score);
    window.open("resultat.html", "_self");  
}

let quitter = document.querySelector('#quitter');
if(quitter){
    quitter.onclick=function(){
        resultat();
    };
}

let acceuil =document.querySelector('#acceuil');
if(acceuil){
    acceuil.onclick = function () {
        window.open("home.html", "_self");  
    }
}

let nom_resultat = document.querySelector('.titre_nom');
if(nom_resultat){
    nom_resultat.textContent = localStorage.getItem("nom");
}
let email_resultat =document.querySelector('.titre_email');
if(email_resultat){
    email_resultat.textContent = localStorage.getItem("email");
}

function afficheFonction(index) {
    const enonce_label= document.querySelector('#enonce_question');
    const assertion1 = document.querySelector('#assertion1');
    const assertion2 = document.querySelector('#assertion2');
    const assertion3 = document.querySelector('#assertion3');
    const assertion4 = document.querySelector('#assertion4');
    const numero = document.querySelector('.numero_question');

    if(enonce_label && assertion1 && assertion2 && assertion3 && assertion4 && numero){
        enonce_label.textContent = questions[index].Question;
        assertion1.textContent = questions[index].choix[0];
        assertion2.textContent = questions[index].choix[1];
        assertion3.textContent = questions[index].choix[2];
        assertion4.textContent = questions[index].choix[3];
        numero.textContent = 'Question '+(index+1)+'/15';
    }
}

let compteur=0;
afficheFonction(compteur);

const suivent = document.querySelector('#Suivant');

function repondre(){

    if( compteur< 14 ){
        if(questions[compteur].reponse == questions[compteur].choix[(choix-1)]){
            score++;
        }
        localStorage.setItem("score", score);
        compteur++;
        afficheFonction(compteur);
        chrono = 60;
    }else{
        resultat();  
    }

}

if(suivent){
    suivent.addEventListener('click', () => {
     repondre();   
    });
}

const reussite = document.querySelector('#reussite');
const echec = document.querySelector('#echec');

 if(reussite && echec){
    let score_final = localStorage.getItem("score");
            if(score_final<8){
            reussite.style.display = 'none';
            echec.style.display = 'block';
        }else{
            reussite.style.display = 'block';
            echec.style.display = 'none';
        }
    let label_resultat = document.querySelector('.score_final');
        if(score_final){
            label_resultat.textContent = score_final +"/15";
        }
 }

 const progress = document.querySelector('#minuteur');
 const min = document.querySelector('.minuteur');
 setInterval(() => {
        if(chrono>-1){
            if(min && progress ){
                min.textContent = chrono;
                progress.value = chrono;
            }   
        }else{
            repondre(); 
        }
        chrono--;
   
}, 1000);