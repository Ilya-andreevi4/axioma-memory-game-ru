import React from "react"; 
import { useState, useCallback, useMemo, useEffect } from 'react';
import { Settings } from './setting/Settings'
import { Link } from 'react-router-dom'


const getData = () => [
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/bee.jpg", name: "bee"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/bird.jpg", name: "bird"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/butterfly.jpg", name: "butterfly"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/chamomile.jpg", name: "chamomile"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/flower.jpg", name: "flower"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/flower1.jpg", name: "flower1"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/ladybug.jpg", name: "ladybug"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/snail.jpg", name: "snail"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/tree.jpg", name: "tree"},/* 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/nose.jpg", name: "nose"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/shoulders.jpg", name: "shoulders"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/tail.jpg", name: "tail"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/toes.jpg", name: "toes"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/wings.jpg", name: "wings"}, */
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/bee.jpg", name: "bee"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/bird.jpg", name: "bird"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/chamomile.jpg", name: "chamomile"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/butterfly.jpg", name: "butterfly"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/flower.jpg", name: "flower"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/flower1.jpg", name: "flower1"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/ladybug.jpg", name: "ladybug"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/snail.jpg", name: "snail"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/tree.jpg", name: "tree"},/*  
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/nose.jpg", name: "nose"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/shoulders.jpg", name: "shoulders"},
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/tail.jpg", name: "tail"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/toes.jpg", name: "toes"}, 
    {back: "img/cards/card_logo.png",imgSrc: "img/cards_part_1/wings.jpg", name: "wings"} */
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