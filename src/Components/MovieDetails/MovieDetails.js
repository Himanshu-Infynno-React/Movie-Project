import React, { useEffect, useState } from 'react'
import MovieDetail from '../MovieDetail/MovieDetail'
import CastAndCrew from '../CastAndCrew/CastAndCrew'
import { useParams } from 'react-router-dom'
import SimilarMovies from '../SimilarMovies/SimilarMovies'

function MovieDetails() {
    const { id } = useParams()

    // const [newId , setNewId] = useState
    // const newId = id;
    // console.log(newId , 'from main')

    useEffect(()=>{
        
    } , [id])

    return (
        <>
            <div className="mainContainer">
                <MovieDetail id={id} />
                <CastAndCrew id={id} />
                <SimilarMovies id={id} />
            </div>
        </>
    )
}

export default MovieDetails
