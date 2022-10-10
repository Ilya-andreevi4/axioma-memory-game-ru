import React from "react";
import { Link } from "react-router-dom";

// const checkImage = path =>
//     new Promise(resolve => {
//         const img = new Image()
//         img.onload = () => resolve(path)
//         img.onerror = (e) => console.error(e);
//         img.src = path
//     })

const StartPage = () => {
//   useEffect(() => {
//     if(!localStorage.length){
// localStorage.setItem('img', JSON.stringify)
//     }
//     return () => {
//       cleanup
//     };
//   }, []);

  return (
    <div className="startpage">
      <header>
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
