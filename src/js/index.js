/*
A tecla "Ctrl" + ";" transforma em comentáriio.
*/ 

// const itemCiclope = document.getElementById('ciclope');
/*
console.log() - mostrar na web
*/

// const itemJeanGrey = document.getElementById('jean-grey');

//Passo 1
const personagens = document.querySelectorAll('.personagem');

// personagem.addEventListener('click', () => {console.log('clicou')});

//Passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado')
        
        alterarImagemPersonagemSelecionado(personagem);

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})
function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

/*
Para criar uma função: selecione as linhas que compõe o comando, click com o botão direito > vá em refatorar >
extrair function para escopo global > renomee a função e de enter.
*/
function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

