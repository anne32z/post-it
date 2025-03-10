import loginImage from "../Images/loginImage.jpg";
import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux"; // we use to access the redux state and extract data from the store
import { useState } from "react";
import { addUser } from "../Features/UserSlice";

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
import logo from "../Images/logo-t.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) }); // Handle form submission

  const userList = useSelector((state) => state.users.value); // this is to get the data that we initiate in the slice and it can be written anywhere as long as it is before the return statement
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    try {
      const usersData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      dispatch(addUser(usersData));
      alert("user added.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name... 
                " //register this input to the react-hook
              {...register("name", {
                onChange: (e) => setname(e.target.value),
              })}
            />
            {name}
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            />
            {email}
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              className="form-control"
              id="password"
              type="password"
              name="password"
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            />
            {password}
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              className="form-control"
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            />
            {confirmPassword}
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6}>
          <h2>List Of Users</h2>
          <table>
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
