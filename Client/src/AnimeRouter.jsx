import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Animes from './component/Animes.jsx'

const AnimeRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/animes' element={<Animes />} />

            </Routes>

        </>
    )
}

export default AnimeRouter
