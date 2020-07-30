import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import moment from "moment";

import "./PostTile.css";

export default function PostTile({ data }) {
  console.log(data);
  return (
    <Card className="post-item">
      <Card.Header as="h5">
        <a className="post-title" target="_blank" rel="noopener noreferrer" href={data.url}>
          {data.title}
        </a>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Badge variant="success">{data.score}</Badge> Points <br />
          {moment.unix(data.time).fromNow() + " | "}
          by {data.by} {" | "}
          <a target="_blank" rel="noopener noreferrer" href={data.url}>
            {data.url?.split("/")[2]}
          </a>
        </Card.Text>
        <Button variant="primary">Comments</Button>
      </Card.Body>
    </Card>
  );
}
