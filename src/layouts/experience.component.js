import React from 'react';
import styled from 'styled-components';

import experiencePicture from '../images/work.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 20px);
  margin: 10px;
  padding: 10px;

  @media (max-width: 850px) {
    width: auto;
  }
`;

const ContainerIllustration = styled.div`
  flex: 1;
  @media (max-width: 850px) {
    display: none;
  }
`;

const ContainerContent = styled.div`
  flex: 1;
`;

const ContainerContentBlock = styled.div`
  margin: 42px auto;
  @media (max-width: 850px) {
    margin: 20px 20px;
  }
`;

const ExternalLink = styled.a`
 color: #c1ab80;
 text-decoration: none;
  :focus,
  :hover {
    color: #c1ab80;
  }
`;

const Bold = styled.p`
  font-weight: bold;
  line-height: 0;
`;

const Title = styled.h2`
  padding-bottom: 10px;
  color: #c1ab80;
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

const Experience = () => (
  <Container>
    <ContainerContent>
      <ContainerContentBlock>
          <Title>Expériences professionnel</Title>
          <Bold>2 ans et 4 mois | M6Web, Lyon</Bold>
          <p>
            J’ai intégré une équipe de développement front, pour travailler sur l’application&thinsp;
            <ExternalLink href="http://6play.fr" target="_blank">6play.fr</ExternalLink> avec le framework ReactJs.
          </p>
          <ListStyle>
            <li>Utilisation de fluxible</li>
            <li>Utilisation de redux</li>
            <li>Utilisation de Rxjs</li>
            <li>Découverte de react-native</li>
          </ListStyle>
        </ContainerContentBlock>
        <ContainerContentBlock>
          <Bold>2 ans | PMSIpilot, Lyon</Bold>
          <p>
            J’ai intégré une équipe de développement, pour travailler sur différentes applications web avec le frameworks Angular.
          </p>
          <ListStyle>
            <li>Mise en place d’un squelette d’application «from scratch NPM/Gulp</li>
            <li>Développement frontend projet API, Designer, Bi-Machine.</li>
          </ListStyle>
        </ContainerContentBlock>
        <ContainerContentBlock>
          <Title>Expériences personnel</Title>
          <ListStyle>
            <li>Réalisation d’un site web + SEO d’un site professionnel pour un psychologue clinicien </li>
            <li>
              Réalisation d’une application de comptabilité pour un Psychologue clinicien&thinsp;
              <ExternalLink href="http://psychologue-morganelaroche.fr" target="_blank">site</ExternalLink>
            </li>
          </ListStyle>
        </ContainerContentBlock>
    </ContainerContent>
  </Container>
);

export default Experience;
