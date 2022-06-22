import React, { Component } from 'react';
import Page from './Component/page';
import Nav from './Component/nav';
import Link from './Component/links';
import PosterHome from './Component/Home/PosterHome'
import './poster1.scss';
import UserExperience from './Component/UX/UserExperience';
import ComputerScience from './Component/CS/ComputerScience';
import InteractionDesign from './Component/ID/InteractionDesign';

class PosterMain extends Component {

  render() {

    const hometext = [
      {
        title1: 'Master of Arts in Design Major Digital Ideation ',
        title2: 'Assessment Poster for Core Modules by Luiz Perren',
        text1: 'This website aims to be an interactive alternative to the assigned poster.',
        text2: 'It is divided into the 3 categories of our core modules: ',
        text3: 'UX Methods and Research, Computer Science and Design/Interaction Design.',
      }
    ];

    return (
      <div className="App">
        <div className="poster-semester1__nav">
          <Link to="/" >
            <button className='poster-semester1__nav-button alternate-home'>Home</button>
          </Link>
          <Link to="/UX" >
            <button className='poster-semester1__nav-button alternate-ux'>UX</button>
          </Link>
          <Link to="/CS" >
            <button className='poster-semester1__nav-button alternate-cs'>Computer Science</button>
          </Link>
          <Link to="/ID" >
            <button className='poster-semester1__nav-button alternate-id'>Interaction Design</button>
          </Link>
        </div>
        <Nav>
          <Page className='home-pages' path="/">
            <div className="page" >              
              <PosterHome texts={hometext} />
            </div>
          </Page>
          <Page path="/UX">
            <div className="page">
              <UserExperience />
            </div>
          </Page>
          <Page path="/CS">
            <div className="page">
              <ComputerScience />
            </div>
          </Page>
          <Page path="/ID">
            <div className="page">
              <InteractionDesign />
            </div>
          </Page>
        </Nav>
        
      </div>
    );
  }
}

export default PosterMain;
