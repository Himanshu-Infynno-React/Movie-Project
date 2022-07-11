import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import SlideBar from '../slideBarComponent/SlideBar'



function MoviesToWatch() {

    const [getMovies, setGetMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=89f66f8a224fb9e217830eef2c34cc44&language=en-US&page=1'
            const res = await axios.get(url);
            const data = res.data;
            const data2 = data.results;
            setGetMovies(data2);
            console.log(data.results)
        }

        fetchMovies();
    }, [])

    if (getMovies.length === 0) {
        return <p>Loading....</p>
    }

    return (
        <>
            <section className="mustWatch">
                <div className="mainMustWatch">
                    <div className="topMustWatch">
                        <div className="headingMustWatch">
                            <h1>
                                MOVIES YOU MUST WATCH
                            </h1>
                        </div>
                        <div className="filterButton">
                            <button className='filter'>Filter <IoIosArrowDown /></button>
                        </div>
                    </div>
                    <div className="bottomMustWatch">
                    <SlideBar getMovies={getMovies} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoviesToWatch
