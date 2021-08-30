import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Star Link"
    }, [])

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );

}

export default App;
