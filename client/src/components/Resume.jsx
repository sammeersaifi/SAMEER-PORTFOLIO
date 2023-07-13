import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Sameer Saifi</h4>
              <p><em>Interior Designer</em></p>
              <ul>
                <li>Noida</li>
                <li><a href="tel:+917880811002" style={{ textDecoration: "none",color:"inherit" }}>+91 9643420958</a></li>
                <li><a href="mailto:heyshivanshu01@gmail.com" style={{ textDecoration: "none",color:"inherit" }}>sameersaifi13021@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {/* <div className="resume-item">
              <h4> Masters in Computer Application(MCA)</h4>
              <h5>2023 - 2025</h5>
              <p><em>Indira Gandhi National Open University</em></p>
              <p>I completed my MCA from IGNOU college in 2025, Here I learned  About BlockChain, How Smart contracts work and the Deep knowledge of WEB3 And many thing that help me in present</p>
            </div> */}
            <div className="resume-item">
              <h4>Bachelors Of Science Interior Designing</h4>
              <h5>2021 - 2024</h5>
              <p><em>AAFT</em></p>
              <p>I an Pursuing my Interior Designing course  from AAFT college in 2021, Here I learned  About Designing and many thing that help me in present.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Experience</h3>
            {/* <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>Mer 2023 - Present</h5>
              <p><em>Akonto Payment Solution pvt ltd. </em></p>
              <ul>
                <li>My role is FullStack Developer and My responsibilities are to maintain and Develop Frontend and backend both... The complete UI is based on React and Backend on Nodejs, ExpressJs and MySql.</li>
                
              </ul>
            </div> */}
            <div className="resume-item">
              <h4>Works</h4>
              {/* <h5>DEC 2022 - MAY 2023</h5> */}
              {/* <p><em>IT Breakcom Pvt.Ltd</em></p> */}
              <p>Design many things like</p>
              <ul>
                <li>Gym</li>
                <li>Caffeteria</li>
                <li>Restaurent</li>
                <li>Bars</li>
              </ul>
            </div>
         
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume