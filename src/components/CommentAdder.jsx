
import { useState } from "react";
import { postComment } from "../api"
import { useParams } from "react-router-dom";

const CommentAdder = ({setComments}) => {
    const [newCommentBody, setNewCommentBody] = useState("");
    const [isError, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { article_id } = useParams()
    const username = "grumpy19"


    const handleSubmit = (event) => {
     event.preventDefault()
     setIsLoading(true)
     setIsSuccess(true)
     
     const newComment = {
        article_id: article_id,
        author: username,
        body: newCommentBody,
        comment_id: Date.now(),
        created_at: "just now",
        votes: 0
     }

     if ( newCommentBody ){
     setComments((currComments) => {
        return [newComment, ...currComments];
    })
     postComment(newComment, article_id)
     .then(() => {
        setIsLoading(false)
        setIsSuccess(true)
        setIsError(null)
        
     })
     .catch((err) => {
        setIsError(err.response.data.msg)
        setComments((currComments) => {
            return [...currComments];
        })
     })
     setNewCommentBody("")
     
    } else {
       setIsLoading(false)
       setIsError("Please enter your comment before submitting")
       
    }
}

  if (isError) {
    return <p className="error"> {isError} </p>;
  }
  if (isSuccess) {
    return <p className="success"> Your comment has been posted </p>
  }

  if (isLoading) {
    return <p className="Loading"> Posting comment, please wait </p>
  }

    return (
        <form className="comment-adder" onSubmit={handleSubmit}>
        <label htmlFor="newComment"></label>
        <textarea
        className="comment-box"
        placeholder="Type your comment here..."
        id="newComment"
        value={newCommentBody}
        onChange={(event) => setNewCommentBody(event.target.value)}
        ></textarea>
        <button className="post-comment-button" type="submit"> Post </button>
        <button 
        className="clear-button"
        type="clear-button"
        onClick={() => {setNewCommentBody("");}}
        > Clear
        </button>
        </form>
    )
}
export default CommentAdder;