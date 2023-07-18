import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
import Links from "./routing/Links";

function App() {
  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  );
}

export default App;
