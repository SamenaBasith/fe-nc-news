import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";


const Comments = ({ singleArticle }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [article_id]);



  if (isLoading) {
    return <p className="Loading comments">Loading comments...</p>;
  }

  if (singleArticle.comment_count === "0") {
    return (
      <p>
        There are no comments for this article. Be the first to post a comment!
      </p>
    );
  } else if (isError) {
    return (
        <p> oops! something went wrong </p>
    )
  } else {

    return (
      <section>
        <h2>Comments</h2>
        <ul className="comments-list">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comments">
                <h4>
                  User: {comment.author} | {comment.created_at.slice(0, 10)}
                </h4>
                <p>{comment.body}</p>
                <button>
                  {comment.votes}
                  <span aria-label="votes for this comment">👍</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};
export default Comments;
