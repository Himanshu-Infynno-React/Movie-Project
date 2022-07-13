import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function SimilarMovies({id}) {

    const [similar, setSimilar] = useState([])

    const settings = {
        infinite: true,
        speed: 200,
        autoplay : true,
        autoplaySpeed : 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide : true,
        arrows : true
    };

    const fetchMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=89f66f8a224fb9e217830eef2c34cc44`;
        const fetchMovie = await axios.get(url);
        const res = fetchMovie.data;
        const data = res.results;
        setSimilar(data);
    }

    function changeMovie(id) {
        console.log('i am clicked' , id)
    }

    useEffect(() => {
        // if(similar.length === 0){
            fetchMovies();
        // }
        // else {
            // return <p>Loading....</p>
        // }
    }, [id])

    return (
        <>
            <section className="SimilarMovies">
                <div className="mainSimilar">
                    <div className="mainSimilarHeading">
                        <h1>MORE LIKE THIS</h1>
                    </div>
                    <div className="mainSimilarCardInfo">
                        <Slider autoplay {...settings}>

                        {similar.length !== 0 && similar.map((movies) => {
                            if(movies.backdrop_path){
                                return <div key={movies.id} className="similarCard">
                               <Link to={`/desc/${movies.id}`}> <img src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} alt="" onClick={()=>changeMovie(movies.id)} /> </Link>
                            </div>
                            }
                        })}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SimilarMovies
