import React from "react";
import PropTypes from "prop-types";

import UserItem from "./UserItem";

import { useUserItems } from "../utils/api";

function take(array, size) {
  return array.slice(0, size);
}

function UserItems({ userId }) {
  const [user, error] = useUserItems(userId);

  if (error) {
    return (
      <div>
        Ooops: {error.message} for {userId}
      </div>
    );
  }
  if (!user) {
    return <div>Loading {userId}</div>;
  }
  if (!user.submitted.length) {
    return <div>{userId} has no public Items</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {take(user.submitted, 5).map(id => (
          <UserItem key={id} itemId={id} />
        ))}
      </tbody>
    </table>
  );
}

export default UserItems;

UserItems.propTypes = {
  userId: PropTypes.string.isRequired
};
