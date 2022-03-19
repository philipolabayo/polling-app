import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PollingCard from "./Components/polling";
import pollJson from "./lib/poll.json";
//import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";


function App(){
  let [colors, setColors]= useState([]);

  useEffect(() => {
    setColors(pollJson);
  }, []);
  
  function incrementPollCount(colorId) {
    colors = colors.map((color) => {
      if (color._id === colorId) {
        color.votes = color.votes + 1;
      }
      return color;
    });
    setColors(colors);
  }


return (
  <Container className="app">
    <Row>
      {colors.map((color)=>{
        return(
          <Col md= {4}>
            <PollingCard
            color={color}
            incrementPollCount ={(colorId)=> incrementPollCount(colorId)} />
          </Col>
        );
      })}
    </Row>
  </Container>
);
}

export default App;