import React from "react";
import "./styles/main.css";

export default function App() {
  return (
    <div className="portfolio-container futuristic-glow">
      <header className="futuristic-header">
        <h1>
          <span className="neon-text">REydan Videography</span>
        </h1>
        <p className="subtitle">
          Welcome to my{" "}
          <span className="holo">futuristic</span> portfolio!
        </p>
      </header>
      <div className="card-grid">
        <div className="futuristic-card">
          <h2 className="neon-text">YouTube Showcase</h2>
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
            className="video-frame"
          ></iframe>
        </div>
        <div className="futuristic-card">
          <h2 className="neon-text">Instagram Reel</h2>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CuG8vQwJw2F/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      </div>
      <footer className="futuristic-footer">
        <p>
          <span className="holo">Connect:</span>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-link"
          >
            YouTube
          </a>{" "}
          |{" "}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-link"
          >
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}