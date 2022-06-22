import React from 'react';
import './PosterHome.scss';
import ParticlesBg from 'particles-bg';
import { NavLink } from 'react-router-dom';

const PosterHome = (props) => {
  return (
    <div className='home'>
        <ParticlesBg color="#800080" type="cobweb" bg={true} />
        <div className='poster-home__title'>
            {props.texts[0].title1}
            <br />
            {props.texts[0].title2}
        </div>

        <div className='poster-home__text'>
            {props.texts[0].text1}
            <br/>
            {props.texts[0].text2}
            <br/>
            {props.texts[0].text3}
        </div>

        <NavLink to="/">Back to Landing-Page</NavLink>
    </div>
    );
};

export default PosterHome;
