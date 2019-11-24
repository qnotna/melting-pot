import React from "react";
import {slide as Menu} from "react-burger-menu";

export default pops => {
return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Marks">
        Marks
      </a>
      
      <a className="menu-item" href="/Downloads">
        Downloads
      </a>

      <a className="menu-item" href="/MyPress">
        MyPress
      </a>
      <a className="menu-item" href="/Business">
        Business
      </a>
      <a className="menu-item" href="/Entertainment">
        Entertainment
      </a>
      <a className="menu-item" href="/Health">
        Health
      </a><a className="menu-item" href="/Science">
        Science
      </a>
      <a className="menu-item" href="/Sportz">
       Sportz
      </a>
      <a className="menu-item" href="/Technology">
        Technology
      </a>
      <a className="menu-item" href="/Setting">
       Setting
      </a>
      <a className="menu-item" href="/Contact">
        Contact
      </a>

    </Menu>
  );
};
