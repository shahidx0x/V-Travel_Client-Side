import React from "react";
import { Card } from "react-bootstrap";

const ReviewCard = (props) => {
  const { img, review, ratings, name } = props.review;
  return (
    <div>
      <Card style={{ width: "20rem", height: "34rem", marginBottom: "15px" }}>
        <Card.Img variant="top" src={img} style={{ borderRadius: "50%" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
          <div>
            <h1>{ratings}</h1>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
