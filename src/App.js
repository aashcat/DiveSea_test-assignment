import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/MainContent/Main";

import "./App.scss";
import "./globals.scss";

function App() {
  return (
    <>
      <Header />
      <div className="global-container">
        <div className="App">
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
