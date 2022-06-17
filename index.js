function refreshProgress(){
    let progressBar=document.querySelector('progress');
    let valeur=ProgressBar.getValue();
    progressBar.setAttribute('value',valeur--);
}