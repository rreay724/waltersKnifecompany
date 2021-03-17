import React from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerItem">
          <a rel="noreferrer" href="/">
            <EmailIcon fontSize="large" />
          </a>
        </div>

        <div className="footerItem">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/waltersknifecompany/"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
        <div className="footerItem">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/waltersknifeco/?ref=page_internal"
          >
            <FacebookIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
