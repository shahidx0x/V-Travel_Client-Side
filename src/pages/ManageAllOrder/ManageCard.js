import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageCard = (props) => {
  const { destanation, name, email, address, _id } = props.mcard;
  const notify = () => toast.success("Deleted Successfully ");
  const handleDelete = (id) => {
    fetch(`https://hidden-woodland-99652.herokuapp.com/placeorder/${id}`, {
      method: "DELETE",
    });
    notify();
  };
  return (
    <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ToastContainer />
      <Card>
        <Card.Body>
          <h3>{destanation}</h3>
          <p>{name}</p>
          <p>{email}</p>
          <Card.Text>{address}</Card.Text>
          <Button onClick={() => handleDelete(_id)} variant="primary">
            Delete Order
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ManageCard;
