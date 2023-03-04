import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Profissional from "./pages/profissional";
import Usuario from "./pages/usuario";

function App() {
  return (
    <BrowserRouter>
    <Header /> 
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/pessoa-usuaria" element={ <Usuario /> }/>
      <Route path="/profissional" element={ <Profissional /> }/>
    </Routes>
    <Footer /> 
    </BrowserRouter>
  );
}

export default App;
