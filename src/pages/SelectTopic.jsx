import { Link } from 'react-router-dom'
import React from 'react'

// function ButtonSelect(props){
//     return(
//         <div className="btn-group">
//                     <button className="button-select" onClick={props.onSelect}>
//                         <p>{props.but.name}</p>             
//                     </button>
//         </div>
//     )
// }

// class App extends React.Component {
//     state = {
//         buts: [
//             {name: 'Lesson 1', selected: false},
//             {name: 'Lesson 2', selected: false},
//             {name: 'Lesson 3', selected: false},
//             {name: 'Lesson 4', selected: false},
//             {name: 'Lesson 5', selected: false},
//             {name: 'Lesson 6', selected: false},
//         ]
//     }


//     handleSelected(name) {
//         const buts = this.state.buts.concat()
//         const but = buts.find(b => b.name === name)
//         but.selected = !but.selected

//         this.setState({buts})
//     }

//     renderButs() {
//         return this.state.buts.map(but => {
//             return (
//                 <ButtonSelect but={but} 
//                 key={but.name + Math.random}
//                 onSelect={this.handleSelected.bind(this, but.name)}
//                 />
//             )
//         })
//     }
// }

const SelectTopic = () => {
    return (
        <div className="startpage">
            <header>
                <Link to="/SelectAge"className="backicon" >
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
                <h1 className="lng-nameGame">Select a topic</h1>
                <div className="btn-group">
                    <button className="button-select" >
                        <p>Lesson 1</p>             
                    </button>
                    <button className="button-select" >
                        <p>Lesson 2</p>              
                    </button>
                    <button className="button-select" >
                        <p>Lesson 3</p>              
                    </button>
                    <button className="button-select" >
                        <p>Lesson 4</p>              
                    </button>
                    <button className="button-select" >
                        <p>Lesson 5</p>              
                    </button>
                    <button className="button-select" >
                        <p>Lesson 6</p>             
                    </button>

                    <div>
                        <Link to="/NumberPlayers"className="nextButton" >
                            <p className="lng-start">Next</p>        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

    export {SelectTopic}