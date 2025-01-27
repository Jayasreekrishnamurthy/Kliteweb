// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import axios from "axios";
// import PrimeVideo from "./components/Primevideo/index";
// import Search from "./components/Search";
// import Detail from "./components/Detail";
// // import MovieCard from './components/MovieCard';
// import {Footer} from "./components/Footer/Footer"
// import './App.css';

// const moviesList = [
//   {
//     id: "61227099e13958e58d31e74c",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=QPistcpGB8o",
//     categoryId: "ACTION"
//   },
//   {
//     id: "612271842cad3c2dfcb82481",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=k397HRbTtWI&t=1s",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "6122709941329807a4e17b39",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/avengers-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
//     categoryId: "ACTION"
//   },
//   {
//     id: "61227184c889cff17f05900b",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/the-intern-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=ZU3Xban0Y6A",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "612271846f711783024f2bfa",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/karwaan-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=IUCeN7kelXs",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "612271141bf93653809cdccb",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/war-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=tQ0mzXRk-oM",
//     categoryId: "ACTION"
//   },
//   {
//     id: "61227184c7ac22c8258938c5",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/yes-man-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=dDh1l3qVNoY",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "61227184ae30e00e3ce542c8",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "6122718418ae122e517c3ada",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=fo9EhcwQXcM",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "61227099ce46ed88e7f00c19",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=odM92ap8_c0",
//     categoryId: "ACTION"
//   },
//   {
//     id: "612271848b2be0f2f769d24a",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=lMAj8tyThw0",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "61227184882da0a972890152",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=3-7jehmURuM",
//     categoryId: "COMEDY"
//   },
//   {
//     id: "6122709931ad5e69f5125806",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/gamer-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=P2g94xQmtHw",
//     categoryId: "ACTION"
//   },
//   {
//     id: "61227099d3c5b18801b2edb5",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=xaPLUII_M6g",
//     categoryId: "ACTION"
//   },
//   {
//     id: "61227114b7b5232771c68883",
//     thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/priest-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=IYfdQOGqL1o",
//     categoryId: "ACTION"
//   },
//   {
//     id: "61227099ea52349bd1e16ee4",
//     thumbnailUrl:
//       "https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png",
//     videoUrl: "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
//     categoryId: "ACTION"
//   }
// ];
// const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';

// function App() {
//   const [movies, setMovies] = useState([]);
//     const [searchTerm, setSearchTerm] = useState([]);
//     const searchMovies = async (title) => {
//         const response = await fetch(`${API_URL}&s=${title}`);
//         const data = await response.json();
//         setMovies(data.Search);
//     }
//     useEffect(() => {
//         searchMovies('');
//     }, []);
//   const [state, setState] = useState({
//     s: "sherlock",
//     results: [],
//     selected: {},
// });

// const apiurl =
//     "https://www.omdbapi.com/?apikey=a2526df0";

// const searchInput = (e) => {
//     let s = e.target.value;

//     setState((prevState) => {
//         return { ...prevState, s: s };
//     });
// };

// const search = (e) => {
//     if (e.key === "Enter") {
//         axios(apiurl + "&s=" + state.s).then(
//             ({ data }) => {
//                 let results = data.Search;

//                 console.log(results);

//                 setState((prevState) => {
//                     return {
//                         ...prevState,
//                         results: results,
//                     };
//                 });
//             }
//         );
//     }
// };

// const openDetail = (id) => {
//     axios(apiurl + "&i=" + id).then(({ data }) => {
//         let result = data;

//         setState((prevState) => {
//             return { ...prevState, selected: result };
//         });
//     });
// };
// const handleClearSearch = () => {
//   setState({
//       searchTerm: "",
//       results: [],
//       selected: null,
//   });
// };


// const closeDetail = () => {
//   setState((prevState) => ({ ...prevState, selected: null }));
// };

//   return (
//     <div className="App">
//     <header className="App-header">
//         {/* <h1>Movie</h1> */}
//     </header>
//     <main>
//       <header>
//         <Search
//             searchInput={searchInput}
//             search={search}
//             clearSearch={handleClearSearch}

//         />
//         </header>
        

//         <div className="container">
//             {state.results.map((e) => (
//                 <div
//                     className="item"
//                     onClick={() =>
//                         openDetail(e.imdbID)
//                     }
//                 >
//                     <img
//                         style={{ width: "200px" }}
//                         src={e.Poster}
//                     />
//                     <h3 style={{ color: "white" }}>
//                         {e.Title}
//                     </h3>
//                 </div>
//             ))}
//         </div>

//         {typeof state.selected.Title !=
//         "undefined" ? (
//             <Detail
//                 selected={state.selected}
//                 closeDetail={closeDetail}
//             />
//         ) : (
//             false
//         )}
//         <PrimeVideo moviesList={moviesList} />;
//     </main>
//     <Footer/>
// </div>

//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import PrimeVideo from "./components/Primevideo/index";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

const moviesList = [
  {
    id: "61227099e13958e58d31e74c",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png",
    videoUrl: "https://www.youtube.com/watch?v=QPistcpGB8o",
    categoryId: "ACTION"
  },
  {
    id: "612271842cad3c2dfcb82481",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png",
    videoUrl: "https://www.youtube.com/watch?v=k397HRbTtWI&t=1s",
    categoryId: "COMEDY"
  },
  {
    id: "6122709941329807a4e17b39",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/avengers-img.png",
    videoUrl: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    categoryId: "ACTION"
  },
  {
    id: "61227184c889cff17f05900b",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/the-intern-img.png",
    videoUrl: "https://www.youtube.com/watch?v=ZU3Xban0Y6A",
    categoryId: "COMEDY"
  },
  {
    id: "612271846f711783024f2bfa",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/karwaan-img.png",
    videoUrl: "https://www.youtube.com/watch?v=IUCeN7kelXs",
    categoryId: "COMEDY"
  },
  {
    id: "612271141bf93653809cdccb",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/war-img.png",
    videoUrl: "https://www.youtube.com/watch?v=tQ0mzXRk-oM",
    categoryId: "ACTION"
  },
  {
    id: "61227184c7ac22c8258938c5",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/yes-man-img.png",
    videoUrl: "https://www.youtube.com/watch?v=dDh1l3qVNoY",
    categoryId: "COMEDY"
  },
  {
    id: "61227184ae30e00e3ce542c8",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png",
    videoUrl: "https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s",
    categoryId: "COMEDY"
  },
  {
    id: "6122718418ae122e517c3ada",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png",
    videoUrl: "https://www.youtube.com/watch?v=fo9EhcwQXcM",
    categoryId: "COMEDY"
  },
  {
    id: "61227099ce46ed88e7f00c19",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png",
    videoUrl: "https://www.youtube.com/watch?v=odM92ap8_c0",
    categoryId: "ACTION"
  },
  {
    id: "612271848b2be0f2f769d24a",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png",
    videoUrl: "https://www.youtube.com/watch?v=lMAj8tyThw0",
    categoryId: "COMEDY"
  },
  {
    id: "61227184882da0a972890152",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png",
    videoUrl: "https://www.youtube.com/watch?v=3-7jehmURuM",
    categoryId: "COMEDY"
  },
  {
    id: "6122709931ad5e69f5125806",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/gamer-img.png",
    videoUrl: "https://www.youtube.com/watch?v=P2g94xQmtHw",
    categoryId: "ACTION"
  },
  {
    id: "61227099d3c5b18801b2edb5",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png",
    videoUrl: "https://www.youtube.com/watch?v=xaPLUII_M6g",
    categoryId: "ACTION"
  },
  {
    id: "61227114b7b5232771c68883",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/priest-img.png",
    videoUrl: "https://www.youtube.com/watch?v=IYfdQOGqL1o",
    categoryId: "ACTION"
  },
  {
    id: "61227099ea52349bd1e16ee4",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png",
    videoUrl: "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
    categoryId: "ACTION"
  }
];
const API_URL = "https://www.omdbapi.com/?apikey=a2526df0";

function App() {
    const [state, setState] = useState({
        searchTerm: "",
        results: [],
        selected: null,
    });

    useEffect(() => {
        // Load initial movies if needed
        fetchMovies("2022");
    }, []);

    const fetchMovies = async (query) => {
        try {
            const response = await axios.get(`${API_URL}&s=${query}`);
            const { Search } = response.data;
            setState((prevState) => ({
                ...prevState,
                results: Search || [],
            }));
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleSearchInput = (e) => {
        const { value } = e.target;
        setState((prevState) => ({ ...prevState, searchTerm: value }));
    };
    const handleSearch = () => {
      if (state.searchTerm.trim()) {
          fetchMovies(state.searchTerm);
      }
  };
    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter" && state.searchTerm.trim()) {
            fetchMovies(state.searchTerm);
        }
    };

    const handleClearSearch = () => {
        setState({
            searchTerm: "",
            results: [],
            selected: null,
        });
    };

    const openDetail = async (id) => {
        try {
            const response = await axios.get(`${API_URL}&i=${id}`);
            setState((prevState) => ({
                ...prevState,
                selected: response.data,
            }));
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    const closeDetail = () => {
        setState((prevState) => ({ ...prevState, selected: null }));
    };

    return (
        <div className="App">
            <header className="App-header">
                <Search
                    searchInput={handleSearchInput}
                    search={handleSearchKeyPress}
                    clearSearch={handleClearSearch}
                    handleSearch={handleSearch}
                />
            </header>
            <main>
            <div className="container">
    {state.results.map((movie) => (
        <div
            key={movie.imdbID}
            className="item"
            onClick={() => openDetail(movie.imdbID)}
        >
            <img style={{ width: "200px", borderRadius: "8px" }} src={movie.Poster} alt={movie.Title} />
            <h3 style={{ color: "white", marginTop: "10px", textAlign: "center" }}>{movie.Title}</h3>
        </div>
    ))}
</div>


                {state.selected && (
                    <Detail
                        selected={state.selected}
                        closeDetail={closeDetail}
                    />
                )}
                <PrimeVideo moviesList={moviesList} />;
            </main>
            <Footer />
        </div>
    );
}

export default App;
