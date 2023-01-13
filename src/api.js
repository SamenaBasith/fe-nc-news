import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-project-h33h.onrender.com/api",
});

export const getArticles = (topic, sort_by, order_by) => {
 console.log(sort_by, order_by)
 if (sort_by === null) {
  sort_by = "created_at"
 }
  return newsApi.get("/articles", {params: {topic:topic ,sort_by:sort_by, order_by:order_by}}).then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleById = (article_id, increment) => {
  const patchedBody = {
    inc_votes: increment,
  };
  return newsApi.patch(`/articles/${article_id}`, patchedBody).then((res) => {
    return res.data.article;
  });
};

export const postComment = (newComment, article_id) => {
  const postBody = {
    username: newComment.author,
    body: newComment.body,
  };
  return newsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((res) => {
      return res.data.comment;
    });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`)
}