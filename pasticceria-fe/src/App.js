import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const receivedFakeData = [{"id":1,"nome":"cornetto vecchissimo","prezzo":1,"createdAt":"2021-10-05T15:27:14.215Z"},{"id":2,"nome":"cornetto vecchio","prezzo":1,"createdAt":"2021-10-06T15:27:14.217Z"},{"id":3,"nome":"cornetto vuoto","prezzo":1,"createdAt":"2021-10-07T15:27:14.218Z"},{"id":4,"nome":"cornetto vegano","prezzo":1.2,"createdAt":"2021-10-08T15:27:14.219Z"},{"id":5,"nome":"cornetto alla fragola","prezzo":1.25,"createdAt":"2021-10-09T15:27:14.220Z"}]

function App() {
  const [dolciList, setDolciList] = useState([]);
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
  }, [])
  console.info({ dolciList })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Working with {"REACT BE HOST "} {process.env.REACT_APP_BE_HOST}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          App is working
        </a>
      </header>
    </div>
  );
}

export default App;
