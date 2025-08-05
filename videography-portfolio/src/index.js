import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');
    const reydanText = document.getElementById('reydan-text');

    // Try to play with sound
    introVideo.play().catch(function(error) {
        console.log("Autoplay with sound failed, trying muted:", error);
        // If autoplay with sound fails, try muted
        introVideo.muted = true;
        introVideo.play();
    });

    let portfolioRevealed = false;
    
    function revealPortfolio() {
        if (portfolioRevealed) return;
        portfolioRevealed = true;
        
        introOverlay.classList.add('fade-out');
        setTimeout(() => {
            introOverlay.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
        }, 1200);
    }

    function revealReydanText() {
        reydanText.classList.remove('hidden');
        reydanText.classList.add('cinematic-reveal');
    }

    setTimeout(revealReydanText, 13000);
    introVideo.addEventListener('ended', revealPortfolio);
    setTimeout(revealPortfolio, 14500);
});