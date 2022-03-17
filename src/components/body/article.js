import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../context";
import MoreSiren from "./suggestions";

const Article = () => {
  const [data] = useContext(MainContext);
  const { ID } = useParams();
  const { categories } = useParams();

  return (
    <>
      <div className="main-article-container">
        {data
          .filter(
            (article) => article.id === ID && article.category === categories
          )
          .map((content) => (
            <>
              <h3 className="article-title">{content.title}</h3>
              <img className="article-image" src={content.url} alt="" />
              <p className="article-body">{content.body}</p>
            </>
          ))}
      </div>
      <MoreSiren />
    </>
  );
};
export default Article;
