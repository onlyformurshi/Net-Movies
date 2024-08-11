import Container from 'react-bootstrap/esm/Container';
import './TitleCard.css'; // Assuming you have a separate CSS file for styling
import cards_data from '../../assets/cards/Cards_data';
import { imageUrl } from '../../Constants/Constants';
const TitleCard = ({movieCatogory,cardTitle}) => {
  console.log(movieCatogory, "movieCatogory")
  return (
    <Container>
      <section className="section__category mt-5">
        <h3 className="category--title"><a href="#">{cardTitle}</a></h3>
        <div className="category--carousel">

          <div className="carousel__container">
            <ul className="carousel--list">
              {movieCatogory?.map(({id,title,poster_path}) => (
                <>
                  <li key={id} className="carousel--item">
                    <a href="#">
                      <img
                        src={imageUrl+poster_path} className='card--poster-img' alt={title}
                      />
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TitleCard;
