import React from "react";
import { useState, useCallback, useMemo, useEffect } from "react";
import { Settings } from "./setting/Settings";
import { Link } from "react-router-dom";

const getData = () => [
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/bee.jpg",
    name: "bee",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/bird.jpg",
    name: "bird",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/butterfly.jpg",
    name: "butterfly",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/chamomile.jpg",
    name: "chamomile",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/flower.jpg",
    name: "flower",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/flower1.jpg",
    name: "flower1",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/ladybug.jpg",
    name: "ladybug",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/snail.jpg",
    name: "snail",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/tree.jpg",
    name: "tree",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/bee.jpg",
    name: "bee",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/bird.jpg",
    name: "bird",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/chamomile.jpg",
    name: "chamomile",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/butterfly.jpg",
    name: "butterfly",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/flower.jpg",
    name: "flower",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/flower1.jpg",
    name: "flower1",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/ladybug.jpg",
    name: "ladybug",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/snail.jpg",
    name: "snail",
  },
  {
    back: "img/cards/card_logo.png",
    imgSrc: "img/cards_part_1/tree.jpg",
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
          setOpenedCards(new Map());
          setIsLoading(false);
        } else {
          setOpenedCards(new Map());
          setIsLoading(false);
        }
      }, 1000);
    }
  }, [openedCards, cardsData, resolvedCards, setOpenedCards]);

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

  return !isComplete ? (
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
      <Link to="./StartPage" className="quitButton">
        <span className="textQuit">Повторить</span>
      </Link>
    </Settings>
  );
}
