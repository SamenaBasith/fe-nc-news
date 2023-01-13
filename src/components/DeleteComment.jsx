import { deleteComment } from '../api'
import { useState } from 'react';

const DeleteComment = ({comment_id}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);

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

  return (
    <main>
      <button
      onClick={(e) => {
        handleClick(comment_id)
      }}> Delete
      </button>
      
    </main>
    )
      }

    

export default DeleteComment;