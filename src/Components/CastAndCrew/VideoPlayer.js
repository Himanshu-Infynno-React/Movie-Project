import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer({id}) {

    const [video , setVideo] = useState([])

    const fetchVideos = async () =>{
        const url = `https://api.themoviedb.org/3/movie/616037/videos?api_key=89f66f8a224fb9e217830eef2c34cc44&language=en-US`
        const fetchVideo = await axios.get(url);
        const res = fetchVideo.data
        // console.log(res.results)
        const data = res.result
        setVideo(data)
    }

    useEffect(()=>{
        fetchVideos();
    } , [])

    return (
        <>

        </>
    )
}

export default VideoPlayer
