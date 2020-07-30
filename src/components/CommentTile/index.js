import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import parse from "html-react-parser";

import "./CommentTile.css";
import { Link } from "react-router-dom";

export default function CommentTile({ data }) {
  return (
    <Card className="comment-item">
      <Card.Body>
        {parse(data.text)}
        <Card.Text>
          <br />
          <i>
            {moment.unix(data.time).fromNow() + " | "}
            by {data.by}
          </i>
        </Card.Text>
        {data.kids ? (
          <Link className="btn btn-primary" to={`/comment/${data.id}`}>
            Replies
          </Link>
        ) : null}
      </Card.Body>
    </Card>
  );
}
