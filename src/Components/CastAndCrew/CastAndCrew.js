import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

function CastAndCrew({ id }) {



    const [cast, setCast] = useState([])

    const [video, setVideo] = useState([])

    const fetchVideos = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=89f66f8a224fb9e217830eef2c34cc44&language=en-US`
        const fetchVideo = await axios.get(url);
        const res = fetchVideo.data
        const data = res.results[0]
        setVideo(data.key)
    }


    const fetchCast = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=89f66f8a224fb9e217830eef2c34cc44`;
        const fetchMovie = await axios.get(url);
        const res = fetchMovie.data;
        setCast(res.cast);
    }

    useEffect(() => {
        fetchCast();
        fetchVideos();
    }, [id])

    return (
        <>
            <div className="CastAndCrewMain">

                <section className="CastAndCrew">
                    <div className="mainCastAndCrew">
                        <div className="movieTrailer">
                            <div className="trailerHeading">
                                <h1>TRAILER</h1>
                            </div>
                            <div className="movieTrailerVid">
                                <ReactPlayer controls light playing width={"307px"} height={"195px"} url={`https://www.youtube.com/watch?v=${video}`} />
                            </div>
                        </div>
                        <div className="castAndCrewInfo">
                            <div className="castAndCrewHeading">
                                <h1>CAST AND CREW INFO</h1>
                            </div>
                            <div className="gapDiv">

                                {cast.map((data) => {
                                    return <div className="castAndCrewCard">
                                        <div className="castImage">
                                            <img src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`} alt="" />
                                        </div>
                                        <div className="castNameAndRole">
                                            <div className="CastName">
                                                <p>{data?.name}</p>
                                            </div>
                                            <div className="Role">
                                                <p>As {data?.character}</p>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CastAndCrew
