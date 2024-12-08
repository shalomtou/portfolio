import './contact.scss';
import '../../styles/global.scss';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import mail from '../../assets/mail.png';
import { Box } from '@mui/material';
import ContactForm from './ContactForm';

function AppContact() {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/shalom-touitou',
      imgSrc: linkedin,
      alt: 'LinkedIn Profile',
      ariaLabel: 'Visit my LinkedIn profile',
    },
    {
      url: 'https://github.com/shalomtou/',
      imgSrc: github,
      alt: 'GitHub Profile',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      url: `mailto:shalotou@gmail.com`,
      imgSrc: mail,
      alt: 'Email Me',
      ariaLabel: 'Send me an email',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper section-container" style={{height:'auto',margin:'3rem auto'}}>
        <h1 className="section-title text">
          Contact<span className="pink-title section-title">Me</span>
        </h1>
        <div className="links-container">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <img src={link.imgSrc} alt={link.alt} className="link-image" />
            </a>
          ))}
        </div>
        <Box>
          <ContactForm />
        </Box>
      </div>
    </section>
  );
}

export default AppContact;
