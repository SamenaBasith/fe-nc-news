import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { Link, useParams} from "react-router-dom";

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null)
    const { topic } = useParams()
    

useEffect(() => {
    setIsError(false)
    setIsLoading(true)
    getArticles(topic)
    .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => {
       setIsError(err.response.data.msg)
       setIsLoading(false)
    })
}, [topic]);

if(isError) {
    return <p>{isError}</p>   
}
    
if (isLoading) {
    return <p className="Loading">Loading...</p>;
}



return (
    <div className="article-container">
    <ul className="articles">
        {articles.map((article) => {
            return (
                <li className="article_card" key={article.article_id}>
                     <h2>
                    <Link className="article-card-title"
                    to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <div className="article-info">
                    <p>Created on: {article.created_at.slice(0, 10)}</p>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>Votes: {article.votes}</p>
                    <p>Comment count: {article.comment_count}</p>
                  </div>
                </li>
            )}
        )}
    </ul>
    </div>

)
}

export default Articles;