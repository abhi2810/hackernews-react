import React from "react";
import { Card, Badge } from "react-bootstrap";
import moment from "moment";
import parse from "html-react-parser";

import "./PostTile.css";
import { Link } from "react-router-dom";

export default function PostTile({ data, postPage }) {
  return (
    <Card className="post-item">
      <Card.Header as="h5">
        <a
          className="post-title"
          target="_blank"
          rel="noopener noreferrer"
          href={data.url}
        >
          {parse(data.title || data.text)}
        </a>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {data.title ? (
            <>
              <Badge variant="success">{data.score}</Badge> Points <br />
            </>
          ) : null}
          {moment.unix(data.time).fromNow() + " | "}
          by {data.by} {" | "}
          <a target="_blank" rel="noopener noreferrer" href={data.url}>
            {data.url?.split("/")[2]}
          </a>
        </Card.Text>
        {postPage && data.kids ? (
          <Link className="btn btn-primary" to={`/comment/${data.id}`}>
            Comments
          </Link>
        ) : null}
      </Card.Body>
    </Card>
  );
}
