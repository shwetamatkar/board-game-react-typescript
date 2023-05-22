import React from 'react';

import Title from '../../atoms/Title/Title';
import Playground from '../Playground/Playground';
import CtxProvider from "../../../state/BoardGameContext";

const Home = () => {

  return (
    <>
      <CtxProvider>
        <>
          <section className="App-header">
            <Title text="Alexandria"/>
            <Title subHeading={true} text={"Board Game"}/>
          </section>
          <Playground/>
        </>
      </CtxProvider>

    </>
  )
};

export default Home;
