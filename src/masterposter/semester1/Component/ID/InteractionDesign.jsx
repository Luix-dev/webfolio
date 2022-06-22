import React from 'react';
import './InteractionDesign.scss';
import ParticlesBg from 'particles-bg';
import threes from './3s.png';
import cognitive from './cognitive.PNG';
import CitationNumber from '../Citation/CitationNumber';
import grotesque from './grotesque.jpg';
import geometric from './geometric.jpg';
import humanist from './humanist.jpg';
import Masterthesis from '../masterthesis/Masterthesis';



const InteractionDesign = () => {

    const text = " I see the different methods and especially their potential when used together. In the beginning, " +
                "once again, I feel like empathy is a keyword. Knowing users is the essence of most processes shown." + 
                "Typography also does not only mean font styles. It includes weights, spacing animations, and combinations of said categories. " +
                "It will help me to better structure texts and create an interface that shows the most important aspects of a topic hassle-free." +
                "And another takeaway of this topic is: Never design without a scale"

    return (
        <div>
            <ParticlesBg color="#800080" type="cobweb" bg={true} />           
            <div className='poster-home__title'>
                Interaction Design
            </div>  
                            
            <div className='id-wrapper'>
                <div className='id-twocolumn'>
                    <div className='left'>
                        <h2>Design Methods</h2>

                        <p>
                            Design methods focus on the solution space of the double diamond. 
                            To arrive at this part you need to have a broad knowledge of the following topics:
                        </p>
                        <p>
                            <li>Research findings - Market research, personas stakeholders, etc.</li>
                            <li>Non-functional requirements - Visuals, Usability, Accessibility, etc.</li>
                            <li>Functional requirements - Technical requirements</li>
                        </p>

                        Design methods mostly focus on the last 3S from Jesse James Garrets 5S Model.
                        <li>
                            Surface &rarr; Market research & Moodboard
                        </li>

                        <li>
                            Skeleton &rarr; Design Studio & Crazy 8s
                        </li>

                        <li>
                        Structure &rarr; User journey & Sketching & Storyboard
                        </li>
                    </div>
                    <div className="right">
                        <img src={threes} />
                        <p className='link-text'>https://www.seerinteractive.com/wp-content/uploads/2014/01/elements_simpleplanes.jpg</p>
                    </div>                  
                </div> 

                <div className='id-twocolumn'>
                    <div className='left'>
                        <h3>
                            User journey
                        </h3>
                        <p>
                            User journey mapping helps to understand a user's needs and actions using the product. 
                            Yet, this method won't be as useful, if there's a broad customer base whose journey differs a lot.
                        </p>
                        <p className='bold-text'>
                            Best practises
                        </p>
                        <li>joint collaboration &rarr; with the client</li>
                        <li>relevant steps &rarr; drill down</li>
                        <li>work out the steps before the workshop &rarr; preparation</li>
                        <li>prominent post-its as steps, smaller for the rest</li>
                        <li>Color code the sections</li>
                        <li>Don't color people &rarr; bias</li>
                        
                        <h3>Crazy 8s</h3>
                        <p>
                            The Crazy 8s from Jake Knapp describe the process that focuses on the creative potential of each person individually. 
                            The whole process is a quick playthrough of a whole ideation process. Working alone and pitching the idea afterwards, 
                            if you have someone to pitch to, can unearth flaws or show complicated processes with the potential to be improved. 
                        </p>
                        <CitationNumber number={1} />
                        
                    </div>
                    <div className="right">
                        <h3>Using design methods</h3>
                        <p>
                            The presented design methods build a toolkit for different digital challenges. 
                            In my opinion, it's hard to define which one is needed or which one is unnecessary 
                            for a certain project. The requirements vary for each customer, project, and method.
                        </p>
                        <h3>Wireframing</h3>
                        <p>
                            Since we've got most of the information that we need about the user, 
                            we can now start to ensure the usability, that is perfectly fitted to 
                            the customer's needs. Wireframing is very broad and not detailed. 
                            The context and the connection between contexts and structure is in the foreground. 
                            That's why everything should be titled or texts with arrows that explain 
                            what's the intend with the current thumbnail.
                        </p>
                        <h3>Market Research</h3>
                        <p>
                            Market research is the second iteration of analyzing the market, I'd prefer to do it before I put a lot of time into a project. 
                            This research should focus on branding and the corresponding visual elements. It's pretty straightforward, yet very important.
                        </p>
                    </div>                  
                </div> 

                <div className='id-normal'>
                    <h2>Emotional Design</h2>
                    <p>
                        Bringing personality into design involves emotions. By trying to keep it as simple, colorless, 
                        and boring as possible a designer still conveys some sort of emotion. 
                        So if we can't stop the interpersonal transmission of feelings, 
                        we should try to use this inevitable fact for great design.
                    </p>
                    <p>
                        Connecting with an interface or system on an emotional level brings multiple 
                        benefits for the user and the designer. As a user I'm more...
                    </p>
                    <li>Involved and interested in continuous development</li>
                    <li>Attached and faithful</li>
                    <li>willing to share my thoughts and opinions on the subject</li>

                    <p>
                        As the designer I have...
                    </p>
                    <li>
                        A long-lasting customer base
                    </li>
                    <li>
                        Test subjects who willingly test new features
                    </li>
                    <li>
                        A strong bond and useful input from the customers
                    </li>
                </div>
                <div className='id-twocolumn'>
                    <div className='left'>
                        <h3>Colors and emotions</h3>
                        <p>
                            Conveying information especially emotions through color makes design emotional. 
                            Most brands have a specific branding which strongly associates with colors. 
                            Economical friendly companies use green. Some even have it in their name &rarr; Greenpeace. 
                            But the specific meaning of the color doesn't define the design color plate. It is advised to 
                            consider cultures as well as fields of service when choosing the colors.
                        </p>
                        <CitationNumber number={2} />
                        

                        <h3>Images</h3>
                        <p>
                        Don't use placeholder images! Even for a prototype. To give a feeling of what the subject
                         is about and to get as close as possible to the finished 
                         product I have to try to use different and fitting images for the content.
                        </p>

                        <h3>Animations</h3>
                        <p>
                            Animations are a way to explain something without text. It is possible to create a 
                            call to action with a softly moving button. These animations give the interface 
                            live and create some sort of character for the application.
                        </p>

                        <h2>Typography</h2>
                        <p>
                            Typography helps a user to skim a text and take information out of it, 
                            without reading full sentences. There are multiple ways to style text: <br/>
                            Contrast &rarr; Typeface weights or typeface sizes <br/>
                            Line-height & Letter spacing &rarr; create a rhythm<br/>
                            Combine typefaces &rarr; Gives structure<br/>
                            Animation and typography &rarr; Sets a focus<br/>
                        </p>

                        <h3>What typeface should I use?</h3>
                        <p>
                            There are a lot of factors coming into this. The following list 
                            consists of points that I have to consider when choosing a typeface: <br />
                            <li>Goals of the content &rarr; Body text, heading, subtext, hints, etc. </li>
                            <li>Type color &rarr; What's the color theme of the design and how dark or light can the typeface be?</li>
                            <li>Serif or sans-serif &rarr; Grotesque, Geometric, and Humanistic styles all fit into my schema.</li>
                        </p>

                        <h3>Functionality vs beauty</h3>
                        <p>
                            The original title was functionality <bold className='bold-text'>and</bold> beauty. Since I'm coming 
                            from a technical computer science background 
                            I often think these topics stand in a hard contrast. 
                            <br/>
                            I want to have good readability, usability, and an innovative approach that is nice to look at. 
                            Beauty is in the eyes of the beholder, but it's more important to me, that the user can read it without 
                            any hassle than having a stunning self-made font.
                        </p>

                        <h3>Technical products and typefaces</h3>
                        <p>
                            In my experience, most technical articles, software, and enterprises use a very structured, 
                            geometrical, and easy-to-read typeface. This might be because of the target group or 
                            because the function is more important than the form. Usability definitely has more weight 
                            in the current computer science scene. <br/>
                            I think that accessibility plays a huge part in this topic. Creating content that is 
                            not only easy to understand but translatable into different languages and signs restricts 
                            the choice of typefaces.
                        </p>

                        <CitationNumber number={3} />
                        
                    </div>

                    <div className='right-2'>
                        <h3>3 cognitive levels</h3>
                        <img className='cognitive' src={cognitive} />
                        <p className='link-text'>https://www.interaction-design.org/literature/article/norman-s-three-levels-of-design</p>
                        
                        <h3>Western color perception</h3>
                        <div className='red-box'>
                            <p>passionate, strong</p>
                            <p>aggressive</p>
                        </div>

                        <div className='green-box'>
                            <p>calming, renewing</p>
                            <p>inexperience</p>
                        </div>

                        <div className='blue-box'>
                            <p>calm, cool</p>
                            <p>distance, sadness</p>
                        </div>
                        <div className='yellow-box'>
                            <p>joy, warmth</p>
                            <p>happiness</p>
                        </div>
                        <div className='purple-box'>
                            <p>royal, wealth</p>
                            <p>mystery, magic</p>
                        </div>
                        <p></p>

                        <CitationNumber number={4} />

                        <div className='font-image'>
                            <h3>Grotesque</h3>
                            <img src={grotesque} />
                            <p className='link-text'>https://www.smashingmagazine.com/2013/06/making-sense-of-type-classification-part-2/</p>
                        </div>

                        <div className='font-image'>
                            <h3>Geometric</h3>
                            <img src={geometric} />
                            <p className='link-text'>https://www.smashingmagazine.com/2013/06/making-sense-of-type-classification-part-2/</p>
                        </div>

                        <div className='font-image'>
                            <h3>Humanistic</h3>
                            <img src={humanist} />
                            <p className='link-text'>https://www.smashingmagazine.com/2013/06/making-sense-of-type-classification-part-2/</p>
                        </div>
                    </div>
                </div>

                <div className='id-normal-2'>
                    <h2>Styles for this page</h2>
                    <p>font-family: Ubuntu, sans-serif</p>
                    <h1>H1 Title &rarr; Size: 40px, Weight: 500</h1>
                    <h2>H2 Title &rarr; Size: 35px, Weight: 400</h2>
                    <h3>H3 Title &rarr; Size: 25px, Weight: 400</h3>
                    <p className='bold-text'>This is bold text &rarr; Size: 20px, Weight: 400</p>
                    <p>This is normal text &rarr; Size: 20px, Weight: 200</p>                 
                    <p className='link-text'>This is link text &rarr; Size: 10px</p>
                </div>

                <div className='id-normal-3'>
                    <div className='colorbox' style={{backgroundColor: "#bdb2ff"}}>
                        Header Color
                    </div>

                    <div className='colorbox' style={{backgroundColor: "#FF013C"}}>
                        Button Maincolor
                    </div>

                    <div className='colorbox' style={{backgroundColor: "#00E6F6"}}>
                        Button Sidecolor
                    </div>

                    <div className='colorbox' style={{backgroundColor: "#caffbf"}}>
                        Pro
                    </div>

                    <div className='colorbox' style={{backgroundColor: "#ffadad"}}>
                        Con
                    </div>

                    
                    <div className='colorbox' style={{backgroundColor: "rgba(3, 102, 214, 0.3)"}}>
                        Citation Border
                    </div>

                    
                    <div className='colorbox' style={{backgroundColor: "#dac3e8"}}>
                        Thesis Box
                    </div>

                    
                    <div className='colorbox' style={{backgroundColor: "rgb(58, 6, 65)", color: "White"}}>
                        Scrollbar Track
                    </div>

                    <div className='colorbox' style={{backgroundColor: "rgb(157, 49, 172)", color: "White"}}>
                        Scrollbar Thumb
                    </div>

                    
                    <div className='colorbox' style={{backgroundColor: "rgb(156, 156, 156)"}}>
                        Link Text
                    </div>

                </div>

                <div className='id-normal'>
                    <Masterthesis text={text}/>    
                </div>



                <div className='sources'>
                    <h3>Sources</h3>

                    <div className='ux-2colums__wrapper'>
                        <div className='ux-wrapper-left-source'> 
                            <CitationNumber number={1} /> 
                        </div>

                        <div className='ux-wrapper-right-source'>
                            <p>
                                Share and engage with the Design Sprint Community. (o. J.). Abgerufen 25. Januar 2022, von https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s
                            </p>
                        </div>
                    </div>

                    <div className='ux-2colums__wrapper'>
                        <div className='ux-wrapper-left-source'> 
                            <CitationNumber number={2} /> 
                        </div>

                        <div className='ux-wrapper-right-source'>
                            <p>
                            Komninos, A. (o. J.). Norman’s Three Levels of Design. The Interaction Design Foundation. Abgerufen 25. Januar 2022, von https://www.interaction-design.org/literature/article/norman-s-three-levels-of-design
                            </p>
                        </div>
                    </div>

                    <div className='ux-2colums__wrapper'>
                        <div className='ux-wrapper-left-source'> 
                            <CitationNumber number={3} /> 
                        </div>

                        <div className='ux-wrapper-right-source'>
                            <p>
                                Better Web Typography for a Better Web, 2019 Matej Latin
                            </p>
                        </div>
                    </div>

                    <div className='ux-2colums__wrapper'>
                        <div className='ux-wrapper-left-source'> 
                            <CitationNumber number={4} /> 
                        </div>

                        <div className='ux-wrapper-right-source'>
                            <p>
                                Design for Diversity of Cultures: Perception of Colors. (2017, März 15). Design4Users. https://design4users.com/design-for-diversity-of-cultures-perception-of-colors/
                            </p>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    );
};

export default InteractionDesign;
