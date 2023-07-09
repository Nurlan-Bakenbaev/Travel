import React from "react";
import style from "./FactsCard.module.css";

const FactCard = () => {
  const facts = [
    {
      title: "Capital",
      content: "Astana",
    },
    {
      title: "Population",
      content: "18.5 million",
    },
    {
      title: "Official Language",
      content: "Kazakh,Russian",
    },
    {
      title: "Currency",
      content: "Kazakhstan tenge (KZT)",
    },
    {
      title: "Territory rank",
      content: "Kazakhstan is the 9-th biggest country.",
    },
    {
      title: "Natural resources",
      content: "",
      description:
        " Kazakhstan's oil reserves are estimated to be the 11th largest in the world.The country has almost everything from the periodic table.",
    },
  ];

  return (
    <div className={style.factContainer}>
      {facts.map((fact, index) => (
        <div className={style.factCard} key={index}>
          <p className={style.factTitle}>{fact.title}:</p>
          <h1 className={style.factContent}>{fact.content}</h1>
          <p>{fact.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FactCard;
