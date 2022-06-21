let bouton=document.querySelector('#Commencer');
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

    if(exp.test(nom)&&exp1.test(email)){
        window.open("Questionnaire.html", "_self");
    }
};

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
]