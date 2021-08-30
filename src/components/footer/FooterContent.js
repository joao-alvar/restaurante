import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

const FooterContent = () => {
  const ano = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__container">
        <div className="all__rights">&#169; {ano}</div>
        <div className="footer__link">
          <a
            href="https://github.com/joao-alvarenga"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="githubIcon" /> João Alvarenga
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
