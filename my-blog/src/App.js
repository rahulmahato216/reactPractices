import React from "react";
import "./App.css";
import styled from "styled-components";

const App = () => {
  const Button = styled.button`
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    background-color: ${({ bg }) => bg};

    &:hover {
      padding: 0.5em 2em;
    }
  `;

  const Para = styled.p`
    color: #0009;
    font-weight: bold;
  `;

  // const Wrapper = styled.section`
  //   .btn {
  //     color: #bf4f74;
  //     font-size: 1em;
  //     margin: 1em;
  //     padding: 0.25em 1em;
  //     border: 2px solid #bf4f74;
  //     border-radius: 3px;
  //   }

  //   .btn:hover {
  //     padding: 0.5em 2em;
  //   }

  //   p {
  //     color: #0009;
  //     font-weight: bold;
  //   }
  // `;
  return (
    <>
      {/* <Wrapper> */}
      <Para>
        To stay tuned
        <Button className="btn" bg="yellow">
          Subscribe Me
        </Button>
      </Para>
      {/* </Wrapper> */}
    </>
  );
};

export default App;
