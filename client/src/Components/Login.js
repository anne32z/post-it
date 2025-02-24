import loginImage from "../Images/loginImage.jpg";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={3}>
              UserName
              <br />
              <input
                id="Email"
                name="Email"
                placeholder="Enter Your Email"
                type="text"
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              Password
              <br />
              <input
                id="pass"
                name="pass"
                placeholder="Enter Your password"
                type="password"
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}></Col>
          </Row>

          <Row>
            <Col md={3}></Col>
          </Row>
          <button>Login</button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
