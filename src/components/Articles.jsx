import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { Link, useParams, useSearchParams } from "react-router-dom";

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null)
    const { topic } = useParams()

    const [searchParams, setSearchParams] = useSearchParams();

    const sortbyQuery = searchParams.get("sortbyQuery");
    const orderbyQuery = searchParams.get("orderbyQuery");

  
    const handleSortBy = (e) => {
        setSearchParams({sortbyQuery: e.target.value})
       }
   
   const handleOrderBy = (e) => {
    setSearchParams({sortbyQuery, orderbyQuery : e.target.value})
       }


useEffect(() => {
    setIsError(false)
    setIsLoading(true)
    getArticles(topic, sortbyQuery, orderbyQuery)
    .then((articlesFromApi) => {
        setArticles(articlesFromApi)
        setIsLoading(false)
    })
    .catch((err) => {
       setIsError(err.response.data.msg)
       setIsLoading(false)
    })
}, [topic, sortbyQuery, orderbyQuery ]);

if(isError) {
    return <p>{isError}</p>   
}
    
if (isLoading) {
    return <p className="Loading">Loading...</p>;
}



return (
    <main className="article-container">
        <section>
            <label>Sort By: </label>
            <select value={sortbyQuery} onChange={handleSortBy}>
                <option value="created_at"> Date </option>
                <option value="comment_count"> Comment Count </option>
                <option value="votes"> Most Popular </option>
            </select>
            <select value={orderbyQuery} onChange={handleOrderBy}>
            <option value="desc"> Descending </option>
                <option value="asc"> Ascending </option>
                

            </select>
        </section>
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
    </main>

)
}

export default Articles;