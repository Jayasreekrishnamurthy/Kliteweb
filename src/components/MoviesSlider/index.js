import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieItem from "../MovieItem";

const MoviesSlider = (props) => {
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, // Mobile landscape and below
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  const { moviesList } = props;

  return (
    <>
      <Slider {...settings}>
        {moviesList.map((eachMovie) => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  );
};

export default MoviesSlider;
