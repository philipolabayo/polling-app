import React from "react";
import { Card, Button } from "react-bootstrap";

function PollingCard(props){
    let {color , incrementPollCount} = props;

    return(
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/assets/images/${color.color}`} />
        <Card.Body>
        <Card.Title>{color.name}</Card.Title>
        <Button variant="success" onClick={() => incrementPollCount(color._id)}>
          Vote!
        </Button>
      </Card.Body>
      <Card.Footer>Poll count: {color.votes}</Card.Footer>
    </Card>
  );
}
export default PollingCard;