import React from "react";
import PropTypes from "prop-types";

import { Link } from "@reach/router";

import { useItem } from "../utils/api";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function UserItem({ itemId }) {
  const [item, error] = useItem(itemId);

  if (error) {
    return (
      <tr>
        <td />
        <td>
          Ooops: {error.message} for {itemId}
        </td>
        <td />
      </tr>
    );
  }
  if (!item) {
    return (
      <tr>
        <td />
        <td>Loading {itemId}</td>
        <td />
      </tr>
    );
  }
  return (
    <tr>
      <td>
        {item.type === "story" && <Link to={`${process.env.PUBLIC_URL}/item/${itemId}`}>{item.id}</Link>}
      </td>
      <td>{item.time && getFormattedDate(item.time * 1000)}</td>
      <td>{item.title || item.text}</td>
    </tr>
  );
}

export default UserItem;

UserItem.propTypes = {
  itemId: PropTypes.number.isRequired
};
