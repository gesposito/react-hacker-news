import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { navigate } from "@reach/router";

import UserItems from "./UserItems";

function UserSearch({ userId = "" }) {
  const [username, setUsername] = useState(userId);

  useEffect(() => {
    const timeout = setTimeout(() => {
      username && navigate(`${process.env.PUBLIC_URL}/user/${username}`);
    }, 300);
    return () => clearTimeout(timeout);
  }, [username]);

  return (
    <section>
      <h1>Search HN users</h1>

      <div>
        <label htmlFor="search">Enter a username (i.e. ingve)</label>
      </div>
      <div>
        <input
          id="search"
          type="text"
          value={username}
          placeholder="Enter a username (i.e. ingve)"
          onChange={({ target: { value } }) => setUsername(value)}
        />
      </div>
      {username && username === userId && (
        <div>
          <h2>{username}'s latest (5) submissions:</h2>
          <UserItems userId={userId} />
        </div>
      )}
    </section>
  );
}

export default UserSearch;

UserSearch.propTypes = {
  userId: PropTypes.string
};
