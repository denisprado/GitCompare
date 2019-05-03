import React, { Component } from "react";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import logo from "../../assets/images/1526904966253-logo.png";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    try {
      const response = await api.get(`repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, response.data]
      });
    } catch (err) {}
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Git compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e =>
              this.setState({
                repositoryInput: e.target.value
              })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
