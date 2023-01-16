import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import ArticleVotes from "./ArticleVotes";
import Comments from "./Comments";



const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null)

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
    .then((articleFromApi) => {
      setSingleArticle(articleFromApi);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsError(err.response.data.msg)
      setIsLoading(false)
   })
  }, [article_id]);

  if(isError) {
    return <p>{isError}</p>   
}

  if (isLoading) {
    return <p className="Loading"> Loading...</p>
  }

  return (
    <main className="single-article-container">
    <section className="single-article">
      <h2 className="single-article-title">{singleArticle.title}</h2>
      <h3 className="single-article-author">Author: {singleArticle.author}</h3>
      <h4>Topic: {singleArticle.topic}</h4>
      <p>Created on: {singleArticle.created_at.slice(0, 10)}</p>
      <p className="single-article-body">{singleArticle.body}</p>
      <ArticleVotes votes={singleArticle.votes} article_id={singleArticle.article_id}/>
      </section>
      <article 
      className="comment-section"><Comments singleArticle={singleArticle} 
      /></article>

    </main>
  

    
 
  );
};

export default SingleArticle;
