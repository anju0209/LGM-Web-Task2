import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await Axios.get("https://reqres.in/api/users?page=1");
    const details = data.data;

    setUsers(details);
  };

  return (
    <Container>
      <Header handleClick={fetchData} />
      <Row>
        {users.map((user) => (
          <Col md={4} key={user.id}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
