import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { Link} from "react-router-dom";

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    setIsLoading(true)
    getArticles()
    .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
    })
}, []);
    
if (isLoading) {
    return <p className="Loading">Loading...</p>;
}

return (
    <div>
    <ul className="articles">
        {articles.map((article) => {
            return (
                <li className="article_card" key={article.article_id}>
                     <h2>
                    <Link to={`/articles/${article.article_id}`}>
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