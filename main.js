const listaNotas = document.querySelectorAll('button');
const listaSons = document.querySelectorAll('audio');

function tocaSom (idSom) {
	document.querySelector(idSom).play();
}

//Adiciona os estilos CSS aos botões do HTML Automaticamente
for(let i = 0; i < listaNotas.length; i++){
	if(listaNotas[i].textContent != "Corda Solta"){
		listaNotas[i].classList.add('nota');
	}else if(listaNotas[i].textContent === "Corda Solta"){
		listaNotas[i].classList.add('nota-solta');
	}


}

//Associa os sons aos botões do site, e faz a distinção entre cordas soltas e notas dentro das cordas
for(let i = 0; i < listaNotas.length; i++){
	const botaoNota = listaNotas[i];
	const idAudio = `#nota-${botaoNota.value}`; //Template String

	if(botaoNota.textContent != "Corda Solta"){
		botaoNota.onclick = function () {
				tocaSom(idAudio);
			}
	}else if(botaoNota.textContent === "Corda Solta"){
		botaoNota.onclick = function () {
			tocaSom(`#${botaoNota.value}`);
		}
	}

	botaoNota.onkeydown = function(evento) {
		if(evento.code === "Space" || evento.code === "Enter"){
			if(botaoNota.textContent === "Corda Solta"){
				botaoNota.classList.add('nota-solta-ativa');
			}else {
				botaoNota.classList.add('ativa');
			}
			
		}
	}

	botaoNota.onkeyup = function () {
		botaoNota.classList.remove('ativa');
		botaoNota.classList.remove('nota-solta-ativa');
	}
	
}
