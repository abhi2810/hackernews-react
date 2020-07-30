import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Comment.css";
import CommentTile from "../../components/CommentTile";
import { Spinner } from "react-bootstrap";
import PostTile from "../../components/PostTile";

export default function Comment() {
  let { id } = useParams();
  let [post, setPost] = React.useState();
  let [comments, setComments] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((res) => {
        setPost(res.data);
        let promiseList = res.data.kids
          .slice(0, 30)
          .map((cid) =>
            axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${cid}.json?print=pretty`
            )
          );
        Promise.all(promiseList)
          .then((res) => {
            setComments(res);
            setLoading(false);
          })
          .catch((err) => {
            console.err(err);
            setLoading(false);
          });
      })
      .catch(console.err);
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className="main">
      {loading ? (
        <Spinner className="center" animation="grow" />
      ) : (
        <div>
          <PostTile data={post} postPage={false} />
          <ul className="center">
            {comments?.map((res, idx) =>
              res.data ? (
                <li key={idx}>
                  <CommentTile data={res.data} />
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
