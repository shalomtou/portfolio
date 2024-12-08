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
      <div className="home-wrapper " >
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
