// Gerenciamento de Tema (Modo Escuro)
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Altera o texto do botão para feedback imediato
    btnTema.innerText = document.body.classList.contains('dark-mode') ? "Modo Claro" : "Modo Escuro";
});

// Calculadora Sustentável (Manipulação do DOM e Variáveis)
const btnCalcular = document.getElementById('btn-calcular');
btnCalcular.addEventListener('click', () => {
    const inputArvores = document.getElementById('input-arvores').value;
    const resultadoContainer = document.getElementById('resultado-container');
    const msgResultado = document.getElementById('msg-resultado');

    if (inputArvores > 0) {
        // Variável de processamento (Média: 1 árvore = 118kg O2/ano)
        const totalOxigenio = (inputArvores * 118).toFixed(2);
        
        msgResultado.innerHTML = `🌟 <strong>Incrível!</strong> Suas ${inputArvores} árvores são responsáveis por gerar aproximadamente <strong>${totalOxigenio}kg</strong> de oxigênio por ano.`;
        resultadoContainer.classList.remove('hidden');
    } else {
        alert("Por favor, digite um número maior que zero.");
    }
});

// Formulário com Saudação Personalizada
const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const feedback = document.getElementById('feedback-form');

    // Manipula o texto do parágrafo de feedback
    feedback.innerText = `Olá, ${nome}! Obrigado por compartilhar sua iniciativa. Juntos fazemos um agro mais forte!`;
    form.reset();
});
