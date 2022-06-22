import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './UserExperience.scss';
import ParticlesBg from 'particles-bg';
import Slider from '../Slider/Slider';
import CitationNumber from '../Citation/CitationNumber';
import UXMethods from './UXMethods';
import empathymap from './empathy-map.png';
import wheelofjoy from './wheelofjoy.png';
import triangleofjoyinuse from './triangleofjoyinuse.PNG';
import Masterthesis from '../masterthesis/Masterthesis';



const UserExperience = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false,
            mirror: true,
        });
    }, []);

    const text = "One of the key methods in contextual design is called contextual inquiry. " +
                "The contextual inquiry is an interview method, in which the designer uncovers hidden " +
                "insights about the customer's work through observation and collaborative interpretation.";

    return (
        <div>
            <div className='ux-header scroll-container'>
                <ParticlesBg color="#800080" type="cobweb" bg={true} />
                <div className='poster-home__title'>
                    UX Research Methods
                </div>

                <div className='ux-wrapper'>

                    <div className='ux-intro'>
                        <div className='ux-introduction__left'>
                            
                                <p className='ux-normal-text'>
                                    Using UX methods to create a system or a design helps structure the process. 
                                    But there are a lot of different methods and approaches. As a designer I want to know when to use which method. 
                                    Choosing the right method is essential for this process. There is no method that does it all, so how can I pick the right one?
                                    What do I need to know?
                                </p>
                            
                        </div>
                        <div className='ux-introduction__right'>

                            <Slider />

                        </div>
                    </div>

                    <div className="contentwrapper">
                        <div className='ux-content'>
                            <UXMethods />
                            <CitationNumber number={'1'} />
                        </div>                       
                    </div>

                    <h2 className='rainbow-text'>Empathy</h2>
                    <div className='ux-2colums__wrapper'>                      
                        <div className='ux-wrapper__left'>
                            <p>Defining empathy is not as easy as it sounds. There are various definitions, but the following definition seams very fitting to me:</p>
                            <p>
                            <li>
                                The ability to identify with or understand the perspective, experiences, 
                                or motivations of another individual and to comprehend and share another 
                                individual's emotional state.
                            </li>

                            <li>
                                The projection of one's own feelings or thoughts onto something 
                                else, such as an object in a work of art or a character in a novel or film.
                            </li>
                            </p>
                            <CitationNumber number={'2'} />
                            <p>
                                In order to be empathetic with our users we not only have to understand the users but 
                                also help others to understand them. To achieve this, I prefer to use an empathy map. 
                                The empathy map includes the following points:
                                <br />
                                Says &rarr; Things the user says out loud during an interview.
                                <br />
                                Thinks &rarr; Thoughts the user has during the experience. It also helps when you can see the user and his reactions to certain circumstances.
                                <br />
                                Does &rarr; Actions that the user takes.
                                <br />
                                Feels &rarr; Reflects the emotional state of the user. Use adjectives!
                            </p>

                            <CitationNumber number={'3'} />
                            <p className='link-text'></p>

                        </div>
                        <div className='ux-wrapper__right'>
                            <img src={empathymap} alt='A Map that shows the 4 kinds of empathy (says, thinks, does and feels)'/>
                            <p className='link-text'>https://media.nngroup.com/media/editor/2017/12/14/screen-shot-2017-12-14-at-55525-pm.png</p>
                        </div>
                    </div>


                    <h2>User Research Method – Contextual Design</h2>
                    <div className='ux-content'>
                        <p>                          
                            Creating a transformative product experience requires the designer to 
                            know the user on a very deep and whole plane. The goal is to know the user, 
                            his everyday life and the working routine to design something that is perfectly 
                            suited for his needs. The key point of this process is the context.
                            Contextual design involves different methods to gain empathy for the user. 
                            The cool project by incontext design describes two core elements. 
                        </p>
                    </div>
                    <div className='ux-2colums__wrapper'>
                    
                        <div className='ux-wrapper-left'>
                            <h3>Wheel of Joy in Life</h3>
                            1.	Accomplish
                            <li>Enforce the user to reach his goal</li>
                            2.	Connection
                            <li>Increase the intimacy and collaboration. Real relationships at work and at home should be involved in this.</li>
                            3.	Identity
                            <li>Reinface, manifest and develop their core identities. Individual needs should always be considered.</li>
                            4.	Sensation
                            <li>Deliver pleasurable and joyful moments for the user. This is possible through colour, sound, movement and animation.</li>
                        </div>

                        <div className='ux-wrapper-right-wheel'>
                            <img src={wheelofjoy} alt='The wheel of joy displays elements of joy in life. Accomplish, Connection, Identity, Sensation'/>
                            <p className='link-text'>http://www.incontextdesign.com/wp-content/uploads/2016/04/innovationbydesignhandout.pdf</p>
                        </div>
                    

                    </div>
                    <div className='ux-2colums__wrapper'>
                        <div className='ux-wrapper-left'> 
                            <h3>The Triangle of Joy in Use</h3>
                            
                            <p>
                                1.	Direct into Action
                                <li>
                                    Direct and simple fulfilment of needs or intents reinforces the user. 
                                    The application should think for the user and make it as simple as possible.
                                </li>
                                2.	The Hassle Factor
                                <li>
                                    All inconveniences should be removed or changed, 
                                    that it's as simple as possible. Logging in, setting up,
                                    etc should be very easy and hassle-free.
                                </li>
                                3.	The Learning Delta
                                <li>
                                    The product shouldn't require real learning to use its basic functions. 
                                    Known interaction paradigms and natural interactions should be used. 
                                    If it gets complex, then it should be because the user choses to.
                                </li>
                            </p>
                            <CitationNumber number={4} />
                        </div>
                        
                        <div className='ux-wrapper-right-triangle'>
                            <img src={triangleofjoyinuse} alt='A Map that shows the 4 kinds of empathy (says, thinks, does and feels)'/>
                            <p className='link-text'>https://media.nngroup.com/media/editor/2017/12/14/screen-shot-2017-12-14-at-55525-pm.png</p>
                        </div>

                    </div>
                    
                   <div className='ux-content'>
                        <Masterthesis text={text}/>
                   </div>

                   <div className='sources'>
                       <h3>Sources</h3>

                        <div className='ux-2colums__wrapper'>
                            <div className='ux-wrapper-left-source'> 
                                <CitationNumber number={1} /> 
                            </div>

                            <div className='ux-wrapper-right-source'>
                                <p>When to Use Which User-Experience Research Methods. (o. J.). 
                                    Abgerufen 28. Januar 2022, von https://www.nngroup.com/articles/which-ux-research-methods/ 
                                </p>
                            </div>
                        </div>

                        <div className='ux-2colums__wrapper'>
                            <div className='ux-wrapper-left-source'> 
                                <CitationNumber number={2} /> 
                            </div>

                            <div className='ux-wrapper-right-source'>
                                <p>
                                    Empathy. (o. J.). In The Free Dictionary. Abgerufen 28. Januar 2022, von https://www.thefreedictionary.com/empathy
                                </p>
                            </div>
                        </div>

                        <div className='ux-2colums__wrapper'>
                            <div className='ux-wrapper-left-source'> 
                                <CitationNumber number={3} /> 
                            </div>

                            <div className='ux-wrapper-right-source'>
                                <p>
                                Experience, W. L. in R.-B. U. (o. J.). Empathy Mapping: The First Step in Design Thinking. 
                                Nielsen Norman Group. Abgerufen 28. Januar 2022, von https://www.nngroup.com/articles/empathy-mapping/
                                </p>
                            </div>
                        </div>

                        <div className='ux-2colums__wrapper'>
                            <div className='ux-wrapper-left-source'> 
                                <CitationNumber number={4} /> 
                            </div>

                            <div className='ux-wrapper-right-source'>
                                <p>
                                    Innovationbydesignhandout.pdf. (o. J.). Abgerufen 29. Januar 2022, 
                                    von http://www.incontextdesign.com/wp-content/uploads/2016/04/innovationbydesignhandout.pdf
                                </p>
                            </div>
                        </div>
                   </div>

                </div>

            </div>
        </div>
    );
};

export default UserExperience;
