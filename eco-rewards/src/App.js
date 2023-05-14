import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Analytics from "./components/Analytics";
import Description from "./components/Description";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Main />
            <Analytics />
            <Description />
        </div>
    );
}

export default App;
