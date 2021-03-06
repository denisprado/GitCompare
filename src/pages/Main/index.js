import React, { Component } from "react";
import moment from "moment";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import logo from "../../assets/images/1526904966253-logo.png";

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: "",
    repositories: [],
    loading: false
  };

  componentDidMount() {
    if (localStorage.repositories) {
      this.setState({ repositories: JSON.parse(localStorage.repositories) });
    } else {
      localStorage.setItem("repositories", []);
    }
  }

  handleUpdateRepo = async repo => {
    const { repositories } = this.state;
    try {
      const { data } = await api.get(`repos/${repo.full_name}`);

      data.lastComit = moment(data.pushed_at).fromNow();

      this.setState({
        repositories: repositories.map(rep => (rep.id === data.id ? data : rep))
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      localStorage.repositories = JSON.stringify(this.state.repositories);
    }
  };

  handleRemoveRepo = id => {
    const repositories = this.state.repositories.filter(rep => rep.id !== id);
    this.setState({ repositories }, () => {
      localStorage.repositories = JSON.stringify(this.state.repositories);
    });
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });
    this.setState({ repositoryError: false });

    try {
      const { data: repository } = await api.get(
        `repos/${this.state.repositoryInput}`
      );

      repository.lastComit = moment(repository.pushed_at).fromNow();

      const empty = this.state.repositories.length > 0 ? false : true; //test if state is empty
      if (
        !empty &&
        this.state.repositories.some(el => el.id === repository.id)
      ) {
        throw new Error("Repository alredy exists");
      }

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository]
      });
    } catch (err) {
      console.log(err);
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
      localStorage.repositories = JSON.stringify(this.state.repositories);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Git compare" />
        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e =>
              this.setState({
                repositoryInput: e.target.value
              })
            }
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>
        <CompareList
          repositories={this.state.repositories}
          handleRemove={this.handleRemoveRepo}
          handleUpdate={this.handleUpdateRepo}
        />
      </Container>
    );
  }
}
