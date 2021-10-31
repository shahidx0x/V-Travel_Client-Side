import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { _id, name, price, description, img, ratings } = props.service;
  return (
    <div>
      <Card style={{ width: "20rem", height: "34rem", marginBottom: "15px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div>
            <h1>{price}/per person</h1>
            <h1>{ratings}</h1>
          </div>
          <Link to={`/placeorder/${_id}`}>
            <Button variant="primary">Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
