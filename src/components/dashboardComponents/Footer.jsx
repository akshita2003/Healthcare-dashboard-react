// Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#5E5E5E',
    padding: '20px 0',
    color: 'white',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const paragraphStyle = {
    margin: 0,
    fontSize: '14px',
  };

  const socialMediaStyle = {
    marginTop: '10px',
  };

  const linkStyle = {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <p style={paragraphStyle}>
            &copy; {new Date().getFullYear()} Healthcare Dashboard. All Rights Reserved.
          </p>
          <div style={socialMediaStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
