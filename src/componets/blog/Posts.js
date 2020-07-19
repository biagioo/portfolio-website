import React from 'react';
import {Card, Badge} from 'react-bootstrap';

const Posts = (props) => (
  <Card style={{width: '18rem'}} className="h-100 shadow-sm bg-white rounded">
    <Card.Img variant="top" src={props.post.cover_image} />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="mb-0 font-weight-bold">
        {props.post.title}
      </Card.Title>
      <Card.Text className="text-secondary">{props.post.description}</Card.Text>
      <Badge pill className="mb-1" variant="warning">
        <a href={props.post.url}>See Full Post</a>
      </Badge>
    </Card.Body>
  </Card>
);

export default Posts;
