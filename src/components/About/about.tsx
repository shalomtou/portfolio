// import './about.scss';
// import '../../styles/global.scss';
// import '../content/content.scss';

// function AppAbout() {
//   return (
//     <section id="about">
//       <div className="about-wrapper section-container">
//         <span className="section-title text">
//           About <span className="pink-title section-title text"> Me</span>
//         </span>
//         <span className="aboutPara">
//           I'm a software engineer with a background in diverse
//           programming languages, algorithms, and software development methods. I
//           learned independently JavaScript, Node.js, React, and more. I have
//           analytical thinking, problem-solving abilities, and effective
//           communication skills, which enable me to work effectively both
//           independently and as part of a team. I enjoy learning new things, new
//           technologies and continuously seek opportunities to enhance my skills
//           in the ever-evolving field of technology.
//         </span>
//       </div>
//     </section>
//   );
// }

// export default AppAbout;

import './about.scss';
import '../../styles/global.scss';
import '../Content/content.scss';
import { ReactTyped } from 'react-typed';

function AppAbout() {
  const technologies = [
    'JavaScript',
    'Node.JS',
    'React',
    'TypeScript',
    'CSS',
    'HTML',
    'MongoDB',
    'SCSS',
    'Git',
    'MySql',
    'Express',
    'Serverless',
    'AWS',
    'Material-UI',
  ];

  return (
    <section id="about">
      <div className="about-wrapper section-container">
        <span className="section-title text">
          About <span className="pink-title section-title text">Me</span>
        </span>
        <span className="aboutPara">
          I am a software engineer skilled in programming languages, algorithms,
          and software development methods. A self-learner with strong
          analytical and problem-solving skills, I thrive both independently and
          in teams. I am passionate about learning new technologies and
          continuously improving in the dynamic tech field. My tech stack
          consist mostly of {' '}
          <span
            className="tech-stack"
            style={{
              display: 'inline-block',
              fontWeight: 'bold',
              fontSize: '1.8rem',
            }}
          >
            <ReactTyped
              strings={technologies}
              typeSpeed={100}
              backSpeed={30}
              backDelay={1500}
              loop
            />
          </span>
          <br /> and more &#128522;
        </span>
      </div>
    </section>
  );
}

export default AppAbout;
