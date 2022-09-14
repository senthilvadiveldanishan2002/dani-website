import "./App.css";
import Hero from "./components/Hero/Hero";
import Biography from "./components/Biography/Biography";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Hero />
        <Biography />
      </div>
      <Footer />
    </div>
  );
}

export default App;
