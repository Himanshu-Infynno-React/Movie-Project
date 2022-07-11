import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SlideBar from '../slideBarComponent/SlideBar'

function RecommendedBar() {

    const [getMovies, setGetMovies] = useState([])
    const fetchMovies = async (api) => {
        const url = 'https://api.themoviedb.org/3/movie/580489/similar?api_key=89f66f8a224fb9e217830eef2c34cc44&language=en-US&page=1'
        const res = await axios.get(url);
        const data = res.data;
        const data2 = data.results;
        setGetMovies(data2);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    if (getMovies.length === 0) {
        return <p>Loading....</p>
    }



    return (
        <>
            <section className="recommendedPage">
                <div className="mainRecommended">
                    <div className="recHeading">
                        <h1>RECOMMENDED FOR YOU</h1>
                    </div>
                    <div className='btnandList'>
                        <div className="recLangBtn">
                            <button className='lang hindi'>Hindi</button>
                            <button className='lang bengali'>Bengali</button>
                            <button className='lang marathi'>Marathi</button>
                            <button className='lang assamese'>Assamese</button>
                            <button className='lang telugu'>Telugu</button>
                            <button className='lang tamil'>Tamil</button>
                            <button className='lang malayalam'>Malayalam</button>
                        </div>
                        <div>
                            <SlideBar getMovies={getMovies} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecommendedBar
