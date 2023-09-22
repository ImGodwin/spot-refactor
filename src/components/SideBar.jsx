
import "bootstrap-icons/font/bootstrap-icons.css" 
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const SideBar = () => {
  return(
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-dark min-vh-100">
            <Link to={"/"}></Link>
              <i className="bi bi-"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
