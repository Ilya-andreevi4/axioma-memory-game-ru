import React from "react";
import { useState, useCallback, useMemo, useEffect } from "react";
import { Settings } from "./setting/Settings";
import { Link } from "react-router-dom";

const getData = () => [
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/bee_adobe_express.svg",
    name: "bee",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/bird_adobe_express.svg",
    name: "bird",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/butterfly_adobe_express.svg",
    name: "butterfly",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/chamomile_adobe_express.svg",
    name: "chamomile",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/flower_adobe_express.svg",
    name: "flower",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/flower1_adobe_express.svg",
    name: "flower1",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/ladybug_adobe_express.svg",
    name: "ladybug",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/snail_adobe_express.svg",
    name: "snail",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/tree_adobe_express.svg",
    name: "tree",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/bee_adobe_express.svg",
    name: "bee",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/bird_adobe_express.svg",
    name: "bird",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/chamomile_adobe_express.svg",
    name: "chamomile",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/butterfly_adobe_express.svg",
    name: "butterfly",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/flower_adobe_express.svg",
    name: "flower",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/flower1_adobe_express.svg",
    name: "flower1",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/ladybug_adobe_express.svg",
    name: "ladybug",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/snail_adobe_express.svg",
    name: "snail",
  },
  {
    back: "img/cards/card_logo_adobe_express.svg",
    imgSrc: "img/cards_part_1/tree_adobe_express.svg",
    name: "tree",
  },
];

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
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  // useEffect(()=>{

  // },[])
  useEffect(() => {
    if (openedCards.size === 2) {
      setIsLoading(true);

      setTimeout(() => {
        const openedCardsKeys = Array.from(openedCards.keys());
        if (
          cardsData[openedCardsKeys[0]].name ===
          cardsData[openedCardsKeys[1]].name
        ) {
          let resolvedCardsUpdated = resolvedCards.set(
            openedCardsKeys[0],
            true
          );
          resolvedCardsUpdated = resolvedCardsUpdated.set(
            openedCardsKeys[1],
            true
          );
          setResolvedCards(new Map(resolvedCardsUpdated));
          setIsComplete(resolvedCardsUpdated.size === 18);
          setCount(count+1);
          setOpenedCards(new Map());
          setIsLoading(false);
        } else {
          setCount(count+1);
          setOpenedCards(new Map());
          setIsLoading(false);
        }
      }, 1000);
    }
  }, [openedCards, cardsData, resolvedCards, setOpenedCards, count]);

  const openCard = useCallback(
    (e, idx) => {
      if (openedCards.size > 1) {
        return e.stopPropagation();
      }
      if (isLoading) {
        return e.stopPropagation();
      } else if (openedCards.size < 2) {
        setOpenedCards(new Map(openedCards.set(idx, true)));
      }
    },
    [setOpenedCards, openedCards, isLoading]
  );

  return (
  <>
    <div className="countBox">
      <h3>Количество ходов:{count}</h3>
    </div>
    {!isComplete ? (
    <div className={props.className}>
      {cardsData.map((card, idx) => {
        return (
          <div key={idx}>
            <img
              alt=""
              src={openedCards.get(idx) ? card.imgSrc : card.back}
              className={"cardImg"}
              style={{ display: resolvedCards.get(idx) ? "none" : "block" }}
              onClick={(e) => openCard(e, idx)}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <Settings active={modalActive} setActive={setModalActive}>
      <p>Поздравляю! Вы открыли все пары карт!</p>
      <p>Всего ходов: {count}</p>
      <Link to="./StartPage" className="quitButton">
        <span className="textQuit">Повторить</span>
      </Link>
    </Settings>
  )}
  </>
  )
}
