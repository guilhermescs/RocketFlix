import {API_KEY, BASE_URL, IMG_URL, language,} from '../api.js'

import{ useState } from 'react'

function Home() {

   const [movie, setMovies] = useState([])

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