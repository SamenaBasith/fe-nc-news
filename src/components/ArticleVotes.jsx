import { useState } from "react"
import { patchArticleById } from '../api'

const ArticleVotes = ({article_id, votes}) => {

    const [votesChange, setVotes]= useState(0)

    function incVote(increment) {
        setVotes((currVote) => 
        currVote + increment);
        patchArticleById(article_id, increment)
        .catch(() => {
            setVotes((currVote) => 
                currVote - increment);
            })
        }    
    

    return (
        <section> 
            <button onClick={() => {incVote(1)}}>{votesChange + votes}👍</button>
            <button onClick={() => {incVote(-1)}}>👎</button>
        </section>
    )
}

export default ArticleVotes;