import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (Repositório do facebook)
            </p>
            <a href="http://github.com/facebook/react">Acessar</a>
          </li>
        </ul>
      </>
    );
  }
}
