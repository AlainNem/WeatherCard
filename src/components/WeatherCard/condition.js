import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.div`
    font-family: "Fira sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const State = styled.div`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>{temp} °C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
