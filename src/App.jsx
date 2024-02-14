import "./App.css";
import About from "./components/About";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import Process from "./components/Process";

function App() {
  return (
    <>
      <Header/>
      <MainImage/>
      <Content/>
      <About/>
      <Process/>
      <Footer/>
    </>
  );
}

export default App;
