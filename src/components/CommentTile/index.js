import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

import "./CommentTile.css";
import { Link } from "react-router-dom";

export default function CommentTile({ data }) {
  console.log(data);
  return (
    <Card className="comment-item">
      <Card.Body>
        <Card.Text>
          {data.text}
          <br />
          <i>
            {moment.unix(data.time).fromNow() + " | "}
            by {data.by}
          </i>
        </Card.Text>
        <Link className="btn btn-primary" to={`/comment/${data.id}`}>
          Replies
        </Link>
      </Card.Body>
    </Card>
  );
}
