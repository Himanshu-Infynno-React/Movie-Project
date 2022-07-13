import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import IMDB from '../../images/image 5.png'
import HomePageSideBar from '../Home Page/HomePageSideBar'
import { BsPlayFill } from 'react-icons/bs'
import { HiPlus } from 'react-icons/hi'
import { BiDownload } from 'react-icons/bi'


function MovieDetail({ id }) {


    const [movies, setMovies] = useState([]);
    const [images, setImages] = useState([]);

    // const [deadPool , MortalKnmbat , deadPool2] = [293660 , 460465 ,383498 ]

    useEffect(() => {
        const fetchMovies = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=89f66f8a224fb9e217830eef2c34cc44`;
            const fetchMovie = await axios.get(url);
            const res = fetchMovie.data;
            setMovies(res);
        }

        const fetchImages = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=89f66f8a224fb9e217830eef2c34cc44`
            const fetchImage = await axios.get(url);
            const res = fetchImage.data;
            setImages(res);
        }

        fetchMovies();
        fetchImages();
    }, [id])

    if (movies.length === 0) {
        return <p>loading...</p>;
    }

    return (
        <>
            {/* <div className="mainContainer2"> */}

            <section className='home'>
                <div className="moviePoster">
                    <img className='posterImg' src={`https://image.tmdb.org/t/p/original/${images?.backdrops[0].file_path}`} alt="" />
                </div>
                <header className='header'>
                    <div className="homePageMain">
                        <div className="mainDetail">
                            <div className="sideMenu">
                                <HomePageSideBar />
                            </div>
                            <div className="titleDetails">
                                <div className="titlePoster">
                                    <img className='logoImg' src={`https://image.tmdb.org/t/p/original/${images.logos[0].file_path}`} alt="" />
                                </div>
                                <div className="titleOverview">
                                    <p>{movies.overview}</p>
                                    <div className="titleGenre">
                                        <h1>Genres</h1>
                                        <p>{movies.genres.map((genre) => {
                                            return genre.name
                                        }).join(' , ')}</p>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="watchButton"><p>Watch</p> <BsPlayFill size={28} /></button>
                                    <button className="myListButton"><p>My List</p> <HiPlus size={28} /></button>
                                    <button className="downloadBtn"><BiDownload size={28} color='white' /></button>
                                </div>
                                <div className="ratings">
                                    <div className="imdbLogo">
                                        <img src={IMDB} alt="" />
                                    </div>
                                    <div className="rating">
                                        <h3>{movies.vote_average}</h3>
                                    </div>
                                    <div className="ratingCerti">
                                        <p>U/A</p>
                                    </div>
                                    <div className='resolution'>
                                        <p>4K</p>
                                    </div>
                                    <div className="releaseDate">
                                        <p>{new Date(movies.release_date).getFullYear()}</p>
                                    </div>
                                </div>
                                <div className="movieAudioSubtitle">
                                    <div className="movieAudio">
                                        <div className="audioHeading">
                                            <h1>AUDIO</h1>
                                        </div>
                                        <div className="movieAudios">
                                            <p> {movies.spoken_languages.map((audio) => {
                                                return audio.name
                                            }).join(' , ')} </p>
                                        </div>
                                    </div>
                                    <div className="movieSubtitle">
                                        <div className="subtitleHeading">
                                            <h1>SUBTITLES</h1>
                                        </div>
                                        <div className="movieSubtitle">
                                            <p>English</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rightSide'></div>
                    </div>
                </header>
            </section>
            {/* </div> */}
        </>
    )
}

export default MovieDetail
