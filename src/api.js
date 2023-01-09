import axios from "axios";

const newsApi = axios.create({
    baseURL:"https://nc-news-project-h33h.onrender.com/api"
});

export const getArticles = () => {
    return newsApi.get('/articles')
    .then((res) => {
        console.log(res)
        return res.data.articles;
    })
}