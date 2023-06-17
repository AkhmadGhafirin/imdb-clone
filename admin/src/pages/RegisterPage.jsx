import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Loading } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/action/users";

const RegisterPage = () => {
  const { loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(form));
      setForm({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
      toast.success("Successfully register new admin");
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Register Admin</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      value={form?.username}
                      name="username"
                      autoComplete="off"
                      required
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={form?.email}
                      name="email"
                      autoComplete="off"
                      required
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        autoComplete="off"
                        name="password"
                        value={form?.password}
                        onChange={handleOnChange}
                      />
                      <Button
                        variant="outline-dark"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your phone number"
                      value={form?.phoneNumber}
                      name="phoneNumber"
                      autoComplete="off"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as={"textarea"}
                      type="text"
                      style={{ maxHeight: "250px" }}
                      placeholder="Enter your address"
                      value={form?.address}
                      name="address"
                      autoComplete="off"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <div className="text-center mt-3">
                    <Button className="w-100" type="submit" variant="dark">
                      Register
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
