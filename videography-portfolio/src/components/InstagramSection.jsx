import React from 'react';

const InstagramSection = ({ postUrls }) => {
    return (
        <div className="instagram-section futuristic-design">
            <h2>Instagram Highlights</h2>
            <div className="instagram-posts">
                {postUrls.map((url, index) => (
                    <div key={index} className="instagram-post">
                        <iframe
                            src={url}
                            width="400"
                            height="500"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency="true"
                            allow="encrypted-media"
                            title={`Instagram Post ${index + 1}`}
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramSection;