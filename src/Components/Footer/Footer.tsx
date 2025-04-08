import react from "../../Skills/react.svg";
import logo from "../../Images/logo.png";

export const Footer = () => {
  // jsx
  return (
    <footer id="footer" className="footer">
      <div className="section-center">
        <p className="footer-para">
          {`Find the source code of this website on `}
          <a
            href="https://github.com/sheikhabdullahahmed"
            target="_blank"
            rel="noreferrer"
            title="View the full source code on GitHub"
          >
            GitHub
          </a>
          .
        </p>

        {/* <p>Copyright &copy; {date}. All Rights Reserved.</p> */}

        <p className="footer-text-2">
          Created with&nbsp;
          <span className="footer-img-block">
            <img src={react} alt="React.js" className="footer-img" />
            &nbsp;
            <img src={logo} alt="Airtable" className="footer-img" />
          </span>
          &nbsp;by&nbsp;
          <a
            href="https://twitter.com/SheikhAbdullah"
            target="_blank"
            rel="noreferrer"
            title="Follow me on Twitter"
          >
            Sheikh Abdullah
          </a>
        </p>
      </div>
    </footer>
  );
};
