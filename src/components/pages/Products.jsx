import React from "react";
import "./Products.css";
import Typewriter from "typewriter-effect";
import VideoPlayer from "../Videoplayer";


function Products() {
  const title = (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("KazaQstan")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Astana")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Almata")
          .pauseFor(1500)
          .start();
      }}
      options={{ loop: true }}
    />
  );
  return (
    <>
      <div className="product-bg">
        <video
          className="video-products"
          src="/videos/like-never.mp4"
          autoPlay
          muted
          loop>

          </video>

        <div id="gallery" className="product-container">
          <h1 className="title">
            Welcome to<span className="country-title">{title}</span>
          </h1>
          <div  className="video-gallery">
            <VideoPlayer source="/videos/qazaqstan.mp4" title="Beutiful Kazaqstan" />
            <VideoPlayer source="/videos/like-never.mp4"title="Like Never Before" />
            <VideoPlayer source="/videos/nightastana.mp4"title="Astana city" />
            <VideoPlayer source="/videos/video.mp4"title="Camping under the Stars " />
           
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
