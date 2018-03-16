import React from 'react';
import Me from '../layouts/me.component';
import styled from 'styled-components';

import Experience from '../layouts/experience.component';
import Skill from '../layouts/skill.component';
import test from '../images/work.jpg';

const ContainerHome = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (max-width: 850px) {
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
  }
`;

const FixedHome = styled.div`
  flex: none;
`;
const ScrollingHome = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
`;

const IllustrationHome = styled.img`
  width: auto;
  height: 100vh;
`;

const Home = () => (
  <ContainerHome>
    <FixedHome>
      <IllustrationHome src={test} />
    </FixedHome>
    <ScrollingHome>
      <Me />
      <Experience />
      <Skill />
    </ScrollingHome>
  </ContainerHome>
);

export default Home;
