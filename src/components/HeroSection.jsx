import "./HeroSection.css";
import ".././App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        className="video-hero"
        src="/videos/qazaqstan.mp4"
        autoPlay
        loop
        muted
      />
      <h1>VISIT KAZAQSTAN</h1>

      <div className="hero-btns">
        <Link to={'/products/#gallery'}>
          <Button>Get Started</Button>
        </Link>

        <Link to='/produts#gallery'>
          <Button>Video Gallery</Button>
        </Link>
      </div>
    </div>
  );
};
