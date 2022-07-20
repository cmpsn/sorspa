const YoutubeEmbed = ({ embedId, width, height, title }) => {
  return (
    <iframe 
      src={`https://www.youtube.com/embed/${embedId}`}
      id={`video_${embedId}`}
      title={title}
      width={width}
      height={height}
      loading="lazy"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="no-referrer"
      //sandbox="allow-scripts allow-same-origin"
    >
    </iframe>
  );
}

export default YoutubeEmbed;