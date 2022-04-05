const listaNotas = document.querySelectorAll('button');

for(let i = 0; i < listaNotas.length; i++){
	if(listaNotas[i].textContent != "Corda Solta"){
		listaNotas[i].classList.add('nota');
	}else if(listaNotas[i].textContent === "Corda Solta"){
		listaNotas[i].classList.add('nota-solta');
	}

}
