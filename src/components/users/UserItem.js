import React from "react";
import PropTypes from "prop-types";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
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
        <a href={html_url} target="_blank" rel="noopener noreferrer"  className="btn btn-dark btn-sm my-1">
          See more
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
