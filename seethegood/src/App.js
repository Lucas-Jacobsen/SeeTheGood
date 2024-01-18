import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Banner from "./Components/Banner/banner";
import Cards from './Components/Cards/Cards';

function App() {
    return (
        <div>
            <Home/>
            <Banner/>
            <About/>
            <Cards/>
        </div>
    )
}

export default App;
