import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Nav from "./components/Nav"
import SingleArticle from "./components/SingleArticle";
import { Error } from './components/Error';
import Users from "./components/Users"





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" />
        <Nav />
        <Routes>
          <Route path='/*' element={<Error />} />
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
