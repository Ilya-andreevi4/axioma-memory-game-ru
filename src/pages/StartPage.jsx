import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="startpage">
      <header>
        {/* <h1 className="touchMeTitle">Нажмите на экран</h1> */}
      </header>
      <div className="content">
        <h1 className="lng-nameGame">Аксиома Мемори</h1>
        <Link to="/GamePage" className="boxStart">
          <p className="lng-start">Начать игру</p>
        </Link>
      </div>
    </div>
  );
};

export { StartPage };
