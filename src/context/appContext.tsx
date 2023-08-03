import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { posts } from "@/data";

const initialState = {
  myPosts: posts.slice(0, 4),
  page: 1,
  limit: 4,
};

const AppContext = React.createContext<ContextType>({
  state: initialState,
  setPage: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPage = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };

  return (
    <AppContext.Provider value={{ state, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
