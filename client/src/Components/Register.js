import {
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  Form,
  Label,
} from "reactstrap";
const Register = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input />
        <FormFeedback>You will not be able to see this</FormFeedback>
        <FormText>Enter Your Name..</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input valid />
        <FormFeedback valid>Sweet! that Email is available</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="Password">password</Label>
        <Input />
        <FormFeedback>Enter your password</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password"></Label>
        <Input />
        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
        <FormText>conform your password</FormText>
      </FormGroup>
      <button>Register</button>
    </Form>
  );
};

export default Register;
