import React, { useReducer } from "react";
import rootReducer from "../reducer/rootReducer";

export const Store = React.createContext();
const initialState = {
  courses: [],
  authors: []
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
