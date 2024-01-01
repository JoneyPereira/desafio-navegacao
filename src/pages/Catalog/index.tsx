import CardCarro from 'components/CardCarro';
import './styles.css';
import ButtonBusca from 'components/ButtonBusca';

function Catalog() {
  return (
    <>
      <div className="container my-4">
        <div>
          <ButtonBusca/>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-lg-4 col-xl-4'>
            <CardCarro />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-4'>
            <CardCarro />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-4'>
            <CardCarro />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-4'>
            <CardCarro />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-4'>
            <CardCarro />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-4'>
            <CardCarro />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
