import { Link } from 'react-router-dom'
import React from 'react'
const NumberPlayers = () => {
    return (
        <div className="startpage">
            <header>
                <Link to="/SelectTopic"className="backicon" >
                    <img src="img/back_icon.png" alt="Back" className="backimg"/>        
                </Link>

                <h1 className="header2">Main menu</h1>

                <div className="boxLang">
                    <p className="lng-lang">Lang: </p>
                    <select className="changeLang">
                        <option value="en" >EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div> 
            </header>
            <div className='content'>
                <h1 className="lng-nameGame">Number of Players</h1>
                <div className="numBox">
                    <select className="numberPlayers">
                            <option value="1" value>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                    </select>
                </div>

                <div className="playersCards">
                    <div className="playerCard">
                        <h1 className="playerTitle">Player 1</h1>
                        <div className="formGroup">
                            <input className="formInput" placeholder=' ' id='p1' />
                            <label htmlFor="p1" className="formLabel">Player 1</label>
                        </div>
                    </div>
                    <div className="playerCard">
                        <h1 className="playerTitle">Player 2</h1>
                        <div className="formGroup">
                            <input className="formInput" placeholder=' ' id='p2' />
                            <label htmlFor="p2" className="formLabel">Player 2</label>
                        </div>
                    </div>
                    <div className="playerCard">
                        <h1 className="playerTitle">Player 3</h1>
                        <div className="formGroup">
                            <input className="formInput" placeholder=' ' id='p3' />
                            <label htmlFor="p3" className="formLabel">Player 3</label>
                        </div>
                    </div>
                    <div className="playerCard">
                        <h1 className="playerTitle">Player 4</h1>
                        <div className="formGroup">
                            <input className="formInput" placeholder=' ' id='p4' />
                            <label htmlFor="p4" className="formLabel">Player 4</label>
                        </div>
                    </div>
                </div>

                <Link to="/GamePage"className="startGame" >
                    <p className="lng-start">Start Game!</p>        
                </Link>

            </div>
        </div>
    )
}

    export {NumberPlayers}