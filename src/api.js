import axios from "axios";

const newsApi = axios.create({
    baseURL:"https://nc-news-project-h33h.onrender.com/api"
});

export const getArticles = () => {
    return newsApi.get('/articles')
    .then((res) => {
        return res.data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    });
  };

  export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
  };


  export const patchArticleById = (article_id, increment) => {
    const patchedBody = {
        inc_votes: increment,
    }
    return newsApi.patch(`/articles/${article_id}`, patchedBody)
    .then((res) => {
        return res.data.article

    })
  }

  export const postComment = (newComment, article_id) => {
    const postBody = {
        username: newComment.author,
        body: newComment.body,
    }
    return newsApi.post(`/articles/${article_id}/comments`, postBody)
    .then((res) => {
        return res.data.comment
    }
    )
}
  
