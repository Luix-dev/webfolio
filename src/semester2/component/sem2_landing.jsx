import React from 'react'
import SideBar from "./sidebar";

function sem2_landing() {
  return (
    <div>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div className="page-wrap" id="page-wrap">
        <div className="sem2__title">
            <h1>Semester 2 - Master of Arts in Design Major Digital Ideation</h1>
            <h3 className='landing-title'>
                Interaction design, computer science and user experience are 
                important topics because they help us understand how 
                people interact with technology, how technology 
                works and how to design user-friendly experiences. 
                By understanding these topics, I can design better 
                products and services that are more user-friendly and efficient.
            </h3>
            <h3 className='landing-title'>
                Browse through the discoveries I made during this semester, 
                spring 2022.
            </h3>
        </div>
        </div>
    </div>
  )
}

export default sem2_landing