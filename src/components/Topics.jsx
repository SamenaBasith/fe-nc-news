import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);


  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    })
  }, []);


  
  return (
    <section>
      {topics.map((topic) => {
        return (
            <li className="topics-list"
            key={topic.slug}>
            <Link className="single-topic-sidebar" to={`/topics/${topic.slug}`}>{topic.slug.toUpperCase()}</Link>
          </li>
        );
      })}
    </section>
  );
};

export default Topics;
