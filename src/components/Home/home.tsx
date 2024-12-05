// import { ReactTyped } from 'react-typed';
// import './home.scss';
// import cartoon from '../../assets/working.svg';
// import '../Content/content.scss';

// function AppHome() {
//   const sentences = [
//     'Software Engineer',
//     // 'Great Dancer',
//     'Full-Stack Developer',
//     'Front-end Lover',
//     'Web Developer',
//     'Team Player',
//     'Plants Lover',
//   ];

//   return (
//     <section id="home">
//       <div
//         className="home-wrapper section-container"
//       >
//         <div className="home-text-container">
//           <span className="text-hello">Hello,</span>
//           <span className="home-title">
//             <span className="text">
//               I'm Shalom
//               <br />
//             </span>

//             <span className="sub-typed-text">
//               <ReactTyped
//                 strings={sentences}
//                 typeSpeed={50}
//                 backSpeed={30}
//                 backDelay={2000}
//                 shuffle
//                 loop
//               />
//               <br />
//             </span>
//           </span>
//         </div>
        
//         {/* Added new text for the black section */}
//         <div className="home-description">
//           Building modern, scalable, and responsive web applications tailored to
//           your needs.
//         </div>

//         <div className="home-image-container">
//           <img className="home-image" src={cartoon} alt="cartoon-girl" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AppHome;

import { ReactTyped } from 'react-typed';
import './home.scss';
import cartoon from '../../assets/working.svg';
import '../Content/content.scss';

function AppHome() {
  const sentences = [
    'Software Engineer',
    'Full-Stack Developer',
    'Front-end Lover',
    'Web Developer',
    'Team Player',
    'Plants Lover',
  ];

  return (
    <section id="home">
      <div className="home-wrapper section-container" style={{height:'100svh'}}>
        {/* Text Container */}
        <div className="home-text-container">
          <span className="text-hello">Hello,</span>
          <h1 className="home-title text">
            I'm Shalom
            <br />
            <span className="sub-typed-text">
              <ReactTyped
                strings={sentences}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                shuffle
                loop
              />
            </span>
          </h1>
          <p className="home-description">
            Building modern, scalable, and responsive web applications tailored to
            your needs.
          </p>
        </div>

        {/* Image Container */}
        <div className="home-image-container">
          <img className="home-image" src={cartoon} alt="A developer illustration" />
        </div>
      </div>
    </section>
  );
}

export default AppHome;
