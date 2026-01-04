import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Built My First Full-Stack Feature 🚀",
    body: `Today I implemented Add-to-Cart logic using React Context.
Handled state updates, UI sync, and edge cases without backend support.
Feeling confident about state management now.`,
    reactions: 42,
    userId: "user-9",
    tags: ["React", "ContextAPI", "Learning", "Frontend"],
  },
  {
    id: "2",
    title: "Debugging Victory 🐛➡️✅",
    body: `Spent 3 hours fixing a silent UI bug.
Root cause: wrong dependency array in useEffect.
Lesson learned: small mistakes can break big features.`,
    reactions: 58,
    userId: "user-12",
    tags: ["Debugging", "useEffect", "ProblemSolving"],
  },
  {
    id: "3",
    title: "Code, Coffee, and Clarity ☕💻",
    body: `Started the day stuck on a bug,
ended it with a clean solution.
Coding teaches patience more than anything else.`,
    reactions: 31,
    userId: "user-9",
    tags: ["CodingLife", "Consistency", "Growth"],
  },
  {
    id: "4",
    title: "From Confusion to Confidence",
    body: `React felt overwhelming at first.
Now components, props, and state actually make sense.
Progress is slow—but real.`,
    reactions: 47,
    userId: "user-12",
    tags: ["ReactJS", "LearningCurve", "SelfImprovement"],
  },
];
