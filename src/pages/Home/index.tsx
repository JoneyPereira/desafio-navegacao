import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import ButtonIcon from 'components/ButtonIcon';

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='base-card home-card'>
          <div className='home-content-container'>
            <h2>O carro perfeito para você</h2>
            <h1>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </h1>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <ButtonIcon/>
      </div>
    </>
  );
}

export default Home;
