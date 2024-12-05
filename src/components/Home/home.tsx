import { ReactTyped } from 'react-typed';
import './home.scss';
import cartoon from '../../assets/working.svg';
import '../Content/content.scss';

function AppHome() {
  const sentences = [
    'Software Engineer',
    // 'Great Dancer',
    'Full-Stack Developer',
    'Front-end Lover',
    'Web Developer',
    'Team Player',
    'Plants Lover',
  ];

  return (
    <section id="home">
      <div className="home-wrapper section-container">
        <div className="home-text-container">
          <span className="text-hello">Hello,</span>
          <span className="home-title">
            <span className="text">
              I'm Shalom
              <br />
            </span>

            <span className="sub-typed-text">
              <ReactTyped
                strings={sentences}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                shuffle
                loop
              />
              <br />
            </span>
          </span>
        </div>
        <div className="home-image-container">
          <img className="home-image" src={cartoon} alt="cartoon-girl" />
        </div>
      </div>
    </section>
  );
}

export default AppHome;
