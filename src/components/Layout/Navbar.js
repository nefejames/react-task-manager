import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Nefe's Todo App</h1>
        <ul>
          <li>
            <a href="http://github.com/nefejames">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="http://daddy-nefs.netlify.com">
              {" "}
              <i className="fa fa-globe"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
