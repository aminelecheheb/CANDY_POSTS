import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { posts } from "@/data";

const initialState = {
  myPosts: posts.slice(0, 4),
  page: 1,
  limit: 4,
  navToggle: false,
};

const AppContext = React.createContext<ContextType>({
  state: initialState,
  setPage: () => {},
  setMyPosts: () => {},
  setNavToggle: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPage = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };

  const setMyPosts = (posts: PostType[]) => {
    dispatch({ type: "SET_MY_POSTS", payload: posts });
  };
  const setNavToggle = () => {
    dispatch({ type: "SET_NAV_TOGGLE" });
  };

  return (
    <AppContext.Provider value={{ state, setPage, setMyPosts, setNavToggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
