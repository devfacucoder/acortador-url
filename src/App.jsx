import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const apiUrl = import.meta.env.VITE_URL_BACK;
function App() {
  const [urlToSend, setUrlToSend] = useState("");
  const [urlCort, setUrlCort] = useState("");
  const handleCopy = () => {
    if(urlCort!=""){
      navigator.clipboard.writeText(urlCort);
    }


  };

  const sendUrl = (e) => {
    const bodyRequest = {
      urlss: urlToSend,
    };
    e.preventDefault();
    fetch(apiUrl + "sendurl", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyRequest),
    })
      .then((res) => res.json())
      .then((data) => setUrlCort(data.mensage))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header>
        <h1>Acor-Url</h1>
      </header>
      <main>
        <div className="acor_optn">
          <div className="acor_box_h2">
            <h2>Acortador de Urls</h2>
          </div>
          <div className="acor_box_form">
            <form onSubmit={sendUrl}>
              <input
              placeholder="ingrese una url"
                type="text"
                onChange={(e) => setUrlToSend(e.target.value)}
              />
              <button>Acortar</button>
            </form>
          </div>
          <div className="acor_box_res">
            <h3>{urlCort}</h3>
            <button onClick={handleCopy}>Copy</button>
          </div>
        </div>
      </main>
      <footer>
        <p>Creado por:</p>
        <h3>

          <a href="https://github.com/devfacucoder">@devfacucoder</a>
        </h3>
      </footer>
    </div>
  );
}

export default App;
