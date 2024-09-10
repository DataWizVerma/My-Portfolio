import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            {/* I am a self-taught developer. I learn by doing things. As a
            Front-End Developer, I translate UI/UX designs into successful,
            responsive websites that are fast, easy to use, and built with best
            practices. The main area of my expertise is front-end development.
            Next.js, React.js, TypeScript, and Tailwind CSS are my main stack.
            Most of my skills are heavily focused on different front-end
            technologies */}
            {/* Hello! My name is Erys and I am a front end developer with a passion
            for creating visually stunning and intuitive websites. With a strong
            foundation in HTML, CSS, and JavaScript, I am able to bring designs
            to life and create user experiences that are both functional and
            enjoyable. In my previous roles, I have worked on a variety of
            projects ranging from small business websites to large e-commerce
            platforms. I have a keen eye for detail and am always seeking ways
            to improve the performance and functionality of a website. Outside
            of work, I enjoy staying up-to-date on the latest web development
            trends and techniques through online learning and attending industry
            events. I am always looking for new challenges and opportunities to
            expand my skillset. Thank you for considering me for your project. I
            am excited to bring my skills and expertise to your team and create
            something truly unique and impactful. */}
            <p>I'm <strong>Kumar Verma 👋</strong>,currently preparing for a career as a Data Analyst. I have completed my Bachelor's degree in  Data Science and Artificial Intelligence from <strong>Babu Banarasi Das University, Lucknow</strong>. My passion lies in turning data into insights using tools like <strong>Power BI, Excel, and Python</strong>. I specialize in data visualization and analytics, helping businesses make smarter decisions.</p>
        
        <p>Born and raised in the vibrant city of <strong>Lucknow</strong>, a place known for its rich history, culture, and warmth. The <strong>“City of Nawabs”</strong> has taught me the value of tradition, resilience, and innovation. When I’m not exploring data,I enjoy my hobbies of photography 📸, video editing 🎥, and I enjoy exploring new and interesting things on the internet 🌐, such as discovering fascinating websites 🌟..</p>
        
        <p>Driven by curiosity and a desire for continuous learning, I’m always seeking new challenges and opportunities to collaborate and grow in the data field.</p>
          </p>

          
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
