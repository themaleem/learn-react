import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h1>{login}</h1>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            See more
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
