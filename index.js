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

};