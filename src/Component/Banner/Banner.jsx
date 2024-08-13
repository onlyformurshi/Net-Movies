
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import { imageUrl } from '../../Constants/Constants';
function Banner({movie}) {
    
    console.log(movie, "movie")
    return (
        <Container>
            <div role="banner" className="hero">
            <h1 className="hero--title">{movie?.title || movie?.name}</h1>
            <p className="hero--description">{movie?.overview}</p>
                <button className="hero--button play mb-3"> <FontAwesomeIcon icon={faPlay} className="me-2" />Watch</button>
                <button className="hero--button info"><FontAwesomeIcon icon={faCircleInfo} className="me-2" />More information</button>
            </div>
        </Container>

    )
}

export default Banner
