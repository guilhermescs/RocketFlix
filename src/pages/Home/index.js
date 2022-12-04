import {APIKey, BASE_URL, IMG_URL, language,} from '../../config/api'

import{ useState, useEffect } from 'react'
//import { response } from 'express'

function Home() {

   const [movie, setMovies] = useState([])

   useEffect(() => {
    //consumir a api

    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${APIKey}`)
        .then(response => response .json())
        .then(data => {setMovies(data.results)})
   }, [])

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                <li>
                    <img src=""></img>
                    <span></span>
                </li>

                <li>
                    <img src=""></img>
                    <span></span>
                </li>

                <li>
                    <img src=""></img>
                    <span></span>
                </li>
            </ul>
        </div>

    )
}

export default Home;