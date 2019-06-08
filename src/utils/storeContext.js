import React, { useReducer } from "react";

const StoreContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "READ":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "UNREAD":
      const index = state.favorites.indexOf(action.payload);

      if (index === -1) {
        return state;
      }
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, index),
          ...state.favorites.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}

function Store(props) {
  const [state, dispatch] = useReducer(reducer, { favorites: [] });

  return (
    <StoreContext.Provider
      value={{
        store: state,
        dispatch
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

export default Store;

export { StoreContext };
