let tarefas = [];
let botoes = document.getElementById("botoes");
let mensagemAposAdicionarTarefa = document.getElementById("mensagem");

function adicionarTarefa() {
  let inputTarefa = window.document.getElementById("inputTarefa");

  let valorTarefa = inputTarefa.value.trim();

  if (valorTarefa.length == "") {
    mensagemAposAdicionarTarefa.textContent = `Porfavor, digite o nome da tarefa`;
    mensagemAposAdicionarTarefa.style.color = "#e61919";
  } else {
    mensagemAposAdicionarTarefa.textContent = "Tarefa adicionada com sucesso!";
    mensagemAposAdicionarTarefa.style.color = "#3c7319";
    tarefas.push(valorTarefa);
    renderizarTarefas();

    if (tarefas.length !== "") {
      let botaoLimparLista = document.createElement("button");
      botaoLimparLista.textContent = "Limpar tudo";
      botaoLimparLista.className = "botao_lista";
      botoes.appendChild(botaoLimparLista);
      botaoLimparLista.onclick = () => limparLista();
    }
  }
  inputTarefa.value = "";
}

function renderizarTarefas() {
  let lista = window.document.getElementById("lista");
  lista.innerHTML = "";
  for (let i = 0; i < tarefas.length; i++) {
    let criarLinha = document.createElement("li");
    criarLinha.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i); //É passado para a função removerTarefa o valor do indice (i) do array da respectiva tarefa

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i); //É passado para a função editarTarefa o valor do indice (i) do array da respectiva tarefa

    lista.appendChild(criarLinha);
    criarLinha.appendChild(botaoRemover);
    criarLinha.appendChild(botaoEditar);
  }
}

//Função removerTarefa recebe o valor do índice do array como argumento e assim ela tem acesso a ele
function removerTarefa(i) {
  tarefas.splice(i, 1); //Método splice remove um elemento do indice atual, basicamente o i, indica o indice do elemento do array e o valor 1 é quantos valores que ele vai remover
  mensagemAposAdicionarTarefa.textContent = "Tarefa removida com sucesso!";
  mensagemAposAdicionarTarefa.style.color = "#e61919";
  renderizarTarefas();
}

//Funcao editarTarefa recebe o valor do índice do array como argumento e assim ela tem acesso a ele
function editarTarefa(i) {
  let valorEditar = window.prompt("Digite o novo valor");
  if (valorEditar.trim() !== "") {
    tarefas[i] = valorEditar;
    mensagemAposAdicionarTarefa.textContent = "Tarefa atualizado com sucesso!"
    renderizarTarefas();
  } else {
    window.alert("Digite um valor valido");
  }
}

function limparLista() {
  tarefas.length = 0;
  renderizarTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Lista de tarefas limpa com sucesso!";
}
