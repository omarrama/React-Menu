import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

const Header = ({ filterCategory, filterSearch, keys }) => {
  const inputRef = useRef(null);

  function filterClick(value) {
    filterCategory(value);
  }

  function searchClick(value) {
    filterSearch(value);
  }
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container className="align-items-center">
            <Navbar.Brand href="/" className="align-items-center d-flex">
              <div className="logo">مطعم جديد</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <FormControl
                  ref={inputRef}
                  onChange={({ target }) => searchClick(target.value)}
                  type="text"
                  placeholder="ابحث بالسعر أو العنوان"
                  className="mx-2"
                />
                <button className="btn-search">ابحث</button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      <Row>
        <Col sm="12" className="d-flex flex-column align-items-center">
          <Bounce>
            <h1 className="menu-title mt-3">قائمة الطعام</h1>
            <div className="menu-underline"></div>
          </Bounce>
        </Col>
      </Row>

      <Row className="mt-4 mb-5">
        <Col sm="12">
          <Bounce>
            <div className="d-flex justify-content-center">
              {keys.length < 1
                ? null
                : keys.map((category, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => filterClick(category)}
                        className="btn-category"
                      >
                        {category}
                      </button>
                    );
                  })}
            </div>
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
