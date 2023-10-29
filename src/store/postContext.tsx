"use client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAppProvider {
  children: ReactNode;
}
export interface IPosts {
  id: string;
  text: string;
  liked: boolean | null;
  accepted?: boolean;
  rejected?: boolean;
  comments: { text: string; id: string }[];
}

interface IPostsContext {
  posts: IPosts[];
  addPostsHandler: (text: string, id: string) => void;
  likePostsHandler: (id: string) => void;
  acceptPostHandler: (id: string) => void;
  rejectPostHandler: (id: string) => void;
  addCommentHandler: (text: string, id: string) => void;
}

const initialValue = {
  posts: [],
  addPostsHandler: () => {},
  likePostsHandler: () => {},
  acceptPostHandler: () => {},
  rejectPostHandler: () => {},
  addCommentHandler: () => {},
};

export const PostsContext = createContext<IPostsContext>(initialValue);

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true);
    const localStoragePost = localStorage.getItem("posts");
    localStoragePost && setPosts(JSON.parse(localStoragePost));
  }, []);

  useEffect(() => {
    if (!firstLoad) return;
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts, firstLoad]);

  const addPostsHandler = (text: string, id: string) => {
    setPosts((prevState) => [
      ...prevState,
      {
        id,
        text,
        accepted: undefined,
        liked: null,
        rejected: undefined,
        comments: [],
      },
    ]);
  };

  const likePostsHandler = (id: string) => {
    setPosts((prevState) => [
      ...prevState.map((post) =>
        post.id === id
          ? { ...post, liked: post.liked ? false : true }
          : { ...post }
      ),
    ]);

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const acceptPostHandler = (id: string) => {
    setPosts((prevState) => [
      ...prevState.map((post) =>
        id === post.id
          ? { ...post, accepted: true, rejected: false }
          : { ...post }
      ),
    ]);

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const rejectPostHandler = (id: string) => {
    setPosts((prevState) => [
      ...prevState.map((post) =>
        id === post.id
          ? { ...post, accepted: false, rejected: true }
          : { ...post }
      ),
    ]);

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const addCommentHandler = (text: string, id: string, commentId: string) => {
    console.log("first", text, id);
    setPosts((prevState) => [
      ...prevState.map((post) =>
        id === post.id
          ? { ...post, comments: [...post.comments, { text, id: commentId }] }
          : { ...post }
      ),
    ]);

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        addPostsHandler,
        likePostsHandler,
        acceptPostHandler,
        rejectPostHandler,
        addCommentHandler,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const {
    posts,
    addPostsHandler,
    likePostsHandler,
    acceptPostHandler,
    rejectPostHandler,
    addCommentHandler,
  } = useContext(PostsContext);

  return {
    posts,
    addPostsHandler,
    likePostsHandler,
    acceptPostHandler,
    rejectPostHandler,
    addCommentHandler,
  };
};
