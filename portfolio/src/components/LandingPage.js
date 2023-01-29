import React from 'react';

export default function LandingPage() {
    const BorderStyle = { border: '1px black', padding: '5px' };

    return (
        <nav>
            <section
                style={{
                    background: "blue",
                    display: 'flex'
                }}
            >
                <div style={BorderStyle}>
                    <a href='https://www.youtube.com/'>About Me</a>
                </div>
                <div style={BorderStyle}>
                    <a href='https://www.youtube.com/'>Portfolio</a>
                </div>
                <div style={BorderStyle}>
                    <a href='https://www.youtube.com/'>Resume</a>
                </div>
                <div style={BorderStyle}>
                    <a href='https://www.youtube.com/'>Contact Me</a>
                </div>
            </section>
        </nav>
    );
}
