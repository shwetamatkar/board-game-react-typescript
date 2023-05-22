import React, {useContext} from 'react';
import './Title.css';
import {GameContext} from "../../../state/BoardGameContext";

interface Props {
  text: string,
  subHeading?: boolean
}

const Title = ({text, subHeading = false}: Props) => {

  const state = useContext(GameContext);

  if (state?.players.length) {
    return <></>
  }
  if (subHeading) {
    return <p className="sub-heading">{text}</p>
  }
  return (
    <h1 className="heading">{text}</h1>
  );
}

export default Title;
