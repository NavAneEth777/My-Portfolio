import { Route, Routes } from "react-router-dom";
import '../static/styles.min.css';

//importing components..
import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Certificates from "./Certificates.js";
function Main() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />

            </Routes>
            <Footer/>
        </>
    );
}

export default Main;