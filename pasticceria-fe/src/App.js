import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dolce from "./dolce";
import { receivedFakeData, fakeDetails } from "./fakeData";
import { fetchDolci, fetchDettaglioDolce } from "./utils";
import Ingredienti from "./ingredienti";

const mainStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  justifyContent: "center",
  paddingTop: 32,
  paddingBottom: 32,
};

function App() {
  const [dolciList, setDolciList] = useState([]);
  const [dolceDetails, setdolceDetails] = useState(null);
  const [overlayActivated, setOverlayActivated] = useState(false);

  useEffect(() => {
    fetchDolci().then(setDolciList);
    process.env.REACT_APP_FAKE_DATA && setDolciList(receivedFakeData);
  }, []);

  const activeOverlay = (id) => {
    fetchDettaglioDolce(id).then((dettaglio) => {
      setdolceDetails(dettaglio);
    });
    process.env.REACT_APP_FAKE_DATA &&
      setTimeout(() => setdolceDetails(fakeDetails), 1000);
    setOverlayActivated(true);
  };
  const disableOverlay = () => {
    setOverlayActivated(false);
    setdolceDetails(null);
  };

  const overlay = overlayActivated && dolceDetails ? (
      <div className="overlay-container" onClick={disableOverlay}>
        <div className="overlay-text">
          <Ingredienti details={dolceDetails} />
        </div>
      </div>
    ) : null;

  const vetrinaDolci = dolciList.map((dolce) => Dolce(dolce, activeOverlay));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`REACT BE HOST >> ${process.env.REACT_APP_BE_HOST} <<`}</p>
      </header>
      <main style={mainStyle}>
        {overlay}
        {vetrinaDolci}
      </main>
    </div>
  );
}

export default App;
