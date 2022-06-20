let bouton=document.querySelector('#Commencer');
bouton.onclick = function(){
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    alert(nom+" et "+email);
};