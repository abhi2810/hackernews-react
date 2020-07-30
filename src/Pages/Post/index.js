import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import "./Post.css";
import PostTile from "../../components/PostTile";
import { Spinner } from "react-bootstrap";

export default function Post() {
  let location = useLocation();
  let [posts, setPosts] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    let url =
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    if (location.pathname === "/post/new") {
      url =
        "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";
    }
    axios
      .get(url)
      .then((res) => {
        let promiseList = res.data
          .slice(0, 30)
          .map((id) =>
            axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
            )
          );
        Promise.all(promiseList)
          .then((res) => {
            setPosts(res);
            setLoading(false);
          })
          .catch((err) => {
            console.err(err);
            setLoading(false);
          });
      })
      .catch(console.err);
    // eslint-disable-next-line
  }, [location]);
  return (
    <div className="main">
      {loading ? (
        <Spinner className="center" animation="grow" />
      ) : (
        <ul className="center">
          {posts?.map((res, idx) =>
            res.data ? (
              <li key={idx}>
                <PostTile data={res.data} />
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}
