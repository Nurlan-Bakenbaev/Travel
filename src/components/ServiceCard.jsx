import React from "react";
import style from "./ServiceCard.module.css";
import { useState } from "react";
import "./Button.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ photos, ...props }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const previousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={style.carousel}>
        <div className={style.imgBtn}>
          <button className={style.leftBtn} onClick={previousPhoto}>
            <MdNavigateBefore size={25} />
          </button>
          <img
            className={style.carouselImage}
            src={photos[currentPhotoIndex]}
            alt={` ${currentPhotoIndex + 1}`}
          />
          <button className={style.rightBtn} onClick={nextPhoto}>
            <MdNavigateNext size={25} />
          </button>
        </div>
        <div className={style.cardDescription}>
          <h2 className={style.title}>{props.title}</h2>
          <div className={style.dGrid}>
            <div>
              <p> {props.time} hours long</p>
              <p className={style.description}>{props.description}</p>
              <div className={style.rating}>
                liked {props.rating} <AiFillHeart size={20} />
              </div>
            </div>
            <div className={style.price}><p>from <span>${props.price} </span> per adult</p></div>
          </div>
          <Link to="/contact" ><button className={style.btn}>Reserve tour </button></Link>
          
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
