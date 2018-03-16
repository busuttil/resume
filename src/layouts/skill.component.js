import React from 'react';
import styled from 'styled-components';
import picture from '../images/me.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 10px;
  padding: 10px;
  background-color: #DCDCDC;

  @media (max-width: 850px) {
    width: auto;
  }
`;

const ContainerContent = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  padding-bottom: 10px;
  color: #c1ab80;
`;

const Bold = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 0;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const Block = styled.div`
  width: 50%;
`;

const ListStyle = styled.ul`
  margin-left: 0;
  padding-left: 0;

  li {
    list-style: none;

    &:before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 2px 5px;
      background-color: #c1ab80;
    }
  }
`;

const Skill = () => (
  <Container>
    <ContainerContent>
      <Title>Compétences acquises dans le professionnel</Title>
      <ContentBlock>
        <Block>
          <Bold>Javascript</Bold>
          <p>Javascript, React, Redux, Rxjs, Webpack, Chromedriver, phantoms et jest</p>
        </Block>
        <Block>
          <Bold>CSS</Bold>
          <p>Styled-component, Css, Scss, Less </p>
        </Block>
        <Block>
          <Bold>Petit +</Bold>
          <p>SEO, Accessibilité web</p>
        </Block>
      </ContentBlock>
    </ContainerContent>
    <ContainerContent>
      <Title>Compétences acquises dans le personnel</Title>
      <ListStyle>
        <li>Réalisation d’un site web + SEO d’un site professionnel pour un psychologue clinicien </li>
        <li>Réalisation d’une application de comptabilité pour un Psychologue clinicien pour window </li>
      </ListStyle>
  </ContainerContent>
</Container>
);

export default Skill;
