import React from 'react'
import IMDBSmall from '../../images/image 3.png'
import Eye from '../../images/eye (1) 1.png'
import WhiteHeart from '../../images/image 4.png'
import RedHeart from '../../images/image 4 (1).png'

function SlideBar({ getMovies }) {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 3 },
        { width: 780, itemsToShow: 4 },
        { width: 1440, itemsToShow: 6 }
    ]

    return (

        <>
                <section className='slideMenu'>
                    <div className="mainSlideMenu">
                        {getMovies.map((movies) => {
                            return <>
                                <div className="slideCard">
                                    <div className="cardPoster">
                                        <img src={`https://image.tmdb.org/t/p/w185/${movies.poster_path}`} alt="" />
                                    </div>
                                    <div className="cardTitle">
                                        <h1>{movies.original_title}</h1>
                                    </div>
                                    <div className="cardMovieReleaseData">
                                        <p>{new Date(movies.release_date).getFullYear()}</p>
                                    </div>
                                    <div className="cardRatings">
                                        <div className="cardRatingLeft">
                                            <div className="IMDBLogo">
                                                <img src={IMDBSmall} alt="" />
                                            </div>
                                            <div className="cardRating">
                                                <p>{movies.vote_average}</p>
                                            </div>
                                        </div>
                                        <div className="cardRatingRight">
                                            <div className="cardMovieSeen">
                                                <img src={Eye} alt="" />
                                            </div>
                                            <div className="cardMovieFav">
                                                <img src={WhiteHeart} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                        }
                    </div>
                </section>
        </>
    )
}

export default SlideBar
