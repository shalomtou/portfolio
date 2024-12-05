// function YouTubeEmbed() {
//   return (
//     <div
//       style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
//     >
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/tiGPsk12lxk?si=pa-jdGrbjumXXvXI&amp;controls=0"
//         title="YouTube video player"
//         // @ts-ignore
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerpolicy="strict-origin-when-cross-origin"
//         allowfullscreen
//       ></iframe>
//     </div>
//   );
// }

// export default YouTubeEmbed;


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
