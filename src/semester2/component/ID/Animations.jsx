import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  return (
    <div>
        <div className='flex-column' data-aos="fade-up">
            <h2>Animations</h2>
            <p className='normal-text'>
                Animations are a powerful tool for designers because they can 
                control where a user's attention is focused. However, it's 
                essential to use animations sparingly and only when they 
                will genuinely help the user, as too many or misleading 
                animations can be distracting and frustrating.
            </p>
        </div>

            <div className="smalltext-wrapper">
                <div className='flex-column'>
                    
                    <p className="normal-text" data-aos="fade-up" data-aos-duration="1000">
                        Just keep scrolling down for some animations
                    </p>

                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    <div className="animated-textbox" id="right" data-aos="zoom-in" data-aos-duration="1000">
                        <p>zoom-in</p>
                    </div>

                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    <div className="animated-textbox" data-aos="flip-right" data-aos-duration="1000">
                        <p>flip-right</p>
                    </div>

                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    <div className="animated-textbox" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="1000"
                        data-aos-offset="0"
                        data-aos-duration="2000">
                        <p>fade-zoom-in, ease-in-back, delayed</p>
                    </div>
                    <div data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="1000"
                        data-aos-offset="0"
                        data-aos-duration="2000">
                        <p>Did you have a short moment of confusion because of the delay? </p>
                    </div>

                    <div className="spacer"></div>
                    <p>
                        This would be an example of an untimely animation. 
                        All animations had a duration of one second, except the last one. 
                        It destroyed the rhythm of interaction. 
                        Inappropriate or badly executed animations can mislead users, 
                        causing them to think that an interactive element is clickable 
                        when it isn't, or making them think that something 
                        has happened when it hasn't. Animations can also interfere 
                        with users' ability to interact with an interface, 
                        making it difficult or even impossible to use.
                    </p>
                    <div className="spacer"></div>
                    
                </div>

                <div className='flex-column'>
                    <div className="spacer"></div>

                    <div className="animated-textbox" data-aos="zoom-out-right" data-aos-duration="1000">
                        <p>zoom-out-right</p>
                    </div>
                    
                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    <div className="animated-textbox" data-aos="fade-up" 
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000">
                        <p>fade-up deplaced</p>
                    </div>

                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    
                    <div className="animated-textbox" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <p>flip left, ease out</p>
                    </div>

                    <div className="spacer"></div>                   
                </div>

                <div className="spacer"></div>

            <div className="smalltext-wrapper" data-aos="fade-up" 
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000">
                <h3>Web animation principles</h3>
                <p className="normal-text">Web animation plays an important role in effective web design. By understanding and following some key principles, designers can create animations that are not only aesthetically pleasing, but also convey the desired message effectively. 
                    The principles of web animation are important because they provide designers with guidelines to create animations that are both aesthetically pleasing and effective. These principles can help designers avoid common mistakes and create animations that are consistent with the overall look and feel of a website. 
                </p>
                <p className="normal-text"><b>Some of the most important animation principles in my opinion include:</b></p>
                <ul className="normal-text">
                    <li>
                        <b>Timing:</b>
                        Timing is essential in animation. The timing of an animation must be carefully planned to ensure that it is neither too slow nor too fast. The right timing will help keep viewers engaged and ensure that the intended message is conveyed effectively. 
                    </li>
                    <li>
                        <b>Spacing:</b>
                        Spacing is the amount of space between individual elements in an animation. This principle is important because it can affect the overall look and feel of the animation. Spacing plays a role in creating visual interest, contrast, and focus within an animation. 
                    </li>
                    <li>
                        <b>Easing:</b>
                        Easing refers to the way an object moves into and out of an animation. Easing makes animations appear more natural by giving them a sense of momentum. Proper easing creates a smoother transition between elements which helps maintain continuity throughout an animation. 
                    </li>
                    <li>
                        <b>Continuity</b>
                        Continuity ensures that an animation flows smoothly from one element to another. This principle is important for creating animations that are easy to follow and understand. By maintaining continuity, designers can avoid confusion and help viewers better engage with the content. 
                    </li>
                    <li>
                        <b>Juxtaposition:</b>
                        Juxtaposition is the placement of elements in relation to each other within an animation. This principle is important for creating visual interest and contrast. Juxtaposition can be used to draw attention to specific elements or add depth and dimension to an animation
                    </li>
                </ul>
                <p className="citation">The 12 Principles of Animation: How the Classics were Made. (2022, Februar 11). Animated Explainer Video Experts. https://animationexplainers.com/12-principles-of-animation/</p>
            </div>

            
            <div className='spacer'></div>


            <div className="smalltext-wrapper"data-aos="fade-up" 
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000">
                <h3>When to use animations</h3>
                <p className="normal-text">
                    Animations can help to provide feedback about what is happening in an 
                    interface. They can be used to signal a change of state, 
                    such as when an object is added or deleted. 
                    They can also be used to provide feedback about player actions, 
                    such as in a gaming interface. The challenge is to make sure that 
                    the animation doesn't interfere with the actual gameplay. 
                    Animations should be short and shouldn't require the player 
                    to take any action in response to them. They should also be 
                    clear about what state change has occurred.
                    
                    <br />
                    But animations can also provide useful hints for the user. 
                    An example would be this:
                    <br />
                    
                </p>
 
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
            
            </div>
        </div>
    </div>
  );
}

export default App;




      
