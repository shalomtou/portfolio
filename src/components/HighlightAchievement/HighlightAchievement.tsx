import './highlightAchievement.scss'; // Add this file for custom styling
import VideoEmbed from '../VideoEmbed/VideoEmbed'; // Embed video component
import { Box } from '@mui/material';

function HighlightAchievement() {
  return (
    <section id="highlight-achievement">
      <div className="highlight-container">
        {/* Title */}
        <h2 className="highlight-title">
          Notable achievements
          <br />
        </h2>

        {/* Summary */}
        <Box>
          <div className="summary-container" style={{ lineHeight: 'normal' }}>
            <p
              className="text"
              style={{ margin: 'auto auto 1rem auto', fontSize: '1.5rem' }}
            >
              Link Generator
            </p>
            <p className="summary-text text">
              Conceptualized, designed, and developed a groundbreaking Chrome
              Extension tailored for marketers, streamlining day-to-day tasks
              such as creating affiliate links instantly, searching for
              high-revenue products, validating links, and more. This tool has
              significantly enhanced productivity and user engagement.
            </p>
            <p>
              <a
                href="/link_generation_app.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link text"
              >
                Click here to download the full prospect
              </a>
            </p>
          </div>
        </Box>

        {/* YouTube Video */}
        <div className="video-container">
          <VideoEmbed />
        </div>
      </div>
    </section>
  );
}

export default HighlightAchievement;
