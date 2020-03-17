## Definições

Arquitetura Flux com Redux

Paradigma para controlar o fluxo de informações da aplicação.

Não existe uma comunicação aceitável entre dois componentes, se não forem filhos de outro etc. Componentes desconexos não tem como de forma fácil hoje sem ser por redux.

Redux possuem o store, que armazena informações e compartilhados entre vários componentes.

Toda vez que store do redux é alterado ele atualiza o estado dos componentes compartilhados.

Estado do redux é imutável também, igual o estado dos componentes.

Exemplo:

Componente faz um action para um middleware que ouve a ação e busca no estado do redux. Assim o store do redux salva as informações.

Reducers: são cada uma da propriedade dos estados. Reducer é quem vai alterar a informação dentro do estado do redux.
Reducer ouve a ação que veio do middleware e faz as alterações.

Pode ter vários reducers ouvindo uma action realizada pelo middleware.

## Instalação inicial

yarn add redux react-redux

Store: Inicializa o redux na nossa aplicação e precisa configurar o provider para pegar as informações do store.

Provider: Ele passa para todos os componentes dentro dele a informação sobre o estado do Redux. Ele usa uma API de contexto do React.

Actions

Type: define o tipo de ação que está sendo realizada e é quase que obrigatório para ser enviado na action.

Padrão dentro do redux é passar os dados sem ser do type dentro de um objeto chamado payload

Redux: São reducers e actions basicamente, onde actions fala o que tem que fazer e reducers ouvem essas actions e realizam as ações necessários

No redux não é uma boa prática deixar as actions dentro de nossos componentes

## Reactotron

Ferramenta para debugar aplicação em reactjs

https://github.com/infinitered/reactotron

yarn add reactotron-react-js reactotron-redux

Ele possui integrações com Redux, Redux Saga e axios.

## Roteamento no reactjs

yarn add react-router-dom
