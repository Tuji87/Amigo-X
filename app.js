//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        input.value = "";
        return;
    }

    listaAmigos.push(nome);
    exibirLista();
    input.value = "";
}

// Função para exibir a lista de amigos na tela
function exibirLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = () => removerAmigo(index);

        li.appendChild(removeButton);
        listaElement.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    exibirLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    const sorteadoIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[sorteadoIndex];

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;

    // Limpa a lista e o resultado após 10 segundos
    setTimeout(() => {
        listaAmigos = [];
        exibirLista();
        resultadoElement.innerHTML = "";
    }, 10000);
}
