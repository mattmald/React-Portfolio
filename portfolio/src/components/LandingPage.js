 import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import  Contact  from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NavBar from './NavBar';

export default function LandingPage() {
    const [currentPage, setCurrentPages ]=useState("AboutMe");

    const renderPages = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
    };

        const handlePageChange = (page) => setCurrentPages(page);

    return (
        <div>
            < NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPages()}
        </div>       
    );
};