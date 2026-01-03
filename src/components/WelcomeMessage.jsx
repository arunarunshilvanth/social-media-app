const WelcomeMessage = () => {
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center">
        {" "}
        <h1 className="display-5 fw-bold text-body-emphasis">
          There are no posts
        </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            Your feed is empty at the moment. Share an update and let others
            know what’s on your mind.
          </p>{" "}
        </div>{" "}
      </div>
    </center>
  );
};
export default WelcomeMessage;
