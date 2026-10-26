# Plano de implementação — Pokédex React + Vite

## 1. Objetivo e materiais
Criar uma Pokédex acadêmica responsiva com duas abas: Pokémon e Treinadores. Este é um plano para geração futura do código; não cria nem publica a aplicação.

Fornecer ao Codex este plano, GUIA_VISUAL.md, PROMPT_CODEX.md, ATIVIDADE 03.md, pokedex-data.json original e a imagem aprovada, se disponível. Retratos podem ser adicionados depois.

## 2. Tecnologia e escopo
- React + Vite com JavaScript/JSX, componentes funcionais, props, useState, eventos, map e filtragem.
- useEffect para efeitos reais, como persistência do tema e eventos do painel.
- CSS organizado por componente e tokens compartilhados. Preferir CSS para barras e animações.
- Dados importados de src/data; sem backend ou banco de dados.
- Abas na mesma página; React Router não é necessário.
- Entregar package.json, lockfile, configuração Vite e README. Selecionar versões compatíveis na implementação.
- Incluídos: pesquisa, filtro, ordenação, tema escuro, treinadores e perfil contextual.
- Fora do escopo: favoritos, comparação dedicada, login e edição. Comparação visual por cartas simultaneamente viradas.

## 3. Fonte e relações dos dados
O JSON possui types, pokemon e trainers. Pokémon: id, name, stats e types. stats: hp, attack, defense, specialAttack, specialDefense e speed. Treinador: id, name, badges e pokemonIds.

Preservar integralmente o arquivo. A PokéAPI complementa imagens, nunca substitui atributos ou tipos do professor, mesmo se houver diferenças.

Resolver pokemonIds pela lista pokemon, preservando ordem e repetições. Chaves React das posições da equipe devem incluir treinador, índice e ID. Repetições representam posições diferentes. ID inexistente recebe identificação e fallback, sem quebrar a tela.

Treinadores de um Pokémon são aqueles cujo pokemonIds contém seu ID. A repetição de uma espécie na equipe não deve duplicar o perfil inteiro do treinador.

types vazio: “Tipo não informado”, estilo neutro. Não confundir ausência com Typeless explícito. Traduzir rótulos somente na apresentação.

## 4. Aba Pokémon
- Cabeçalho com marca, abas e alternância de tema.
- Busca imediata por nome parcial, ignorando maiúsculas e espaços externos. Entrada numérica corresponde ao ID exato; aceitar 25, 025 e #025.
- Filtro por um tipo e “Todos os tipos”, com opções dos dados. Considerar tipos secundários.
- Ordenar por ID, nome, HP, Ataque, Defesa, Ataque Especial, Defesa Especial e Velocidade. Direção crescente/decrescente; padrão ID crescente. Desempatar por ID crescente. Ordenar cópia, sem mutar JSON.
- Busca, filtro e ordenação combinados. Contagem e “Limpar filtros” limpam pesquisa/tipo e preservam ordenação.
- Sem resultados: mensagem e ação para limpar.
- Frente: ID com três dígitos, imagem, nome e todos os tipos.
- Verso: ID, nome, tipos e seis atributos com valores e barras. O verso atende à visualização de detalhes; não criar modal extra.
- Clique ou Enter/Espaço vira/desvira. Sem botão Voltar. Hover apenas destaca.
- Várias cartas podem ficar viradas, com estado independente por ID.
- Busca, filtro e ordenação preservam estado das cartas, mesmo se temporariamente ocultas.

## 5. Painel flutuante dos treinadores
Perfil contextual como o do Ash na referência, sem temporizador. Um único painel, relacionado ao último Pokémon virado.

| Evento | Resultado |
| --- | --- |
| Virar A | Abre painel de A. |
| Virar B | A continua no verso; painel troca para B. |
| X ou Escape | Fecha apenas painel; não desvira cartas. |
| Desvirar carta vinculada | Fecha painel e desvira essa carta. |
| Desvirar outra carta | Mantém painel atual. |
| Carta vinculada sai dos resultados | Fecha painel, preservando cartas. |
| Trocar aba | Fecha painel, preservando cartas viradas. |

Não reabrir automaticamente perfil anterior. Para reabrir perfil de carta já virada, desvirar e virar novamente.

Mostrar nome do Pokémon de contexto e todos os treinadores associados: retrato, nome, quantidade de insígnias e equipe com miniaturas/nomes. Preservar repetições da equipe. Vários perfis em blocos com rolagem. Sem associação: “Nenhum treinador associado”.

Desktop: fixo no canto inferior direito. Celular: painel inferior compacto de até aproximadamente 40vh, rolagem e X sempre acessível. Nunca sair da viewport; garantir rolagem para acessar cartas por trás dele.

Não escurecer fundo, bloquear cartas ou desaparecer sozinho. Controles do painel não disparam viradas. Região complementar identificada, sem captura modal de foco. Fechar por teclado devolve foco à carta quando pertinente.

## 6. Aba Treinadores
Exibir Ash, Brock, Misty, Lt. Surge, Erika, Koga, Sabrina, Blaine, Giovanni, Gary, Team Rocket e Lance.

Frente: retrato/nome. Verso: nome, ícone genérico com quantidade de insígnias e equipe em grade 3 × 2 adaptável. badges informa quantidade, não quais insígnias específicas: não inventar coleção.

Equipes conferidas têm até seis posições, contando repetições. Cards podem ser maiores que os de Pokémon. Miniaturas e nomes legíveis sem rolagem interna/cortes. Vários cards virados por clique/teclado. Não abrir painel ao virar treinador. Equipe apenas informativa nesta versão.

## 7. Imagens
Ilustrações Pokémon do repositório de sprites da PokéAPI, por ID:
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png

Esta solução usa imagens do ecossistema PokéAPI sem exigir consulta dos metadados de cada Pokémon. Validar URLs durante implementação. Se consultar API, usar apenas imagens e cachear respostas. Lazy loading, fallback local e prevenção de loop em onError. Falha visual nunca impede dados/filtros.

Retratos locais mapeados por ID em trainerImages.js. Avatar provisório quando faltar. Team Rocket pode usar imagem de grupo. Registrar fontes no README. Nenhum retrato foi obtido nesta etapa; isso não bloqueia o código.

## 8. Tema e acessibilidade
Tema claro no primeiro acesso, alternância para escuro, escolha salva em localStorage. Não iniciar conforme sistema. Se armazenamento falhar, alternância funciona na sessão.

Controles semânticos, labels, alt, foco visível e teclado. Face oculta não pode ser lida/focada. Evitar botões aninhados. Barras com números/rótulos; cor não é única informação. Respeitar prefers-reduced-motion, contraste em ambos os temas, toque confortável e ausência de rolagem horizontal desde 320px.

## 9. Organização sugerida
- src/data/pokedex-data.json e trainerImages.js
- src/components/Header.jsx, ThemeToggle.jsx, PokemonToolbar.jsx
- src/components/PokemonGrid.jsx, PokemonCard.jsx, StatBar.jsx, TypeBadge.jsx
- src/components/TrainerPanel.jsx, TrainerProfile.jsx, TrainerGrid.jsx, TrainerCard.jsx, TeamPreview.jsx
- src/components/EmptyState.jsx e ImageWithFallback.jsx
- src/hooks/useTheme.js
- src/utils/pokemonSelectors.js e formatters.js
- src/css/tokens.css, global.css e estilos por componente
- src/assets/images/trainers e fallbacks
- src/App.jsx e main.jsx
- README.md, package.json, lockfile e configuração Vite

Estados mínimos: aba, pesquisa, tipo, campo/direção da ordenação, conjuntos de Pokémon e treinadores virados, ID de contexto do painel ou null e tema. Resultados, equipes e relações são derivados, sem estados redundantes.

## 10. Etapas
1. Inspecionar diretório, instruções locais e entradas; preservar trabalho existente. Se JSON faltar, solicitar o material, sem inventar dados.
2. Criar estrutura, importação, seletores, listagem e fallback.
3. Implementar busca/filtro/ordenação.
4. Cartas independentes e atributos.
5. Painel e tabela de eventos.
6. Treinadores com duplicatas.
7. Visual, responsividade, acessibilidade e tema.
8. Validar e documentar.

## 11. Critérios de aceite
- Todos os registros acessíveis com valores originais.
- Bulba, 25 e #025 funcionam; tipo secundário considerado; ordenação numérica nos atributos.
- Duas ou mais cartas no verso com seis atributos e escala comum.
- Painel segue tabela; X não desvira nem reabre painel anterior.
- Ausência de tipo/treinador tratada.
- badges do JSON, nunca do mockup; repetições de Koga e Lance preservadas.
- Doze cards de treinador com equipes legíveis.
- Tema inicia claro e persiste escolha.
- Imagem indisponível não quebra app.
- Verificar teclado, redução de movimento, 320/375px, tablet e desktop nos dois temas, sem faces vazando na rotação.
- Executar build e lint se configurado. Testes úteis se necessários: filtros combinados, ordenação, duplicatas e transições do painel. Evitar testes triviais.

## 12. README e entrega
Documentar npm install, npm run dev, endereço mostrado no terminal, build/preview, dados, estrutura, fontes, dependências, duplicatas, painel e tema. Campos para nomes e participação real da dupla em pair programming, sem inventar autoria. Ambos entregam link GitHub conforme enunciado. Não criar remoto, publicar ou fazer push sem solicitação.


## Histórico Git e Conventional Commits — obrigatório

A avaliação acadêmica considera o histórico de desenvolvimento. Faça commits locais ao longo da implementação, após concluir e verificar cada unidade coerente de trabalho. Não deixe todo o código para um único commit final e não implemente tudo primeiro para depois repartir artificialmente o histórico.

Antes de começar, inspecione git status e o histórico existente. Se a pasta do novo projeto ainda não for um repositório, inicialize Git nela. Configure .gitignore antes do primeiro commit, excluindo node_modules, dist, arquivos temporários e segredos. Inclua o lockfile. Não inclua mudanças alheias à tarefa nem sobrescreva trabalho existente.

Formato: tipo(escopo): descrição curta em português, por exemplo feat(pokemon): adiciona pesquisa por nome e ID. Escopo pode ser omitido quando não ajudar. Tipos: feat para funcionalidade, fix para correção, style apenas para formatação de código sem alterar comportamento, refactor para reorganização sem alterar comportamento, docs para documentação, test para testes e chore para configuração/manutenção. Mudanças visuais de produto usam feat(ui) ou fix(ui), não style.

Sequência orientativa, adaptada ao trabalho real:
1. chore(setup): configura projeto React com Vite e gitignore
2. feat(data): integra JSON e resolve equipes dos treinadores
3. feat(pokemon): exibe cartas com imagens e tipos
4. feat(search): adiciona pesquisa e filtro por tipo
5. feat(sort): adiciona ordenação por nome ID e atributos
6. feat(cards): implementa virada independente e atributos
7. feat(trainers): adiciona perfil flutuante contextual
8. feat(trainers): implementa cartas e equipes dos treinadores
9. feat(theme): adiciona temas claro e escuro com persistência
10. feat(ui): adapta layout para dispositivos móveis e teclado
11. fix(...): corrige problemas concretos encontrados na validação
12. docs(readme): documenta execução dados e fontes

Esta sequência não é uma quota: não criar commits vazios, correções inventadas ou alterações triviais apenas para aumentar a contagem. Cada commit precisa registrar progresso real e coerente. É aceitável combinar etapas inseparáveis ou dividir uma etapa grande em entregas menores.

Antes de cada commit, revisar git diff, selecionar explicitamente arquivos relacionados e executar a verificação adequada à etapa. Após existir uma aplicação compilável, confirmar build nas etapas relevantes; não comitar falhas conhecidas como se estivessem concluídas. Correções posteriores ficam em novos commits.

Os commits locais durante a implementação estão autorizados por este prompt. Não aguardar autorização a cada etapa. Isso não autoriza criar repositório remoto, publicar ou fazer push. Não executar squash, amend, rebase ou reescrever o histórico para fabricar evolução; preservar os commits incrementais. Não inventar datas, autores ou participação da dupla. Se a identidade Git estiver ausente, informar o bloqueio e solicitar nome/e-mail, sem inventá-los ou alterar configuração global.

Ao finalizar, apresentar resumo dos commits reais com hash curto e mensagem, verificações executadas e estado do diretório de trabalho. Não afirmar que commits foram criados se não foram.

