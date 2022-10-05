import { Link } from 'react-router-dom'
import React from 'react'

const SelectAge = () => {
    return (
        <div className="startpage" >
            <header>
                <Link to="/"className="backicon" >
                    <img src="img/back_icon.png" alt="Back" className="backimg"/>        
                </Link>

                <h1 className="header2">Главное меню</h1>

                {/* <div className="boxLang">
                    <p className="lng-lang">Lang: </p>
                    <select className="changeLang">
                        <option value="en" >EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>  */}
                
            </header>
            <div className='content'>
                <h1 className="lng-nameGame">Выбрать возраст</h1>
                <div className="btn-group">
                    <Link to="/SelectTopic" className="button" >
                        <p>5-7 лет </p>             
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>1 класс</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>2 класс</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>3 класс</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>4 класс</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>Постарше</p>             
                    </Link>
                </div>
            </div>   
        </div>
    )
}

    export {SelectAge}