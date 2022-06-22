import React, { useEffect } from 'react'
import Sidebar from '../sidebar'
import uxvscx from "./uxvscx.png";
import './Sem2_ux.scss';
import honeycomb from './honeycomb.jpg';
import emotion from './emotion.png';
import selfie from './selfie.png';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import AOS from "aos";
import "aos/dist/aos.css";

function Sem2_ux() {

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
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className='id_app'>
          <div className="id_page-wrap">
            <h1>User Experience</h1>
            This lecture started with the question <i>What's the difference between UX and CX?</i>
            <br />
            After a lot of reading I consolidated these two definitions and explanations:
            <div className='smalltext-wrapper' data-aos="fade-up" data-aos-duration="1000">
              <div className='flex-column'>
                <p className='normal-text'>
                The term UX is short for User Experience. It refers to a person's feelings 
                and attitudes about using a particular product, system or service. 
                User experience includes the user's perceptions of efficiency, security 
                and usability, as well as their emotional response to the product. 
                In other words, <b>UX is about how easy and enjoyable a product is to use. </b>
                </p>
                <p className='citation'>
                  User Experience (UX) vs. Customer Experience (CX): What’s the Dif? (2014, Juli 7). Digital.Gov. https://digital.gov/2014/07/07/user-experience-ux-vs-customer-experience-cx-whats-the-dif/
                </p>
              </div>
              <div className='flex-column'>
                <p className='normal-text'>
                The term CX is short for Customer Experience. It refers to a person's feelings and attitudes 
                about interacting with a particular company, brand or service. Customer 
                experience includes the customer's perceptions of efficiency, security 
                and usability, as well as their emotional response to the company. 
                In other words, <b>CX is about how easy and enjoyable it is to do business 
                with a particular company. </b>
                </p>
              </div>
              <div className='flex-column'>
                <p className='normal-text'>
                  Both UX and CX take into account the user's needs and wants when designing a 
                  product. However, UX focuses more on the technical aspects of the product, 
                  such as how easy it is to use, while CX focuses more on the emotional aspects 
                  of the product, such as how satisfied the user is with the product. 
                  One example of this difference is in the way that designers approach user 
                  testing. For a UX designer, user testing is a way to gather data about how 
                  users interact with the product so that they can make changes to improve the 
                  user experience. For a CX designer, user testing is a way to gather data 
                  about how users feel about the product so that they can make changes to 
                  improve the customer experience. 
                </p>
                <p className='citation'>Experience, W. L. in R.-B. U. (o. J.). User Experience vs. Customer Experience: What’s the difference? Nielsen Norman Group. Abgerufen 19. Juni 2022, von https://www.nngroup.com/articles/ux-vs-cx/</p>
              </div>

              <div className='flex-column'>
                <img src={uxvscx} />
                <p className='citation'>https://www.usertesting.com/sites/default/files/inline-images/blog%20-%20UX%20vs%20CX%20definition%20image.png</p>
              </div>
            </div>
            
            <div className='middle-div' data-aos="fade-up" data-aos-duration="1000">
              <h2>UX and CX Methods</h2>
              <p className='middle-text'>
                To further understand the similarities between customer experience and user experience, 
                it is helpful to compare the different methods and approaches used in each. 
                Both CX and UX professionals use a variety of techniques to assess and 
                improve the experiences of their users or customers.
              </p>
            </div>
            <div className='smalltext-wrapper' data-aos="fade-up" data-aos-duration="1000">
              <div className='flex-column'>
                <h3>CX Methods</h3>
                <ul className='smile'>
                  <li>
                    <p className='normal-text'>
                      <b>Mystery shopping:</b> This method involves hiring a professional shopper to 
                      pose as a customer and assess the quality of customer service. This can 
                      be used to identify specific areas where employees need additional 
                      training. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>Surveys:</b> After a transaction is completed, surveys can be sent out to 
                      customers to gather feedback about their experience. This feedback 
                      can be used to improve the overall customer experience.  
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>Focus groups:</b> This method involves bringing together a group of 
                      customers and strangers to discuss a product or service. The group discussion can 
                      provide insights into how customers perceive the company and its offerings. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>Usability testing:</b> This method assesses how easy it is for 
                      customers to use a company's website or app. This can help identify 
                      areas where customers are having 
                      difficulty and make changes to improve the overall user experience. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>Social media monitoring:</b> This method involves tracking what customers are 
                      saying about a company on social media. This can be used to identify areas where 
                      customers are unhappy and make changes to improve the customer experience
                    </p>
                  </li>
                </ul>
                <p className='citation'>
                  Rogers, M. (o. J.). Top 5 Strategies for Customer Experience Research Success. Abgerufen 19. Juni 2022, von https://www.digsite.com/blog/top-5-strategies-for-cx-research-success
                </p>

                <p className='citation'>
                  Scibor-Rylski, M., Reducha, M., & Ochremiak, J. (2019). Modern research methods in the field of customer experience. https://doi.org/10.33226/1231-7853.2019.10.2
                </p>
              </div>
              <div className='flex-column'>
              <h3>UX Methods</h3>
                <ul className='smile'>
                  <li>
                    <p className='normal-text'>
                      <b>User interviews:</b> This method involves interviewing users about their needs and expectations. This can be used to gather feedback about a company's products or services and make improvements. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>User testing:</b> This method involves having users test a company's products or services. This can be used to identify areas where users are having difficulty and make changes to improve the overall user experience. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>Usability testing:</b> This method assesses how easy it is for users to use a company's website or app. This can help identify areas where customers are having difficulty and make changes to improve the overall user experience. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>A/B testing:</b> This method involves testing two different versions of a product or service to see which one is more effective. This can be used to improve the overall customer experience. 
                    </p>
                  </li>
                  <li>
                    <p className='normal-text'>
                      <b>User research:</b> This method involves research about users' needs and expectations. This can be used to identify areas where customers are unhappy and make changes to improve the customer experience. 
                    </p>
                  </li>
                </ul>
                <p className='citation'>
                  Experience, W. L. in R.-B. U. (o. J.). UX Research Cheat Sheet. Nielsen Norman Group. Abgerufen 10. Juni 2022, von https://www.nngroup.com/articles/ux-research-cheat-sheet/
                </p>
              </div>
            </div>

            <div className='middle-div' data-aos="fade-up" data-aos-duration="1000">
              <h3>What's the difference?</h3>
              <p className='middle-text'>
              CX methods focus on the customer's entire experience with the company, from the initial contact to the post-purchase follow-up. UX methods, on the other hand, focus specifically on the user's experience with the company's products or services. This includes everything from the initial interaction with the product to the post-purchase customer support.
              </p>
            </div>

            <div className='spacer'></div>

            <div className='smalltext-wrapper' data-aos="fade-up" data-aos-duration="1000">
              <div className='flex-column'>
                <h2>What's the wow <p title="spooky ghost, be careful with the mouse">👻</p> effect?</h2>
                <p className='normal-text'>
                  There is no one definitive answer to this question, as the wow <p title="spooky ghost, be careful with the mouse">👻</p> effect 
                  in UX can vary depending on the individual and their unique experiences. 
                  However, some possible explanations for the wow-effect in UX could include
                   a design that is visually appealing and easy to use, or a user interface 
                   that is extremely intuitive and user-friendly. Additionally, the wow <p title="spooky ghost, be careful with the mouse">👻</p> effect 
                   in UX could simply be the result of a great overall user experience 
                   that leaves the individual feeling satisfied and impressed.
                </p>
                <p className='citation'>
                  https://www.nngroup.com/articles/wow-effect/
                </p>
              </div>
              <div className='flex-column'>
                <h2>How can I achieve the wow <p title="spooky ghost, be careful with the mouse">👻</p> effect?</h2>
                <p className='normal-text'>
                  There are a few UX methods that can help create a wow  <p title="spooky ghost, be careful with the mouse">👻</p> effect: 
                  <ul className='scared'>
                    <li>
                      Creating a strong visual design: This means using high-quality visuals, consistent branding, and an overall attractive design. 
                    </li>
                    <li>
                      Focusing on the user experience: This means making sure the user has a positive and seamless experience using your product or service. 
                    </li>
                    <li>
                      Keeping things simple: This means avoiding complexity and clutter and making sure the user can easily find what they need. 
                    </li>
                    <li>
                      Delivering on promises: This means ensuring that your product or service meets or exceeds the user's expectations.
                    </li>
                  </ul>
                  <p className='citation'>
                    https://www.nngroup.com/articles/wow-effect/
                  </p>
                </p>
              </div>
            </div>
            <div className='middle-div' data-aos="fade-up" data-aos-duration="1000">
              <h2></h2>
              <p className='middle-text'>
                The honeycomb model is a framework for thinking about the user experience 
                of digital products and services. Emotional design is the idea that products
                and services can evoke positive or negative emotions in users, and that 
                these emotions can influence their perceptions of the product or service. 
                Self-determination theory is a theory of motivation that focuses on the 
                intrinsic need for autonomy and self-regulation in order to feel motivated.
                <br /> 
                The following chapters will take a closer look at those 3 principles
              </p>
            </div>
            <div className='smalltext-wrapper' data-aos="fade-up" data-aos-duration="1000"> 
              <div className='flex-column'>
                <h3>The honeycomb model</h3>
                <p className='normal-text'>
                  The honeycomb model is a framework for thinking about the user experience of digital 
                  products and services. It was created by Peter Morville, a pioneer 
                  in the field of user experience. The model is based on the idea that 
                  there are seven key factors that contribute to a positive UX: 
                
                <ul className='honey'>
                  <li>
                    <b>Usefulness:</b> The product or service must be useful and relevant to the user's needs.
                  </li>
                  <li>
                    <b>Usability: </b>The product or service must be easy to use. 
                  </li>
                  <li>
                    <b>Desirability: </b>The product or service must be appealing and attractive to the user. 
                  </li>
                  <li>
                    <b>Findability: </b>The product or service must be easy to find and discover. 
                  </li>
                  <li>
                    <b>Accessibility: </b>The product or service must be accessible to all users, regardless of ability or circumstance. 
                  </li>
                  <li>
                    <b>Credibility: </b>The product or service must be credible and trustworthy. 
                  </li>
                  <li>
                    <b>Reflectiveness: </b>The product or service should allow users to reflect on their own experiences and learn from them. 
                  </li>
                </ul>
                </p>
                <p className='citation'>The honeycomb model of user experience, reproduced here with permission... (o. J.). ResearchGate. Abgerufen 11. Juni 2022, von https://www.researchgate.net/figure/The-honeycomb-model-of-user-experience-reproduced-here-with-permission-from-Peter_fig1_23133003</p>
              </div>
              <div className='flex-column'>
                <img src={honeycomb} />
                <p className='citation'>https://www.researchgate.net/profile/Claire-Glenton/publication/23133003/figure/fig1/AS:213980682428422@1428028378509/The-honeycomb-model-of-user-experience-reproduced-here-with-permission-from-Peter.png</p>
              </div>
            </div>
            <div className='smalltext-wrapper' data-aos="fade-up" data-aos-duration="1000"> 
              <div className='flex-column'>
                <h3>Emotional design</h3>
                <p className='normal-text'>
                  Emotional design is the idea that products and services can evoke positive 
                  or negative emotions in users, and that these emotions can influence their 
                  perceptions of, and interactions with, the product or service. 
                  User experience professionals use emotional design to create products 
                  and services that evoke positive emotions in users, which can ultimately 
                  lead to increased loyalty and satisfaction. There are three main components 
                  to emotional design:                 
                <ul className='happy'>
                  <li>
                    <b>Aesthetics:</b> The visual appearance of a product or service. 
                  </li>
                  <li>
                    <b>Haptics: </b>The tactile (physical) properties of a product or service. 
                  </li>
                  <li>
                    <b>Behavioral: </b>The way a product or service behaves, including how it responds to user input.  
                  </li>
                </ul>
                </p>
                <p className='citation'>The honeycomb model of user experience, reproduced here with permission... (o. J.). ResearchGate. Abgerufen 11. Juni 2022, von https://www.researchgate.net/figure/The-honeycomb-model-of-user-experience-reproduced-here-with-permission-from-Peter_fig1_23133003</p>
              </div>
              <div className='flex-column'>
                <img src={emotion} />
                <p className='citation'>https://miro.medium.com/max/1400/1*t8rXTZgARN9tcphOgCx_EA.png</p>
              </div>
            </div>

            <div className='smalltext-wrapper' data-aos="fade-up" data-aos-duration="1000"> 
              <div className='flex-column'>
                <h3>Self-determination theory</h3>
                <p className='normal-text'>
                  Self-determination theory (SDT) is a theory of motivation that focuses on 
                  the intrinsic need for autonomy and self-regulation in order to feel 
                  motivated. SDT was first proposed by Edward Deci and Richard Ryan in 1985, 
                  and has since been used to explain intrinsic motivation, or the motivation
                   that comes from within oneself. According to SDT, there are three basic 
                   psychological needs that must be met in order for someone to feel 
                   intrinsically motivated:               
                <ul className='sparkles'>
                  <li>
                    <b>Competence:</b> The need to feel capable and effective in what one is doing. 
                  </li>
                  <li>
                    <b>Autonomy: </b>The need to feel in control of one's own choices and actions. 
                  </li>
                  <li>
                    <b>Relatedness: </b>The need to feel connected to others. When these needs are not met, people can become demotivated, or even experience negative emotions such as anxiety or frustration. However, when these needs are met, people will experience positive emotions such as satisfaction and pride, which can lead to increased motivation.
                  </li>
                </ul>
                </p>
                <p className='citation'>Deci, E. L., & Ryan, R. M. (1985). Intrinsic motivation and self-determination in human behavior. </p>
                <p className='citation'>New York, NY: Plenum Press. Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68-78.</p>
              </div>
              <div className='flex-column'>
                <img src={selfie} />
                <p className='citation'>https://www.urmc.rochester.edu/community-health/patient-care/self-determination-theory</p>
              </div>
            </div>

            <div className='middle-div' data-aos="fade-up" data-aos-duration="1000">
              <h2>Conclusion</h2>
              <p className='middle-text'>
                The conclusion that I can take out of this is, that emotional design, the honeycomb model 
                and self-determination theory are all important methods for UX designers 
                to consider when creating products and services. Each of these methods 
                offers a different perspective on how to create a positive user experience, 
                and by understanding and utilizing these methods, businesses can create more 
                successful products and services.
                It's entirely depending on the product at hand. I will certainly try to consider 
                these methods if I've got a fitting project available.
              </p>
              <div className='spacer'></div>
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
    </div>
  )
}

export default Sem2_ux;