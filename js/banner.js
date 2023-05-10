


let fotos = ["img1.jpg", "img2.jpg"];
let legendas = ["Banner 1", "Banner 2"];
let timer;

function TrocarFoto(foto){
	
		document.querySelector(".imagem-banner").src = "Banner/" + fotos[foto] ; 
		document.querySelector(".legenda").innerText = legendas[foto];
		
}

let fotoAtual = 0;
TrocarFoto(fotoAtual);

function PlayFoto(){
	timer = setInterval(function(){
	
		fotoAtual++;
		if(fotoAtual > fotos.length - 1){
			fotoAtual = 0;
		}
		
		TrocarFoto(fotoAtual);
	
	} , 4000);

}
	
function PausarFoto(){
 clearInterval(timer);
}

window.onload = PlayFoto;

