// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigosSorteados = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value.trim() ;
    
    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(nombreAmigo);
        }
    console.log(listaAmigos);
    limpiarCampoEntrada();
    actualizarAmigos();
}



function limpiarCampoEntrada(){
    document.querySelector('#amigo').value = ' ';
    return;
}

function actualizarAmigos (){
    let listahtml = document.getElementById("listaAmigos");
    listahtml.innerHTML = "";
    
    for(let i = 0;
        i < listaAmigos.length;
        i++){
            let li = document.createElement("li");
            li.textContent = listaAmigos[i];
            listahtml.appendChild(li);
        }
}

function sortearAmigo(){

    if (listaAmigos.length>0){
        let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoAsignado = listaAmigos[indiceAleatorio]
        
            if (amigosSorteados.length === listaAmigos.length) {
                alert('Ya se sortearon todos los amigos');
                } else {
                    if (amigosSorteados.includes(amigoAsignado)){
                        return sortearAmigo();
                    } else { 
                        amigosSorteados.push(amigoAsignado);
                        let resultado = document.getElementById("resultado");
                        resultado.innerHTML = amigoAsignado
                        }
                    }
    }
}
