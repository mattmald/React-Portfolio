 import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import  Contact  from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function LandingPage() {
    const [currentPages, setCurrentPages ]=useState("AboutMe");

    const renderPages = () => {
        if (currentPages === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPages === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPages === "Resume") {
            return <Resume />;
        }
        if (currentPages === "Contact") {
            return <Contact />;
        }
    };

        const handlePageChange = (page) => setCurrentPages(page);

    return (
        <div>
            
        </div>
                
    );
}





{/* <section>
                    <div style={BorderStyle}>
                        <button type='button' onClick={() => AboutMe}>About Me</button>
                    </div>
                    <div style={BorderStyle}>
                        <a href='https://www.google.com/'>Portfolio</a>
                    </div>
                    <div style={BorderStyle}>
                        <a href='https://www.google.com/'>Resume</a>
                    </div>
                    <div style={BorderStyle}>
                        <a href='https://www.google.com/'>Contact Me</a>
                    </div>
                </section>
        </div> */}
    //      style={{
    //         fontSize: "30px",
    //         background: 'DimGray',
    //         display: 'flex',
    //         justifyContent: 'space-around',
    //         justifyItems: 'center',
    //         height : '100vh'
    //     }} 
    //     const BorderStyle = {
    //     background: 'DarkSeaGreen',
    //     display: 'flex',
    //     padding: '8vh',
    //     margin: "30px"
    // };