import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import wrapper from './wrapper.png';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";


function OtherIDthings() {

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);  
}

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  return (
    <div>
        <div className='smalltext-wrapper'>
            <div className='flex-column' data-aos="flip-right" data-aos-duration="1000">

            <h2>Design Systems</h2>
                <p className='normal-text'>
                    A design system is a set of principles and guidelines that help designers create consistent, 
                    cohesive, and well-crafted user interfaces. A design system can be as simple as a style guide or as comprehensive as a full-fledged library of reusable UI components. By following a design system, designers can avoid common mistakes, create UI elements that work well together, and produce designs that are both aesthetically pleasing and effective.
                    There are many benefits to using a design system. Design systems can help designers 
                    avoid common mistakes, create UI elements that work well together, and produce designs 
                    that are both aesthetically pleasing and effective. A well-designed design system can 
                    also save time and improve efficiency by providing designers with a library of reusable 
                    UI components.
                </p>
                <p className='citation'>Design Systems 101. (o. J.). Abgerufen 03. Juni 2022, von https://www.nngroup.com/articles/design-systems-101/</p>
            </div>
            <div className='flex-column' data-aos="flip-left" data-aos-duration="1000">
                <p className='normal-text-right'>
                    <br /><br /><br /><br />
                    For example this website. there are 2 main wrappers. A wide wrapper that follows a flexbox column direction
                    <br /> Inside this wrapper is another wrapper that allows a flexbox row direction. The following image explains the order direction:
                    <img src={wrapper} />
                </p>
            </div>
        </div>

        <div className='spacer'></div>

        <div className='smalltext-wrapper'>
            <h1>
                For my master thesis
            </h1>
            <p>These concepts are important for my master thesis because they provide a foundation for creating effective and engaging user interfaces. By understanding and following some key principles, I can avoid common mistakes, create UI elements that work well together, and produce designs that are both aesthetically pleasing and effective.</p>
        </div>

        <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                </Animate>
            
                {/* animate keyframes with individual element. */}
                <AnimateKeyframes
                play
                direction="alternate-reverse"
                fillMode="both"
                duration={2}
                iterationCount="infinite"
                keyframes={["opacity: 0", "opacity: 1"]}
                >
                    <div className="back-to-top">
                        <p onClick={scrollToTop} className="back-to-top">
                                Back to the top &#8679;
                        </p>
                    </div>
        </AnimateKeyframes>

        <div className='spacer'></div>
    </div>
  )
}

export default OtherIDthings