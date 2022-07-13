import React, {  useRef } from 'react'
import IMDBSmall from '../../images/image 3.png'
import Eye from '../../images/eye (1) 1.png'
import WhiteHeart from '../../images/image 4.png'
import RedHeart from '../../images/image 4 (1).png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Link } from 'react-router-dom'


function SlideBar({ getMovies }) {

    // let {id} = useParams()

    const ref = useRef()

    // function previousSlide(){
    //     ref.current.slickPrev()
    // }

    // function nextSlide(){
    //     ref.current.slickNext()
    // }

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplaySpeed : 5000,
        swipeToSlide : true,
    };



    return (

        <>
            <section className='slideMenu'>
                <div className="mainSlideMenu">
                    {/* <button className='prev' onClick={()=>previousSlide()}>Prev</button> */}
                    <Slider ref={ref}  {...settings} >
                        {getMovies.map((movies) => {
                            return <>
                                <div key={movies.id} className="slideCard">
                                    <div className="cardPoster"> 
                                    <Link to={`/desc/${movies.id}`}><img src={`https://image.tmdb.org/t/p/w185/${movies.poster_path}`} alt="" /> </Link>
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
                    </Slider>
                    {/* <button className='next' onClick={()=>nextSlide()}>Next</button> */}

                </div>
            </section>
        </>
    )
}

export default SlideBar
