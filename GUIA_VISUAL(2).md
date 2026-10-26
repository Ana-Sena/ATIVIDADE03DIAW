# Guia visual — Pokédex

## Direção
Álbum de cartas conforme referência aprovada: cabeçalho vermelho, fundo claro discreto, texto escuro e cores por tipo. A referência orienta aparência, não dados. Imagens reais da PokéAPI têm transparência; os cenários ilustrados do mockup não estão incluídos.

## Tokens iniciais
| Papel | Claro | Escuro |
| --- | --- | --- |
| Fundo | #F5F4F0 | #151923 |
| Superfície | #FFFFFF | #222938 |
| Texto principal | #171D35 | #F4F6FB |
| Texto secundário | #566176 | #B7C1D1 |
| Marca | #D92E32 | #D92E32 |
| Borda | #D8DDE5 | #455168 |

Validar contraste, sobretudo etiquetas. Espaçamento base 8px, raio de cartas 16px, sombras suaves e system-ui, sem fonte externa obrigatória.

## Composição
Cabeçalho com símbolo simples de Pokébola, marca, abas e tema rotulado. Pesquisa, filtro e ordenação em linha no desktop, empilhados no celular, com labels e contagem.

Grade central de até aproximadamente 1200px, gaps 20–24px. Geralmente quatro colunas no desktop, duas ou três no tablet e uma em celular estreito. Priorizar legibilidade.

## Cartas Pokémon
Largura aproximada 240–280px; altura suficiente aos seis atributos, igual nas duas faces. Imagem grande com object-fit: contain, ID no topo, nome destacado e etiquetas. Primeiro tipo define cor principal; segundo segue visível. Ausência recebe neutro.

Frente pode indicar “Clique para virar”. Verso com nome/ID/tipos e HP, Ataque, Defesa, Ataque Especial, Defesa Especial, Velocidade: rótulo, barra e valor. Sem botão Voltar ou verso genérico azul.

Mesma escala para todas as barras, calculada pelo maior valor dos seis atributos de todos os Pokémon do JSON, independente do filtro. Mostrar valores reais, não porcentagem de HP.

Rotação Y de cerca de 350–450ms, perspective e backface-visibility. Hover eleva sem virar. prefers-reduced-motion troca faces sem rotação. Face oculta fora da acessibilidade.

## Painel flutuante
Somente um, canto inferior direito, largura aproximada 340–380px, margem 16–24px e altura limitada. Título “Treinadores de [Pokémon]”, X acessível, perfis com retratos/nome/insígnias/equipe. Rolagem quando necessário.

Sem fundo escurecido, bloqueio da grade ou temporizador. No celular, painel inferior de até aproximadamente 40vh, rolagem e X sempre visível, com acesso às cartas. Sem associação, mostrar mensagem.

## Cartas treinadores
Mesmo estilo, podendo ser maiores. Frente retrato/nome. Verso nome, ícone genérico e quantidade de insígnias, equipe 3 × 2 com miniaturas/nomes. Adaptar colunas se necessário; reservar altura sem salto ao virar. Sem cortes ou rolagem interna. Repetições em posições separadas; avatar provisório consistente.

## Textos
Interface em português, nomes próprios preservados. Traduzir tipos apenas na apresentação. Ícones complementam texto.
- Buscar por nome ou ID
- Todos os tipos
- Ordenar por / Ordem
- Nenhum Pokémon encontrado / Limpar filtros
- Nenhum treinador associado
- Tipo não informado

Controles e atributos legíveis nos dois temas, sem depender somente da cor.

