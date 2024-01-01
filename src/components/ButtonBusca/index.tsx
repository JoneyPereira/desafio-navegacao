import './styles.css';

function ButtonBusca() {
  return (
    <div className="btn-container">
      <input type="text" id="fbusca" name="fbusca" value="Digite sua busca" />
      <button className="btn btn-primary btn-icon">
        <p>BUSCAR</p>
      </button>
    </div>
  );
}

export default ButtonBusca;
