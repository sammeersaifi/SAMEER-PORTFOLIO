import React from "react";
import myimg from "../img/sameer-image.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSpring, animated } from "react-spring";
import resume from '../img/sameer-resume.pdf'
function About() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 60 },
  }));

  

  const skills = [
    {name:"AutoCAD",val:"90"},
    {name:"Sketchup",val:"80"},
    {name:"3ds Max",val:"92"},
    {name:"Illustrator",val:"85"},
    {name:"Photoshop",val:"90"},
    {name:"Coral Draw",val:"80"},
    {name:"Indesign",val:"80"},
    {name:"Lumion",val:"70"},
    {name:"After Effect",val:"70"},
    {name:"Premiere Pro",val:"80"}
  ]

  return (
   
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <animated.div
            className="col-lg-4"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
          >
            <img src={myimg} className="img-fluid borderNew" alt="not found" />
          </animated.div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Interior Designer</h3>
            <p className="fst-italic">
        
            Hello there!I am Sameer Saifi  I'm thrilled to introduce myself as an enthusiastic and aspiring interior designer, currently embarking on an exciting journey as an intern in the world of design. With a keen eye for aesthetics and a passion for transforming spaces, I am dedicated to honing my skills and learning from industry professionals to create captivating and functional environments.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <h5 style={{ color: "#728394" }}>Contact Contact Details</h5>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <a
                      href="mailto:nazim.saifi1908@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      sameersaifi13021@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://heysameer.netlify.app"
                      style={{ textDecoration: "none" }}
                    >
                      https://heysameer.netlify.app
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+917880811002"
                      style={{ textDecoration: "none" }}
                    >
                      +91 9642420958
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Noida</span>
                  </li>
                </ul>
                
              </div>
              <div className="col-lg-6 d-flex  align-items-center">
                <a href={resume} className="button-58" download>
                  <span className="text">
                    <i className="fa-solid fa-download"></i> Download Resume
                  </span>
                </a>
              </div>
              
            </div>
          </div>

         
        </div>
        <div id="skills" className="skills section-bg my-5 mt-5">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>I love working on new and exciting technologies emerging nowadays.I have good command  in 3ds Max, Sketchup, AutoCAD, Photoshop</p>
        </div>
        <div className="row skills-content">
          {skills.map((item)=>{
            return <div className="col-lg-6"key={item.name}>
             <div className="progress" >
              <span className="skill">{item.name} <i className="val">{item.val}%</i></span>
              <div className="progress-bar-wrap" style={{borderRadius:"5px"}}>
              <ProgressBar completed={item.val} height="10px" isLabelVisible={false} transitionDuration="3s" animateOnRender={true} />
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
      </div>
      
    
    </section>
   
  );
}

export default About;
