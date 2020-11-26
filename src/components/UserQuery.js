import React from 'react';
import fetchGraphQL from '../fetchGraphQL';
import {Text} from './BasicComponents';

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
      isDataReady: false,
    };
  }
  componentDidMount() {
    fetchGraphQL(RepositoryNameQuery)
      .then(res => {
        this.setState({
          data: res.data.post,
          isDataReady: true,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.data.isDataReady) {
      return <Text color="blue">{this.state.data}</Text>;
    } else {
      return <Text color="blue">{this.state.data.id}</Text>;
    }
  }
}

const RepositoryNameQuery = `
  query UserQuery {
    post(id: 1) {
      id
      title
      body
    }
  }
`;
