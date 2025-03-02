import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Mochread</h3>
          <p className="footer-description">Dope Artist</p>
          <div className="social-links">
            <a
              href="placeholder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="maito:placeholder" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://discord.com/users/Mochread"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mochread. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
