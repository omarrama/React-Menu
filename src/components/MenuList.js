import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const MenuList = ({ meals, searched }) => {
  return (
    <Container>
      <Zoom>
        {meals.length < 1 ? (
          <h3 className="text-center text-muted">لا يوجد أصناف</h3>
        ) : (
          meals.map((meal) => {
            return (
              <Row key={meal.id}>
                <Col sm="12" className="mb-3">
                  <Card
                    className="d-flex flex-row"
                    style={{
                      background: "transparent",
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <Card.Img
                      style={{
                        width: "280px",
                        height: "180px",
                        objectFit: "cover",
                      }}
                      src={meal.img}
                    />
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <div
                          className={
                            searched === "category"
                              ? "text-warning"
                              : searched === "search"
                              ? "text-danger"
                              : "meal-title"
                          }
                        >
                          {meal.title}
                        </div>
                        <div className="meal-price">{meal.price} جنيه</div>
                      </Card.Title>
                      <Card.Text className="mt-3 meal-description">
                        {meal.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })
        )}
      </Zoom>
    </Container>
  );
};

export default MenuList;
