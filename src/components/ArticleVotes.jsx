import { useState } from "react"
import { patchArticleById } from '../api'

const ArticleVotes = ({article_id, votes}) => {

    const [votesChange, setVotes]= useState(0)
    const [isError, setIsError] = useState(false);

    function incVote(increment) {
        setIsError(false);
        setVotes((currVote) => 
        currVote + increment);
        patchArticleById(article_id, increment)
        .catch(() => {
            setIsError(true);
            setVotes((currVote) => 
                currVote - increment);
            })
        }    
    
        if (isError) {
            return ( 
                <p>Vote could not be submitted!</p>
            )
        } else {
    return (
        <section> 
            <button className="article-vote-button" onClick={() => {incVote(1)}}>{votesChange + votes}👍
            <span aria-label="likes for this article"></span>
            </button>
            <button className="article-vote-button" onClick={() => {incVote(-1)}}>👎
            <span aria-label="dislikes for this article"></span>
            </button>
        </section>
    )
}
}

export default ArticleVotes;