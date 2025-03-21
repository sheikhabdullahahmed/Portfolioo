import React from 'react';
import react from "../../Skills/react.svg";
import logo from '../../Images/logo.png';

export const Footer = () => {

  // jsx
  return (
    <footer id="footer" className="footer">
      <div className="section-center">
        <p className="footer-text">
          Find an issue with this page?{' '}
          <a
            href="https://github.com/sheikhabdullahahmed"
            target="_blank"
            rel="noreferrer"
            title="Full Source Code"
          >
            Fix it on GitHub
          </a>
        </p>

        {/* <p>Copyright &copy; {date}. All Rights Reserved.</p> */}

        <p className="footer-text-2">
          Created with&nbsp;
          <span className="footer-img-block">
            <img src={react} alt="react-js" className="footer-img" />
            &nbsp;
            <img src={logo} alt="airtable" className="footer-img" />
          </span>
          &nbsp;by&nbsp;
          <a
            href="https://twitter.com/Sheikh Abdullah"
            target="_blank"
            rel="noreferrer"
            title="My Twitter Account"
          >
                Sheikh Abdullah
          </a>
        </p>
      </div>
    </footer>
  );
};
