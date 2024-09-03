// ============================
// INÍCIO DA SEÇÃO FUNCIONAL: Carregamento de Receitas
// ============================
async function loadReceitas(receitaUrl, headers) {
    try {
        const response = await fetch(receitaUrl, { headers: headers });
        const data = await response.json();

        const receitaSelect = document.getElementById('receita');
        receitaSelect.innerHTML = '<option value="">Selecione uma receita</option>';
        data.list.forEach(receita => {
            const option = document.createElement('option');
            option.value = receita.nome;
            option.textContent = receita.nome;
            receitaSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar receitas:', error);
    }
}
