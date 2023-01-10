import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import ArticleVotes from "./ArticleVotes";
import Comments from "./Comments";


const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
    .then((article) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p className="Loading">Loading...</p>
  }

  return (
    <body>
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

    </body>
  

    
 
  );
};

export default SingleArticle;
