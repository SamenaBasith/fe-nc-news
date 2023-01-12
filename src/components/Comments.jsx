import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import CommentAdder from "./CommentAdder";


const Comments = ({ singleArticle }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.response.data.msg);
        setIsLoading(false);
        setTimeout(() => {
            setIsError(null)
        }, 3000);
      });
  }, [article_id]);



  if (isLoading) {
    return <p className="Loading comments"> Loading comments...</p>;
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
        <CommentAdder setComments={setComments} />
        <ul className="comments-list">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comments">
                <h4>
                  Username: {comment.author} | {comment.created_at.slice(0, 10)}
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
