import MoviesSlider from "../MoviesSlider";

import {
  PrimeVideoContainer,
  Image,
  MoviesContainer,
  MoviesHeading
} from "./styledComponents";

const PrimeVideo = (props) => {
  const { moviesList } = props;

  const actionMoviesList = moviesList.filter(
    (eachMovie) => eachMovie.categoryId === "ACTION"
  );

  const comedyMoviesList = moviesList.filter(
    (eachMovie) => eachMovie.categoryId === "COMEDY"
  );

  return (
    <PrimeVideoContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MoviesHeading>Action Movies</MoviesHeading>
        <MoviesSlider moviesList={actionMoviesList} />
        <MoviesHeading>Comedy Movies</MoviesHeading>
        <MoviesSlider moviesList={comedyMoviesList} />
      </MoviesContainer>
    </PrimeVideoContainer>
  );
};

export default PrimeVideo;
