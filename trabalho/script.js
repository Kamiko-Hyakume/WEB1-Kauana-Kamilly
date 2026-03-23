const form = document.getElementById('taskForm');
const lista = document.getElementById('taskList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const título = document.getElementById('titulo').value;
    const descrição = document.getElementById('descricao').value;

    const novalinha = document.createElement('tr');

    novalinha.innerHTML = `
        <td>${título}</td>
        <td>${descrição}</td>
          <td>
            <button onclick="editarItem(this)">Editar</button>
            <button onclick="excluirItem(this)">Excluir</button>
        </td>
    `;

    lista.appendChild(novalinha);
    form.reset();
});

function excluirItem(botao) {
    const linha = botao.parentElement.parentElement;
    linha.remove();
}

function editarItem(botao) {
    const linha = botao.parentElement.parentElement;

    const título = linha.children[0].innerText;
    const descrição = linha.children[1].innerText;

    document.getElementById('titulo').value = título;
    document.getElementById('descricao').value = descrição; 

    linha.remove();
}