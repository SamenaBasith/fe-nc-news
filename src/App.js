import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Nav from "./components/Nav"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
