import { Link } from 'react-router-dom'
import React from 'react'

const SelectAge = () => {
    return (
        <div className="startpage" >
            <header>
                <Link to="/"className="backicon" >
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
                <h1 className="lng-nameGame">Select the age</h1>
                <div className="btn-group">
                    <Link to="/SelectTopic" className="button" >
                        <p>5-7 age </p>             
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>1 form</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>2 form</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>3 form</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>4 form</p>              
                    </Link>
                    <Link to="/SelectTopic" className="button" >
                        <p>Adult</p>             
                    </Link>
                </div>
            </div>   
        </div>
    )
}

    export {SelectAge}