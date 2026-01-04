import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import {
  FaUser,
  FaHeading,
  FaFileAlt,
  FaHeart,
  FaHashtag,
  FaPaperPlane,
} from "react-icons/fa";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Narrower width = less empty space */}
        <div className="col-md-7 col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body px-4 py-4">
              {/* HEADER BLOCK */}
              <div className="text-center mb-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaPaperPlane size={26} />
                </div>

                <h4 className="fw-bold mb-1">Create a New Post</h4>
                <p className="text-muted mb-0">
                  Share your thoughts, learning, or achievements
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* USER ID */}
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label fw-semibold">
                    <FaUser className="me-2 text-primary" />
                    User ID
                  </label>
                  <input
                    type="text"
                    ref={userIdElement}
                    className="form-control bg-light"
                    id="userId"
                    placeholder="e.g. user-101"
                  />
                </div>

                {/* POST TITLE */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-semibold">
                    <FaHeading className="me-2 text-primary" />
                    Post Title
                  </label>
                  <input
                    type="text"
                    ref={postTitleElement}
                    className="form-control bg-light"
                    id="title"
                    placeholder="What did you build today?"
                  />
                </div>

                <hr className="my-4" />

                {/* POST CONTENT */}
                <div className="mb-3">
                  <label htmlFor="body" className="form-label fw-semibold">
                    <FaFileAlt className="me-2 text-primary" />
                    Post Content
                  </label>
                  <textarea
                    ref={postBodyElement}
                    rows="4"
                    className="form-control bg-light"
                    id="body"
                    placeholder="Share your experience or learning..."
                  />
                </div>

                {/* REACTIONS */}
                <div className="mb-3">
                  <label htmlFor="reactions" className="form-label fw-semibold">
                    <FaHeart className="me-2 text-primary" />
                    Number of Reactions
                  </label>
                  <input
                    type="number"
                    ref={reactionsElement}
                    className="form-control bg-light"
                    id="reactions"
                    placeholder="e.g. 25"
                  />
                </div>

                <hr className="my-4" />

                {/* TAGS */}
                <div className="mb-4">
                  <label htmlFor="tags" className="form-label fw-semibold">
                    <FaHashtag className="me-2 text-primary" />
                    Hashtags
                  </label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="tags"
                    ref={tagsElement}
                    placeholder="react javascript learning"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 shadow-sm"
                  >
                    <FaPaperPlane className="me-2" />
                    Publish Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
