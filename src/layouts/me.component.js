import React from 'react';
import styled from 'styled-components';
import picture from '../images/me.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 20px);
  padding: 0 20px;
  margin: 10px;
  background-color: #DCDCDC;
`;

const ContainerAvatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;
const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;

  span {
    font-weight: 400;
    text-transform: initial;
  }
`;

const Me = () => (
  <Container>
    <ContainerAvatar>
      <img src={picture} alt='Nicolas Busuttil'/>
    </ContainerAvatar>
    <Title>Développeur web & intégrateur | <span>Nicolas Busuttil</span></Title>
    <p> 26 ans, j'ai rencontrer sur ma route les technologies React, redux, styled-component, scss, BEM</p>
  </Container>
);

export default Me;
