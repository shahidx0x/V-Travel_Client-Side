import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} className="bgimg">
            <Container>
              <Row>
                <Col
                  md={{ span: 6, offset: 1 }}
                  className="header-con"
                  style={{ color: "" }}
                >
                  <div className="ldiv">
                    <h1 style={{ fontSize: "50px", marginTop: "50px" }}>
                      Enjoy Your Vacation Tour with <span>V-TRAVEL</span>
                    </h1>
                    <br />
                    <p>
                      We are specializes in treatment of Hip, Knee, Shoulder and
                      Regenerative Medicine.
                    </p>
                    <Link to="/services">
                      <Button
                        className=""
                        variant="outline-warning "
                        style={{ width: "200px" }}
                      >
                        Packages
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
