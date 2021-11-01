import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
  const [allpackage, setAllpackage] = useState([]);
  useEffect(() => {
    fetch("https://hidden-woodland-99652.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setAllpackage(data));
  }, []);
  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="text-center">
        <span>Our All Packages </span>
      </h2>
      {allpackage.map((pak) => (
        <AllServiceCard key={pak._id} data={pak}></AllServiceCard>
      ))}
    </Container>
  );
};

export default AllServices;
