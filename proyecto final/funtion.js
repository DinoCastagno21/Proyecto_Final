 function fotoCompleta(){
    
    let img = document.getElementById('foto')
     img.style.visibility = 'visible';
     img.onclick = () => {
        img.style.visibility = 'hidden';
     }
}
