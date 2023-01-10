import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from '../api';


const Comments = () => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        
        getComments(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false);
        })
    }, [article_id]);

    if (isLoading) {
        return <p className="Loading comments">Loading comments...</p>
      }

    
      

    return (
        <section>
            <h2>Comments</h2>
            <ul className="comments-list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className="comments">
                            <h4>User: {comment.author}  |  {comment.created_at.slice(0, 10)}</h4>
                            <p>{comment.body}</p>
                            <button>{comment.votes}
                            <span aria-label="votes for this comment">👍</span>
                            </button>
                        </li>
                         );
                })}
            </ul>
        </section>
    )
}

export default Comments;
