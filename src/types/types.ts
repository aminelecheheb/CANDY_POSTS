type PostType = {
  id: number;
  title: string;
  body: string;
  markdown: string;
  createdAt: string;
  category: string;
  img: any;
};

type StateType = {
  myPosts: PostType[];
  page: number;
  limit: number;
  navToggle: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  setPage: (page: number) => void;
  setMyPosts: (posts: PostType[]) => void;
  setNavToggle: () => void;
};
