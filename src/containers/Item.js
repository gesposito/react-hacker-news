import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Link } from "@reach/router";

import { useItem } from "../utils/api";
import { StoreContext } from "../utils/storeContext";

function Item({ itemId }) {
  const [item, error] = useItem(itemId);
  const { store, dispatch } = useContext(StoreContext);

  if (error) {
    return (
      <div>
        Ooops: {error.message} for {itemId}
      </div>
    );
  }
  if (!item) {
    return <div>Loading Item {itemId}</div>;
  }

  const isRead = store.favorites.includes(itemId);

  return (
    <section>
      <div>
        <Link to={`/user/${item.by}`}>&#8592; </Link>
        <h1>{item.title}</h1>
        <button
          onClick={() =>
            isRead
              ? dispatch({ type: "UNREAD", payload: itemId })
              : dispatch({ type: "READ", payload: itemId })
          }
        >
          {isRead ? <span>&#9865; Read</span> : <span>&#9900; Not Read</span>}{" "}
        </button>
      </div>
      
      <iframe
        title={item.title}
        src={item.url}
        style={{
          width: "100vw",
          height: "100vh"
        }}
      />
    </section>
  );
}

export default Item;

Item.propTypes = {
  itemId: PropTypes.string.isRequired
};
