import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dolce from "./dolce";
import { receivedFakeData, fakeDetails } from "./fakeData";
import { fetchDolci, fetchDettaglioDolce, addNewDolce } from "./utils";
import Ingredienti from "./ingredienti";
import Admin from "./admin";

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
  const [isPageAdmin, setPageAdmin] = useState(false);
  const [triggerReload, setTriggerReload] = useState(true);

  const goPageAdmin = () => setPageAdmin(true);
  const goBack = () => setPageAdmin(false);

  useEffect(() => {
    triggerReload && fetchDolci().then(setDolciList);
    setTriggerReload(false);
    process.env.REACT_APP_FAKE_DATA && setDolciList(receivedFakeData);
  }, [triggerReload]);

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

  const overlay =
    overlayActivated && dolceDetails ? (
      <div className="overlay-container" onClick={disableOverlay}>
        <div className="overlay-text">
          <Ingredienti details={dolceDetails} />
        </div>
      </div>
    ) : null;

  const vetrinaDolci = dolciList
    .filter(({ eatable }) => eatable)
    .map((dolce) => Dolce(dolce, activeOverlay));

  if (isPageAdmin) {
    return (
      <Admin
        dolci={dolciList}
        addNewDolceFunction={addNewDolce}
        requireReloadFunction={setTriggerReload}
        goBackFunction={goBack}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <navbar className="row full-width space-between">
          <div className="row">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ marginLeft: -20 }}
            />
            <div>
              <h1 style={{ margin: 0, textAlign: "left" }}>Dolci Delizie</h1>
              <h5 style={{ margin: 0, textAlign: "left" }}>
                La pasticceria a casa tua!
              </h5>
            </div>
          </div>
          <div className="row" style={{ paddingRight: 8 }}>
            Welcome, Admin{" "}
            <button style={{ marginLeft: 8 }} onClick={goPageAdmin}>
              {" "}
              Go{" "}
            </button>
          </div>
        </navbar>
      </header>
      <main style={mainStyle}>
        {overlay}
        {vetrinaDolci}
      </main>
    </div>
  );
}

export default App;
