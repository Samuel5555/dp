import React, { createContext, useContext, useState } from "react";

export type Post = {
  id: string;
  title: string;
  category: string;
  content: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorUpvotes: number;
  likes: number;
  comments: {
    id: string;
    name: string;
    text: string;
  }[];
};

type AppStoreType = {
  posts: Post[];
  addPost: (post: Post) => void;
  upvotePost: (id: string) => void;
  likePost: (id: string) => void;
  addComment: (
    id: string,
    name: string,
    text: string
  ) => void;
};

const initialPosts: Post[] = [
  {
    id: "1",
    title: "5 Warning Signs of Stroke You Should Never Ignore",
    category: "Neurology",
    content:
      "Sudden weakness, difficulty speaking, vision problems, dizziness and severe unexplained headache can be warning signs of stroke.",
    doctorName: "Dr. Samuel Chukwudi",
    doctorSpecialty: "Neurology",
    doctorUpvotes: 37,
    likes: 1200,
    comments: [
      {
        id: "1",
        name: "Dr. Michael",
        text: "Very useful health information.",
      },
    ],
  },
];

const AppStoreContext = createContext<AppStoreType | null>(null);

export function AppStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (post: Post) => {
    setPosts((current) => [post, ...current]);
  };

  const upvotePost = (id: string) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? {
              ...post,
              doctorUpvotes: post.doctorUpvotes + 1,
            }
          : post
      )
    );
  };

  const likePost = (id: string) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.likes + 1,
            }
          : post
      )
    );
  };

  const addComment = (
    id: string,
    name: string,
    text: string
  ) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now().toString(),
                  name,
                  text,
                },
              ],
            }
          : post
      )
    );
  };

  return (
    <AppStoreContext.Provider
      value={{
        posts,
        addPost,
        upvotePost,
        likePost,
        addComment,
      }}
    >
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppStoreContext);

  if (!context) {
    throw new Error(
      "useAppStore must be used inside AppStoreProvider"
    );
  }

  return context;
}