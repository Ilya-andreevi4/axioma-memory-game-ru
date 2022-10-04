import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StartPage } from './pages/StartPage'
import { SelectTopic } from './pages/SelectTopic'
import { SelectAge } from './pages/SelectAge'
import { NumberPlayers } from './pages/NumberPlayers'
import { GamePage } from './pages/GamePage'
import { NotFound } from './pages/NotFound'


function App() {
    return (
            <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/SelectAge" element={<SelectAge />} />
                    <Route path="/SelectTopic" element={<SelectTopic />} />
                    <Route path="/NumberPlayers" element={<NumberPlayers />} />
                    <Route path="/GamePage" element={<GamePage />} />
                    <Route path="*" element={<NotFound />} />        
            </Routes>
    );
};

export default App;