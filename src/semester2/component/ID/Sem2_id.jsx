import React from 'react'
import Sidebar from '../sidebar'
import "./Sem2_id.scss";
import { CopyBlock, nord } from "react-code-blocks";
import Animations from "./Animations";

import rwd from "./rwd.JPG";
import { ParticlesContainer } from './particlesbg';
import OtherIDthings from './otherIDthings';

function sem2_id() {

  const MediaQueryComponent = () => (
    <CopyBlock
      text='@media only screen and (max-width:480px) { // rule }'
      theme={nord}
      language="arduino"
      showLineNumbers='true'
    />
  )

  const BreakpointComponent = () => (
    <CopyBlock
      text='max-width:480px
      or
      max-width: 600px
      '
      theme={nord}
      language="arduino"
      showLineNumbers='true'
    />
  )

  return (
    <div>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className='id_app'>
        
        <div className="id_page-wrap">
          <h1>Interaction Design</h1>
          <h2>Responsive Web Design</h2>
          
            <p className='normal-text'>
              To create responsive web-design, there it is detrimental to know that 
              the design is for an uncountable amount of screen sizes. The second semester part of this website is also fully responsive. 
              <i>Except for the Unity WebGL Terminal in the Computer Science section, since a terminal in a browser in a container just doesnt work on Mobile. </i>
              It's important to let the website adapt to any screen size. 
              This is achievable with the following 2 methods:
            </p>
          <div className="smalltext-wrapper">
            <div className="flex-column">
              <h3>Media queries</h3>
              <p className='normal-text'>
                CSS media queries are used to apply different styles to a document, 
                depending on the device it is being viewed on.
                For example, you could use a media query to apply a 
                different stylesheet to a document when it is being viewed on a 
                device with a width of less than 480px, such as a mobile phone.
                You could also use a media query to apply a different stylesheet to a 
                document when it is being viewed in landscape orientation 
                (rather than portrait).
              </p>
              <div className="codeblock">
                <MediaQueryComponent />
              </div>
            </div>
          
            <div className="flex-column">
              <h3>Breakpoints</h3>
              <p className='normal-text'>
                Breakpoints are used in CSS to create responsive designs. 
                Breakpoints can be used to change the CSS rules based on the 
                width of the device or screen. This is especially helpful when 
                designing for mobile devices. Breakpoints can be used to define
                when the content or design should change for the user. 
                Here is an example of using breakpoints in CSS:
              </p>
              <div className="codeblock">
                <BreakpointComponent />
              </div>
            </div>
            
            <div className="flex-column">
              <h3>In conclusion</h3>
              <p className="normal-text">
                CSS breakpoints and CSS media queries are two tools that can be used to 
                create responsive designs.
                Breakpoints can be used to change the CSS rules based on the width 
                of the device or screen. Media queries can be used to determine 
                what changes should occur at different pixel values. Breakpoints
                and media queries can be used together to create responsive designs 
                that look great on all devices.
              </p>
            </div>
            <div className="flex-column">
              <img className="normal-image" src={rwd} alt='Shows the correlations between media query, breakpoints and grid.' />
            </div>
          </div>

          <Animations />
          
          <div className='spacer'></div>

          <OtherIDthings />

        </div>
          
      </div>
    </div>
  )
}

export default sem2_id