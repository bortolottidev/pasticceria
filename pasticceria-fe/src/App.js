import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dolce from './dolce';
import { receivedFakeData, fakeDetails } from './fakeData';

const mainStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  justifyContent: "center",
  paddingTop: 32,
  paddingBottom: 32,
};

function App() {
  const [ dolciList, setDolciList ] = useState([]);
  const [ ingredientiList, setIngredientiList ] = useState([]);
  const [ overlayActivated, setOverlayActivated ] = useState(false);
  
  useEffect(() => {
    console.info('Calling..' + process.env.REACT_APP_BE_HOST);
    fetch(
      `${process.env.REACT_APP_BE_HOST}/dolci`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
      .then(res => res.json())
      .then(response =>
        console.info({ response })
      )
      .catch(error => console.log(error));
    setDolciList(receivedFakeData);
  }, []);

  const activeOverlay = (id) => {
    // fetch id
    setTimeout(() => setIngredientiList(fakeDetails.ingredienti), 1000);
    setOverlayActivated(true);
  }
  const disableOverlay = () => {
    setOverlayActivated(false);
    setIngredientiList([]);
  }

  return (
    <div className="App">
      <div id="overlay" style={{ display: overlayActivated ? 'unset' : 'none' }} onClick={disableOverlay}>
        <div id="text">
          <h1>Ingredienti</h1>
          <ul>
            {ingredientiList.map(({ nome, qta, unita_misura }) => <li>{qta}{unita_misura} {nome}</li>)}
          </ul>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`REACT BE HOST >> ${process.env.REACT_APP_BE_HOST} <<`}
        </p>
      </header>
      <main style={mainStyle}>{dolciList.map((dolce) => Dolce(dolce, activeOverlay))}</main>
    </div>
  );
}

export default App;
