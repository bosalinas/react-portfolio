import Project from "./components/Project";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
        <div className='portfolio-app'>
            <Nav />,
            <Header />,
            <Project />,
            <Footer />
        </div>
    )
}