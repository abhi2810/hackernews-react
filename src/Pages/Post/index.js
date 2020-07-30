import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Post() {
  let location = useLocation();
  let [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
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
        Promise.all(promiseList).then((res) => {
          setPosts(res);
        });
      })
      .catch(console.err);
    // eslint-disable-next-line
  }, [location]);
  return (
    <div>
      <ul>
        {posts.map((res, idx) =>
          res.data != null ? <li key={idx}>{res.data.title}</li> : null
        )}
      </ul>
    </div>
  );
}
