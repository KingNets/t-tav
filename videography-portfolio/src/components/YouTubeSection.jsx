import React from 'react';

const YouTubeSection = ({ videoIds }) => {
    return (
        <div className="youtube-section">
            <h2>My YouTube Videos</h2>
            <div className="video-container">
                {videoIds.map(id => (
                    <iframe
                        key={id}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${id}`}
                        title={`YouTube video ${id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ))}
            </div>
        </div>
    );
};

export default YouTubeSection;