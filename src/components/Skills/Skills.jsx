import React from "react";
import MultiDevice from "../../assets/images/multi-device.svg";
import skills from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section
      className="app__skills"
      id="skills"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>
        {/* <p className="app__skills-title_content">
          I translate UI/UX design into successful responsive websites that are
          fast, easy to use, and built with best practices. The main area of my
          expertise is front-end development, HTML, CSS, JS, & React. As an
          aspirant frontend developer most of my skills are heavily focused on
          different frontend technologies.
        </p> */}

        {/* <p className="app__skills-title_content">
          Despite knowing these frontend technologies I also have experience in
          server side languanges such as PHP and MYSQL and basic knowledge in
          Python and Java.
        </p> */}

        <p className="app__skills-title_content">
        <p>At the moment, I’m focusing on mastering best practices in data analysis and visualization, utilizing tools such as Power BI, Excel, and Python.</p>
    
    <p>Soon, I plan to deepen my knowledge in advanced analytics and machine learning to enhance my capabilities as a Data Analyst.</p>
    
    <p>These are the <strong>Tech Stack Tools</strong> I use for analyzing, visualizing, and interpreting data to drive actionable insights:</p>
    
    <ul>
        <li>🔍 <strong>Data Analysis:</strong> SQL, Excel, Data Cleaning, Statistical Analysis</li>
        <li>📊 <strong>Data Visualization:</strong> Power BI, Tableau</li>
        <li>💻 <strong>Programming Languages:</strong> Python (NumPy, Pandas, Matplotlib, Seaborn)</li>
        <li>🤖 <strong>Advanced Tools:</strong> Machine Learning Models, Advanced Excel</li>
    </ul>
        </p>
      </div>

      <div className="app__skills-container">
        <div
          className="app__skills-container_skills"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="app__skills-container_image multidevice">
        <img src={MultiDevice} alt="MultiDevice" />
      </div>
    </section>
  );
};

export default Skills;
