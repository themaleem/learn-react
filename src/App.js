import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // method triggered as soon as an app loads
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false, hasUsers: true });
  }
  // search function to fetch users by search keyworrd

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false, hasUsers: true });
  };
  clearUsers = () => {
    this.setState({ users: [] });
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
        />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
