import React from 'react';

export default function LandingPage() {
    const BorderStyle = {
        background: 'gary',
        padding: '50px',
        border: '1px black',
    };

    return (
        <div>
            <nav>
                <section
                    style={{
                        background: 'gray',
                        display: 'flex',
                        justifyContent: 'space-around',
                        justifyItems: 'center',
                    }}
                >
                    <div>
                        <a href='https://www.youtube.com/'>About Me</a>
                    </div>
                    <div>
                        <a href='https://www.youtube.com/'>Portfolio</a>
                    </div>
                    <div>
                        <a href='https://www.youtube.com/'>Resume</a>
                    </div>
                    <div>
                        <a href='https://www.youtube.com/'>Contact Me</a>
                    </div>
                </section>
            </nav>
        </div>
    );
}
