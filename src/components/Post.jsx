import {
  FaThumbsUp,
  FaRegCommentDots,
  FaShareAlt,
  FaRocket,
} from "react-icons/fa";
import { MdDelete, MdOutlineTag } from "react-icons/md";

import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { PostList as PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card shadow-sm mb-4 post-card">
      {/* HEADER */}
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          <FaRocket className="text-primary me-2" />
          {post.title}
        </h5>

        <MdDelete
          className="text-danger fs-5 cursor-pointer"
          onClick={() => deletePost(post.id)}
        />
      </div>

      {/* BODY */}
      <div className="card-body">
        <p className="card-text text-muted">{post.body}</p>

        <div className="d-flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-primary">
              <MdOutlineTag className="me-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="card-footer bg-light d-flex justify-content-between align-items-center">
        <span className="text-muted">
          <FaThumbsUp className="me-1 text-success" />
          Liked by <strong>{post.reactions}</strong> developers
        </span>

        <div className="d-flex gap-3">
          <FaRegCommentDots className="fs-5 text-secondary cursor-pointer" />
          <FaShareAlt className="fs-5 text-secondary cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Post;
