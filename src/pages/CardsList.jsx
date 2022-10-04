import React from "react"; 
import { useState, useCallback, useMemo, useEffect } from 'react';
import { Settings } from './setting/Settings'
import { Link } from 'react-router-dom'


const getData = () => [
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/beak.jpg", name: "beak"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/ears.jpg", name: "ears"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/eyes.jpg", name: "eyes"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/face.jpg", name: "face"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/fingers.jpg", name: "fingers"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/hands.jpg", name: "hands"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/head.jpg", name: "head"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/knees.jpg", name: "knees"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/legs.jpg", name: "legs"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/nose.jpg", name: "nose"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/shoulders.jpg", name: "shoulders"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/tail.jpg", name: "tail"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/toes.jpg", name: "toes"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/wings.jpg", name: "wings"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/beak.jpg", name: "beak"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/ears.jpg", name: "ears"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/eyes.jpg", name: "eyes"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/face.jpg", name: "face"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/fingers.jpg", name: "fingers"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/hands.jpg", name: "hands"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/head.jpg", name: "head"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/knees.jpg", name: "knees"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/legs.jpg", name: "legs"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/nose.jpg", name: "nose"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/shoulders.jpg", name: "shoulders"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/tail.jpg", name: "tail"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/toes.jpg", name: "toes"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards/wings.jpg", name: "wings"}
]
  
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};


    

export default function CardsList(props) {
    const cardsData = useMemo(() => randomize(), []);
    const [isComplete, setIsComplete] = useState(false);
    const [openedCards, setOpenedCards] = useState(new Map());
    const [resolvedCards, setResolvedCards] = useState(new Map());

    const [modalActive, setModalActive] = useState(true);


    useEffect(() => {
        if(openedCards.size == 2) {
            setTimeout(() => {
                const openedCardsKeys = Array.from(openedCards.keys()); 
                if(cardsData[openedCardsKeys[0]].name == cardsData[openedCardsKeys[1]].name) {
                    let resolvedCardsUpdated = resolvedCards.set(openedCardsKeys[0], true);
                    resolvedCardsUpdated = resolvedCardsUpdated.set(openedCardsKeys[1], true);
                    setResolvedCards(new Map(resolvedCardsUpdated));
                    setIsComplete(resolvedCardsUpdated.size == 28);
                }
                setOpenedCards(new Map());
            }, 1500);
        }
    }, [openedCards, cardsData, setOpenedCards]);

    const openCard = useCallback((idx) => {
        if(openedCards.size < 2) {
            setOpenedCards(new Map(openedCards.set(idx, true)));
        }
    }, [setOpenedCards, openedCards]);

    return  !isComplete ? 
    <div className={props.className}>
        {cardsData.map((card, idx) => {
            return  <div key={idx}>
                <img src={openedCards.get(idx) ? card.imgSrc : card.back} 
                 className={'cardImg'} style={{display: resolvedCards.get(idx) ? 'none' : 'block'}} onClick={() => openCard(idx)}/>
            </div>;
        })}
    </div>
    : <Settings active={modalActive} setActive={setModalActive}> 
        <h1>Поздравляю! Вы открыли все пары карт!</h1>
        <Link to="./StartPage" className="quitButton" >
            <p className="textQuit">Повторить</p>       
        </Link>
    </Settings>;
}