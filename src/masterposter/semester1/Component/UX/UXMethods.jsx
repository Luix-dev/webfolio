import React from 'react';
import './UXMethods.scss';
import uxlandscape from './ux-landscape-questions.png';
import CitationNumber from '../Citation/CitationNumber';


const UXMethods = () => {
  return (
    <div className='methods-wrapper'>

        <h2>UX Research Methods</h2>

        <p>
        Modern methods, especially in project management concerning IT projects, 
        are handled iterative and recursive. There are also different project 
        management methods which generally follow a waterfall principle. 
        Since those do not concern me and my work I'll focus on the iterative methods.
        </p>

        <p>
          The following points should be considered when choosing a User Experience Method:
          <li>
            Attitudinal vs. Behavioural
          </li>
          <li>
            Qualitative vs. Quantitative
          </li>
          <li>
            Context of Use
          </li>

          <h2>Attitudinal vs. Behavioural</h2>
          <p>
            The attitude is what people say or think. That includes their first impulses and knowledge 
            about a certain system/topic. The behaviour of users is concerned with what people actually do. 
            can be quite different from their attitude. Card sorting is an excellent method to gain new 
            insights for these topics. It mirrors the mental model and the behaviour of the participant. 
            A/B Testing (2 or more different prototypes in comparison) also helps understand the user’s behaviour. 
            The user must explain in his own words (attitudinal) why he prefers a certain type of prototype. 
            At the same time, he must prove (behavioural) why that prototype works better.
          </p>
          <br />
          <h2>Qualitative vs. Quantitative Research</h2>
          <p>
            Qualitative research is defined by generating data about behaviour directly from the user. 
            The information is directly collected by tests or similar means. 
            Quantitative data is gathered indirectly through analytical tools like surveys or studies. 
            This research method mostly leads to mathematical analysis of the results. 
            Qualitative data will mostly reflect the user’s behaviour.
            <br />
            Qualitative methods answer why and how to fix a problem.
            <br />
            Quantitative methods answer how many or how much problems/question exist.
          </p>

          <img src={uxlandscape} alt="Shows the landscape of questions" />
          <p className='link-text'>https://s3.amazonaws.com/media.nngroup.com/media/editor/2014/10/10/ux-landscape-questions.png</p>


          <h2>The context of product use</h2>
          <p>
            This category describes whether the participants use the product or system in question. 
            It is divided into the following subjects:
            <li>
              Natural / near-natural use of the product
            </li>
            <li>
              Scripted use
            </li>
            <li>
              Not using the product
            </li>
            <li>
              Hybrid of the above
            </li>
          </p>

          <h3>
            Natural / near-natural use of the product
          </h3>

          <p>
            The interference during the study should be minimized. This helps to understand the 
            behaviour or attitude of the participant and creates qualitative data.
          </p>

          <h3>Scripted use</h3>
          <p>
            Having a structured example which the participants need to follow 
            helps to create a focus on specific element or part of the system. 
            Scripted tests create more quantitative data.
          </p>

          <h3>Not using the product</h3>
          <p>
            This kind of studies focus on broader issues than usage or usability, mostly brand-concerns
            will be addressed. This makes this category uninteresting for me.
          </p>

          <h3>Hybrid</h3>
          <p>
            Combining different categories from above can create a mix of quantitative and qualitative data. 
            In addition to the focused testing, users can create or add 
            their own thoughts which enables participatory design.
          </p>


        </p>
    </div>
  );
};

export default UXMethods;
