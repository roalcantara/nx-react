import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="images/icon-284x284.webp"
          className="App-logo"
          alt="logo"
          width="284"
          height="284"
          data-src="http://placehold.it/284x284"
          srcSet="images/icon-284x284.webp 284w, images/icon-512x512.webp 512w, images/icon-568x568.webp 568w"
          sizes="50vw"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
