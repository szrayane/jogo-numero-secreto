# Jogo do Número Secreto 🎲

Este é um simples jogo de adivinhação, onde o jogador precisa descobrir um número secreto gerado aleatoriamente pelo sistema. A aplicação valida as entradas do usuário, exibe mensagens personalizadas e mantém uma lista de números já sorteados para evitar repetições.

## Como funciona o jogo

1. **Objetivo:** Descobrir o número secreto gerado pelo sistema.
2. **Intervalo:** Escolha um número entre 1 e 10.
3. **Regras:**
   - Se o número escolhido for igual ao número secreto, o jogador vence.
   - Caso contrário, o sistema indica se o número secreto é maior ou menor.
4. **Lista de números sorteados:** O jogo mantém uma lista de números já sorteados e evita repetir o mesmo número até que todos os números possíveis sejam sorteados.
5. **Reiniciar o jogo:** Após acertar, o jogador pode reiniciar o jogo para uma nova rodada.

## Estrutura do Projeto

- **HTML:**
  - Elementos básicos para a interação com o usuário, incluindo título, parágrafo explicativo, campo de entrada e botões.
- **CSS:**
  - (Opcional) Estilização adicional para melhorar a interface do jogo.
- **JavaScript:**
  - Lógica do jogo e manipulação do DOM para interação dinâmica.

## Principais Funções

### Função `verificarChute()`
- Captura o valor digitado pelo usuário e valida se está dentro do intervalo permitido.
- Compara o valor digitado com o número secreto e exibe mensagens de sucesso ou dicas (maior/menor).
- Incrementa o contador de tentativas.

### Função `gerarNumeroAleatorio()`
- Gera um número aleatório entre 1 e 10.
- Evita repetir números já sorteados até que todos os números possíveis sejam utilizados.

### Função `reiniciarJogo()`
- Reinicia o número secreto e o contador de tentativas.
- Habilita ou desabilita o botão de reinício conforme necessário.

### Função `exibirTextoNaTela(tag, texto)`
- Atualiza o conteúdo de elementos HTML com base no seletor de tag fornecido.

### Função `limparCampo()`
- Limpa o campo de entrada do usuário para evitar dados residuais.


