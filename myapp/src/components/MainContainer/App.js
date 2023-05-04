import './MainContainerStyle.css';

function App() {
  return (
    <div className="flex-container ">
      <div className="flex-items ">
        <h2>Formulário</h2>
        <label>Nome: </label>
        <div className="generic-input">
          <input type="text"></input>
        </div>
        <label>E-mail: </label>
        <div className="generic-input">
          <input type="email"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
