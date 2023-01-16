import { deleteComment } from '../api'
import { useState, useContext } from 'react';
import { UserContext } from "../userContext"

const DeleteComment = ({comment_id, author}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);

    const { user, isLoggedIn } = useContext(UserContext)


    const handleClick = (comment_id) => {
        setIsLoading(true)
        deleteComment(comment_id)
          .then(() => {
            setIsLoading(false)
            setIsError(null)
            setIsSuccess(true);
          })
          .catch((err) => {
            setIsError(err.response.data.msg);
            setIsSuccess(false)
          });
      };



      if (isError) {
        return <p className="error"> {isError} </p>;
      }
      if (isSuccess) {
        return <p className="success"> Your comment has been deleted </p>
      }

      if (isLoading) {
          return <p className="Loading"> Deleting comment...</p>;
      }



  if (isLoggedIn && user.username === author){
    if (comment_id){
        return (
        <button 
        className="deleteComment" 
        onClick={handleClick}>Delete</button>)
    }
  }
      }

    

export default DeleteComment;