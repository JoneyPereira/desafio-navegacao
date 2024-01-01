import './styles.css';

import { ReactComponent as MainImage } from 'assets/images/car-card.svg';
import Button from 'components/Button';

function CardCarro() {
  return (
    <div className="my-4 card-carro-container">
      <div className="card-carro">
        <div className="card-carro-content-container">
          <h2>O carro perfeito para você</h2>
          <h1>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </h1>
        </div>
        <div className="card-carro-image-container">
          <MainImage />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default CardCarro;
