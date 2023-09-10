import { CaptionText } from "./CaptionText";

export const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" style={{ maxHeight: "inherit" }}>
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={require("../../assets/carosel_images/c1.jpg")}
            alt="First slide"
          />
          <div
            className="carousel-caption d-md-block"
            style={{ transform: "translateY(-50%)", bottom: "0", top: "50%" }}
          >
            <CaptionText
              caption_title={"Build"}
              caption_text={"Add friends, Build your squads for games, sports..."}
            />
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../../assets/carosel_images/c2.jpg")}
            alt="Second slide"
          />
          <div
            className="carousel-caption d-md-block"
            style={{ transform: "translateY(-50%)", bottom: "0", top: "50%" }}
          >
            <CaptionText
              caption_title={"Assemble"}
              caption_text={"Set Date & Time for your sessions!"}
            />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
