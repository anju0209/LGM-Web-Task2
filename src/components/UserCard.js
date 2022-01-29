import React from "react";
import { CardBody, Card, CardImg, CardTitle, CardText } from "reactstrap";
const UserCard = ({ user }) => {
  return (
    <Card className="mt-3 ms-3 mx-3 mb-3 usercard">
      <CardImg className="img cardimg" src={user.avatar} height={250} />
      <CardBody className="text-center">
        <CardTitle
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          {user.first_name} {user.last_name}
        </CardTitle>
        <CardText style={{ fontSize: 18 }}>{user.email}</CardText>
      </CardBody>
    </Card>
  );
};

export default UserCard;
