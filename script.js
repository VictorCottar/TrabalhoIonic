function addTask() {
    document.getElementById('adicionartarefa').addEventListener('click', addTask);
    var nomeTarefa = document.getElementById('nome-tarefa').value;
    var descricaoTarefa = document.getElementById('descricao-tarefa').value;

    if (nomeTarefa.trim() !== '' && descricaoTarefa.trim() !== '') {
        var tarefa = {
            nome: nome-tarefa,
            description: descricao-tarefa
        };

        listatarefas.push(tarefa);

        
        displaylistatarefas();

        document.getElementById('nome-tarefa').value = '';
        document.getElementById('descricao-tarefa').value = '';
    }
}