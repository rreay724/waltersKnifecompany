import "./App.css";
import { Header, Footer } from "./components/index";
import { Info, Home, Contact, Knives } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/info">
              <Header />
              <Info />
              <Footer />
            </Route>
            <Route path="/contact">
              <Header />
              <Contact />
              <Footer />
            </Route>
            <Route path="/knives">
              <Header />
              <Knives />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
