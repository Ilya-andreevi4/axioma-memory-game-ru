import { Link } from 'react-router-dom'
import React from 'react'
const NotFound = () => {
    return (
        <div className="startpage">
            <div className="boxLang">
                <p className="lng-lang">Lang: </p>
                <select className="changeLang">
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
            </div> 
            <h1 className="lng-nameGame">Axioma Memory Game</h1>
            <Link to="/GamePage"className="boxStart" >
                <p className="lng-start">START</p>        
            </Link>
        </div>
    )
}

    export {NotFound}