import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './ComputerScience.scss';
import ParticlesBg from 'particles-bg';
import Senses from './senses.jpg';
import languages from './languages.png';
import vruseage from './VRMedicineUse.jpg'
import CitationNumber from '../Citation/CitationNumber';
import Masterthesis from '../masterthesis/Masterthesis';
import click1 from './click1.PNG';
import click2 from './click2.PNG';

const ComputerScience = () => {

    const text = "Since I did my bachelor thesis in AR I’ve got a some experiences with it. Combining these inputs showed me, "+
    "that I need to research the technologies further before I stay with 1 technology. It always important to keep the serious game theory "+
    "in the back of my head. Since defining the fun factor and designing it that way solidifies a good user experience.  " + <br/> +
    "New technologies, like jetpack compose, offer an incredible way of creating an active and reactive user interface. This in combination with an "+
    "fully developed idea might be a solid ground for a competent thesis."
    


    return (
        <div>
            <ParticlesBg color="#800080" type="cobweb" bg={true} />
            <div className='cs-header'>
                <div className='poster-home__title'>
                    Computer Science                   
                </div>

                <div className='cs-wrapper'>
                    <div className='cs-intro'>
                        <p className='intro-text'>This is a short trailer of my VR Blockbuster</p>
                        <ReactPlayer className='cs-video' url='Videos/IncredibleMovie.mp4' width="100%" height="72%" controls={true} />
                    </div>

                    <div className='cs-normal-wrapper'>
                        <h2>Immersive Realities</h2>
                        <p>
                            Immersive realities rely on human senses. These senses can all theoretically be influenced, 
                            but not all of them make sense. Here’s a list of all 8 commonly referred senses:
                        </p>
                        <p>
                            <li>sight</li>
                            <li>taste</li>
                            <li>smell</li>
                            <li>thermal</li>
                            <li>sense of touch</li>
                            <li>proprioceptive (depth sensitivity)</li>
                            <li>vestibular</li>
                            <li>hearing</li>
                        </p>
                    </div>
                    <br />
                    <div className='cs-tworows'>
                        <div className='cs-left-row'>
                            <p>
                                Normally perception is limited to 5 senses (sight, taste, smell, hearing, touch) 
                                but that only describes our exteroceptors. Exteroceptors only detect stimulation 
                                from outside our body. The interoceptors in comparison receive stimulation from 
                                inside our bodies. Most organs have a sensory system and therefore have an own sense, 
                                but these senses differ from one person to another.
                            </p>
                            <CitationNumber number={1} />
                        </div>
                        <div className='cs-right-row-1'>
                            <img src={Senses} />
                            <p className='link-text'>https://speakingofautismcom.files.wordpress.com/2020/04/senses.jpg</p>
                        </div>
                    </div>
                    <div className='cs-tworows'>
                        <div className='cs-left-row-2'>
                            <p>
                                Augmented Reality has a lower grade of immersion than virtual reality. 
                                In addition, augmented reality aims to enhance our surrounding while virtual reality 
                                tries to reinvent or recreate our reality. Steam offers a vast amount of applications 
                                for mainly virtual reality. Applications to design the interior of a room, draw, 
                                create a short film or solve riddles. But games are not the only field of use for 
                                these technologies. The first uses where for the military to train pilots, nowadays 
                                VR can be found in medicine or even in therapy. <br />
                                VR in medicine can be applied in:
                                <li>pain management</li>
                                <li>physical therapy</li>
                                <li>mental health</li>
                                <li>psychologicyal therapy</li>
                                <li>robotic surger</li>
                                <li>medical training</li>
                            </p>
                            <CitationNumber number={2} />
                        </div>
                        <div className='cs-right-row-2'>
                            <img src={vruseage} />
                            <p className='link-text'>https://visualise.com/virtual-reality/virtual-reality-healthcare</p>
                        </div>
                    </div>

                    <h2>Mobile Development</h2>
                    <div className='cs-tworows'>
                        
                        <div className='cs-left-row-2'>
                            <p>
                                Mobile development is improving and changing rapidly. 
                                There are a lot of different technologies, approaches and frameworks to pick 
                                from. On the right side you can see 25 different programming languages, with 
                                whom it’s possible to create a mobile application. But the language is not what 
                                defines the app, it’s the development approach.
                            </p>
                        </div>  
                            <div className='normalImage'>
                                <img src={languages} />
                            </div>
                    </div>

                    <h3>App development approaches</h3>
                    <div className='flex-row-wrapper'>
                        <div className='flex-approachwrapper'>
                            <p className='middle-title'>Web-Apps</p>           
                            <div className='approach'>
                                <p>This application runs directly in the browser. 
                                    This allows for a broad range of users on different devices.</p>
                                <div className='procon'>
                                    <div className='approach-pro'>
                                        <p className='smol-title'>Pro</p>
                                        <p>One code base for all platforms.</p>
                                        <p>No App-Store, download or installation needed</p>
                                        <p>Continuous deployment</p>
                                        <p>Progressive Web App or existing sides can be used &rarr; Responsiveness</p>
                                    </div>

                                    <div className='approach-con'>
                                        <p className='smol-title'>Con</p>
                                        <p>Just runs in browser</p>
                                        <p>Can’t access all smartphone functions &rarr; Hardware functions</p>
                                        <p>App can’t be put in the app store and can’t be installed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex-approachwrapper'>
                            <p className='middle-title'>Hybrid App</p>           
                            <div className='approach'>
                                <p>
                                    This app also consists of a web-application 
                                    which is packed in a container (WebView)
                                </p>
                                <div className='procon'>
                                    <div className='approach-pro'>
                                        <p className='smol-title'>Pro</p>
                                        <p>One code base for all platforms.</p>
                                        <p>Can be in the App Store</p>
                                        <p>Access to smartphone hardware functionality</p>
                                    </div>

                                    <div className='approach-con'>
                                        <p className='smol-title'>Con</p>
                                        <p>Not guaranteed access on hardware</p>
                                        <p>Supporting different platforms must be done manually</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex-approachwrapper'>
                            <p className='middle-title'>Native App</p>           
                            <div className='approach'>
                                <p>
                                The application is developed in the preferred language (including APIs). This means that
                                 for every mobile platform there must be a different app.
                                </p>
                                <div className='procon'>
                                    <div className='approach-pro'>
                                        <p className='smol-title'>Pro</p>
                                        <p>Access to all hardware functions</p>
                                        <p>Native look & feel</p>
                                        <p>Fastest solution</p>
                                        <p>Availability in App Store</p>
                                    </div>

                                    <div className='approach-con'>
                                        <p className='smol-title'>Con</p>
                                        <p>Bigger development costs, since at least 2 platforms should be supported.</p>
                                        <p>Different versions complicate the support</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex-approachwrapper'>
                            <p className='middle-title'>Cross-Compile App</p>           
                            <div className='approach'>
                                <p>
                                    One code base should be compiled for the different mobile platforms. This also means that there’s 
                                    not a broad knowledge required of the different platforms.
                                </p>
                                <div className='procon'>
                                    <div className='approach-pro'>
                                        <p className='smol-title'>Pro</p>
                                        <p>One code basis </p>
                                        <p>Smaller development expenses</p>
                                        <p>Looks and feels native</p>
                                    </div>

                                    <div className='approach-con'>
                                        <p className='smol-title'>Con</p>
                                        <p>Is limited to the functions that works on all platforms. Or it must be implemented for each platform.</p>
                                        <p>Native features are not fully supported</p>
                                        <p>Very hard to debug</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 

                    <div className='cs-normal-wrapper'>
                        <h2>Jetpack Compose</h2>

                        <p>
                            This exercise is about jetpack compose, a toolkit from google to design and create User Interfaces very easily. 
                            The reactive programming model is fully declarative. This means the UI
                             is created by a series of calls and function that form a UI out of data.
                            The application consists of multiple composable functions.
                            A Composable function is like a normal function. Except it get 
                            annotated with @Composable. That’s how one function can call 
                            multiple @Composable functions &rarr; Can generate UI components through 
                            input.
                        </p>

                        <CitationNumber number={3} />

                        <h3>State hoisting</h3>
                        <p>
                            States can be used by different component. They must be kept 
                            “alive” in a shared environment. This process is called 
                            state hoisting. Making a state hoistable 
                            prevents duplications and bugs.                        
                        </p>
                        <h3>Source of truth</h3>
                        <p>
                            The source of truth is owned by the component, that controls the state.
                        </p>

                        <h3>Here are some screenshots and a GitHub link of the Jetpack Compose Exercise</h3>
                        <a href='https://github.com/Luix-dev/MobDevJetpackCompose' 
                            title='Jetpack Compose Exercise'
                            target="_blank">
                                Jetpack Compose Exercise
                        </a>
                    </div>

                    <div className='img-inside1'>
                            <img src={click1} />
                            <img src={click2} />
                    </div>

                    <h2>Serious Games</h2>

                    <div className='cs-tworows'>
                        <div className='cs-left-row-2'>
                            <p>
                                Learning while playing can be a huge part of serious games. There are a few different 
                                skillsets that can be acquired through or with gaming. These might be problem solving, 
                                creativity, reflexes, motor skills, social awareness etc. This is reflected in 
                                something that Raph Koster said in his book Theory of Fun for Game Design: 
                                “Fun is just another word for learning”.
                            </p>
                        </div>

                        <div className='cs-right-row-2'>
                            <h3>What are serious games?</h3> 
                            <p>
                                “games that do not have entertainment, enjoyment, or fun as their primary purpose”
                                
                            </p>
                            <CitationNumber number={4} />
                        </div>
                    </div>

                    <div className='cs-tworows'>
                        <div className='cs-left-row-2'>
                            <p>
                            That is not necessarily true. A serious game can be very entertaining. 
                            If we take the quote from Raph Koster it is in direct conflict with that quote above. 
                            It is all about the purpose of the game. On the right you'll find a short list of a few purposes.
                            </p>
                        </div>

                        <div className='cs-right-row-2'>
                            <p>
                                <p>This is just a shortened list of serious games possibilities that I have come in touch with: </p>
                                <li>Knowledge</li>
                                <li>Attitude</li>
                                <li>Theory Testing</li>
                                <li>Cognitive Skills</li>
                                <li>Assessment</li>
                                <li>Perceptual Skills</li>
                                <li>Exploration</li>
                            </p>
                        </div>                       
                    </div>
                    
                    <div className='cs-normal-wrapper'>
                        <p>
                            So how does a serious game train a player or improve an existing skillset? 
                            A game can help you applying what is learned. Cognitive skills can be learned by 
                            exercises like reasoning, memorization, planning or interpretation. Perceptual 
                            skills can play with stimuli like sight, hearing, touch, smell or taste.
                        </p>
                    </div>

                    <h3>Gamification</h3>
                    
                    <div className='cs-normal-wrapper'>
                        <p>
                            Gamification can be a tool that engages users for different reasons. 
                            The goal is not to throw away the old design and create a game. 
                            Instead you can inject fun elements into the system that create more 
                            relevance or even intimacy for the user. It might be very hard to 
                            find the right balance between fun and the subject. That’s why the 
                            rewards or game aspects must precisely be tailored for the user. 
                            The following points are in my opinion very important for gamification: <br />
                            Autonomy &rarr; The user’s interaction can’t be forced. It must be voluntary and not forced<br />
                            Relatedness &rarr; Customized design that applies to the users enforce loyalty<br />
                            Competence &rarr; Let the user discover the design. Overwhelming a user with a lot of text can make them shut off. Use Icons!<br />
                        </p>

                        <CitationNumber number={5} />
                    </div>

                    <h3> Motivation </h3>
                    <div className='cs-normal-wrapper'>
                        <p>
                            <ownthing className='bold-text'>Intrinsic motivation</ownthing> that you do 
                            something without the expectation of an external reward. 
                            You do it because you want it or because its enjoyable and interesting to you. 
                            Performing an activity just for the sake of performing it can be its own reward.
                        </p>
                        <p>
                            External factors power the <ownthing className='bold-text'>extrinsic motivation</ownthing>, 
                            whether its rewards or punishment. 
                            The engagement comes not from enjoyment or satisfaction, its fuelled by the 
                            returned value or avoided punishment.
                        </p> 
                        <CitationNumber number={6} />
                    </div>


                    <div className='cs-normal-wrapper'>
                        <Masterthesis text={text}/>
                    </div>



                    <div className='sources'>
                       <h3>Sources</h3>


                       
                       <div className='cs-tworows'>
                            <div className='cs-left-row-source'> 
                                <CitationNumber number={1} /> 
                            </div>

                            <div className='cs-right-row-source'>
                                <p>
                                    Senses.pdf. (o. J.). Abgerufen 15. Januar 2022, von https://resources.saylor.org/wwwresources/archived/site/wp-content/uploads/2011/01/Senses.pdf
                                </p>
                            </div>
                        </div>

                        
                        <div className='cs-tworows'>
                            <div className='cs-left-row-source'> 
                                <CitationNumber number={2} /> 
                            </div>

                            <div className='cs-right-row-source'>
                                <p>
                                    Virtual Reality in the Healthcare Industry. (o. J.). VISUALISE. Abgerufen 16. Januar 2022, von https://visualise.com/virtual-reality/virtual-reality-healthcare<br/>
                                    Virtual Reality (VR) in Medicine: Top 10 Use Cases. (o. J.). Abgerufen 16. Januar 2022, von https://light-it.net/blog/virtual-reality-in-medicine/
                                </p>
                            </div>
                        </div>


                        <div className='cs-tworows'>
                            <div className='cs-left-row-source'> 
                                <CitationNumber number={3} /> 
                            </div>

                            <div className='cs-right-row-source'>
                                <p>
                                    Jetpack Compose basics. (o. J.). Android Developers. Abgerufen 10. Januar 2022, von https://developer.android.com/codelabs/jetpack-compose-basics
                                </p>
                            </div>
                        </div>

                        <div className='cs-tworows'>
                            <div className='cs-left-row-source'> 
                                <CitationNumber number={4} /> 
                            </div>

                            <div className='cs-right-row-source'>
                                <p>
                                    Michael, D.R., Chen, S.L., 2005. Serious Games: Games That Educate, Train, and Inform. Muska& Lipman/Premier-Trade.
                                </p>
                            </div>
                        </div>

                        <div className='cs-tworows'>
                            <div className='cs-left-row-source'> 
                                <CitationNumber number={5} /> 
                            </div>

                            <div className='cs-right-row-source'>
                                <p>
                                    What is Gamification? (o. J.). The Interaction Design Foundation. Abgerufen 16. Januar 2022, von https://www.interaction-design.org/literature/topics/gamification
                                </p>
                            </div>
                        </div>


                        <div className='cs-tworows'>
                            <div className='cs-left-row-source'> 
                                <CitationNumber number={6} /> 
                            </div>

                            <div className='cs-right-row-source'>
                                <p>
                                    Extrinsic & Intrinsic Motivation Examples - What’s the Difference? • SpriggHR. (2020, Februar 2). SpriggHR. https://sprigghr.com/blog/hr-professionals/extrinsic-intrinsic-motivation-examples-whats-the-difference/
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ComputerScience;
