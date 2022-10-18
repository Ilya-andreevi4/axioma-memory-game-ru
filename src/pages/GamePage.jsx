import React from "react";
import { Settings } from "./setting/Settings";
import { useState } from "react";
import CardsList from "./CardsList";
import { Link } from "react-router-dom";

const GamePage = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="gamePage">
      <div className="playersScores">
        <button className="settingsImg" onClick={() => setModalActive(true)}>
          <img src="img/setting.png" alt="Settings" className="settingIcon" />
        </button>
        <div className="playerBox">
        </div>
      </div>

      <CardsList className="cardsList" />

      <Settings active={modalActive} setActive={setModalActive}>
        <h1>Настройки</h1>
        <Link to="./StartPage" className="quitButton">
          <p className="textQuit">Выход</p>
        </Link>
      </Settings>
    </div>
  );
};

export { GamePage };
