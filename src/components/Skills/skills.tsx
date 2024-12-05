// import React from 'react';
// import './skills.scss';
// import '../../styles/global.scss';
// import html from '../../assets/html.png';
// import javascript from '../../assets/javascript.png';
// import react from '../../assets/react.png';
// import git from '../../assets/git.png';
// import nodejs from '../../assets/node.png';
// import c from '../../assets/c.png';
// import cplusplus from '../../assets/c++.png';
// import selenium from '../../assets/selenium.png';
// import python from '../../assets/python.png';
// import css from '../../assets/css.png';
// import '../Content/content.scss';

// interface CustomIcon {
//   src: any;
//   alt: string;
//   paragraph: string;
// }

// const icons: CustomIcon[] = [
//   {
//     src: html,
//     alt: 'html icon',
//     paragraph: 'HTML',
//   },
//   {
//     src: javascript,
//     alt: 'javaScript icon',
//     paragraph: 'JAVASCRIPT',
//   },
//   {
//     src: react,
//     alt: 'react icon',
//     paragraph: 'REACT',
//   },
//   {
//     src: git,
//     alt: 'git icon',
//     paragraph: 'GIT',
//   },
//   {
//     src: nodejs,
//     alt: 'nodejs icon',
//     paragraph: 'NODE.JS',
//   },
//   {
//     src: css,
//     alt: 'css icon',
//     paragraph: 'CSS',
//   },
//   // {
//   //   src: c,
//   //   alt: 'c icon',
//   //   paragraph: 'C',
//   // },
//   // {
//   //   src: cplusplus,
//   //   alt: 'c++ icon',
//   //   paragraph: 'C++',
//   // },
//   {
//     src: selenium,
//     alt: 'selenium icon',
//     paragraph: 'SELENIUM',
//   },
//   {
//     src: python,
//     alt: 'python icon',
//     paragraph: 'PYTHON',
//   },
// ];

// function AppSkills() {
//   return (
//     <section id="skills">
//       <div className="skills-wrapper section-container">
//         <span className="section-title text">
//           Skill<span className="pink-title section-title">Set</span>
//         </span>
//         <div className="skills-icons">
//           {icons.map((icon: CustomIcon, index: number) => (
//             <div key={index} className="icon-and-text">
//               <img className="icon" src={icon.src} alt={icon.alt} />
//               <p className="icon-para">{icon.paragraph}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AppSkills;


import './skills.scss';
import '../../styles/global.scss';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';
import nodejs from '../../assets/node.png';
import css from '../../assets/css.png';
import selenium from '../../assets/selenium.png';
import python from '../../assets/python.png';
import aws from '../../assets/aws.png'; // Add your AWS icon
import webpack from '../../assets/webpack.png'; // Add your Webpack icon
import vite from '../../assets/vite.png'; // Add your Vite icon
import yarn from '../../assets/yarn.png'; // Add your Yarn icon
import npm from '../../assets/npm.png'; // Add your NPM icon
import mongodb from '../../assets/mongodb.png'; // Add your MongoDB icon
import mysql from '../../assets/mysql.png'; // Add your MySQL icon
import '../Content/content.scss';

interface CustomIcon {
  src: any;
  alt: string;
  paragraph: string;
}

const icons: CustomIcon[] = [
  { src: html, alt: 'HTML icon', paragraph: 'HTML' },
  { src: javascript, alt: 'JavaScript icon', paragraph: 'JAVASCRIPT' },
  { src: react, alt: 'React icon', paragraph: 'REACT' },
  { src: git, alt: 'Git icon', paragraph: 'GIT' },
  { src: nodejs, alt: 'Node.js icon', paragraph: 'NODE.JS' },
  { src: css, alt: 'CSS icon', paragraph: 'CSS' },
  { src: selenium, alt: 'Selenium icon', paragraph: 'SELENIUM' },
  { src: python, alt: 'Python icon', paragraph: 'PYTHON' },
  { src: aws, alt: 'AWS icon', paragraph: 'AWS' },
  { src: webpack, alt: 'Webpack icon', paragraph: 'WEBPACK' },
  { src: vite, alt: 'Vite icon', paragraph: 'VITE' },
  { src: yarn, alt: 'Yarn icon', paragraph: 'YARN' },
  { src: npm, alt: 'NPM icon', paragraph: 'NPM' },
  { src: mongodb, alt: 'MongoDB icon', paragraph: 'MONGODB' },
  { src: mysql, alt: 'MySQL icon', paragraph: 'MYSQL' },
];

function AppSkills() {
  return (
    <section id="skills">
      <div className="skills-wrapper section-container">
        <span className="section-title text">
          Skill<span className="pink-title section-title">Set</span>
        </span>
        <div className="skills-icons">
          {icons.map((icon: CustomIcon, index: number) => (
            <div key={index} className="icon-and-text">
              <img className="icon" src={icon.src} alt={icon.alt} />
              <p className="icon-para">{icon.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppSkills;
