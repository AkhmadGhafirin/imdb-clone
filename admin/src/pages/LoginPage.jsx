// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import CardHeader from "react-bootstrap/esm/CardHeader";
// import Container from "react-bootstrap/esm/Container";

// export default function LoginPage() {
//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={}>
//       <div className="col-lg-4">
//         <Card>
//           <CardHeader className="text-center">
//             <h4>Log In</h4>
//           </CardHeader>
//           <Form>
//             <Form.Group className="mb-3" controlId="formGroupEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formGroupPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Button variant="dark">Log In</Button>
//           </Form>
//         </Card>
//       </div>
//     </Container>
//   );
// }

import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Log In</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </div>
                </Form.Group>
                <div className="text-center mt-3">
                  <Button className="w-100" type="submit" variant="dark">
                    Log In
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
