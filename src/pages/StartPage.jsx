import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="startpage">
      <header>
        {/* <div className="boxLang">
                    <p className="lng-lang">Lang: </p>
                    <select className="changeLang">
                        <option value="en" >EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>  */}
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
