import React from "react";
import NavigationButton from "../NavigationButton";
import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
`;

const Home = () => (
  <div className="App">
    <NavigationButton route="/about" label="about" />
    <Title>Weather or Not</Title>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
    </div>
  </div>
);

export default Home;
