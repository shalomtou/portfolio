import './VideoEmbed.scss';

function VideoEmbed() {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/tiGPsk12lxk?si=pa-jdGrbjumXXvXI&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoEmbed;
