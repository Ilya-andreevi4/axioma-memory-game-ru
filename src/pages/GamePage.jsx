import React from 'react'
import { Settings } from './setting/Settings'
import { useState } from 'react'
import CardsList from './CardsList'
import { Link } from 'react-router-dom'

const GamePage = () => {
    // const players = [
    //     { id: 1, turn: true, points: 0, title: 'Player 1'},
    //     { id: 2, turn: false, points: 0, title: 'Player 2'},
    //     { id: 3, turn: false, points: 0, title: 'Player 3'},
    //     { id: 4, turn: false, points: 0, title: 'Player 4'}
    // ]

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="gamePage">

            <div className="playersScores">
                <button className="settingsImg" onClick={() => setModalActive(true)}>
                    <img src="img/setting.png" alt="Settings" className="settingIcon" />
                </button>
                <div className="playerBox">
                    <p>Игрок 1</p>
                    <span className='playerOneScores'></span>
                </div>
                <div className="playerBox">
                    <p>Игрок 2</p>
                    <span className='playerTwoScores'></span>
                </div>
                <div className="playerBox">
                    <p>Игрок 3</p>
                    <span className='playerThreeScores'></span>
                </div>
                <div className="playerBox">
                    <p>Игрок 4</p>
                    <span className='playerFourScores'></span>
                </div>
            </div>

            <CardsList className="cardsList" />

            <Settings active={modalActive} setActive={setModalActive}>
                <h1>Настройки</h1>
                <Link to="./StartPage" className="quitButton" >
                    <p className="textQuit">Выход</p>
                </Link>
            </Settings>

        </div>
    )
}

export { GamePage }