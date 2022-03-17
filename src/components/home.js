import { useContext } from "react";
import { MainContext } from "./context";
import { Link } from "react-router-dom";
import TheLatest from "./body/latest";
import LatestStories from "./body/latestStories";
import LatestArticles from "./body/latestArticle_topPost";

const Home = () => {
  const [data] = useContext(MainContext);

  return (
    <>
      <div className="home-container">
        <div className="banner-container">
          <div className="banner-1">
            {data
              .filter(
                (banner) => banner.id === "1" && banner.category === "Tourism"
              )
              .map((image) => (
                <Link
                  to={`/category/article/${image.id}/${image.category}`}
                  style={{ textDecoration: "none" }}
                  className=""
                >
                  <img src={image.url} className="banner-image-1" alt="" />
                </Link>
              ))}
          </div>
          <div className="banner-2">
            {data
              .filter(
                (banner) =>
                  banner.id === "5" &&
                  (banner.category === "Fitness" ||
                    banner.category === "Food" ||
                    banner.category === "Technology")
              )
              .map((image) => (
                <Link
                  to={`/category/article/${image.id}/${image.category}`}
                  style={{ textDecoration: "none" }}
                  className=""
                >
                  <img src={image.url} className="banner-image-2" alt="" />
                </Link>
              ))}
          </div>
        </div>

        <TheLatest />
        <LatestArticles />
        <LatestStories />
      </div>
    </>
  );
};

export default Home;
