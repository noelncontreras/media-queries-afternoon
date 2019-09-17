import React from 'react';

import "../styles/Home.css";

export default function Home() {
    return (
        <>
            <main className="main-container">
                <div className="top-greeting">
                    <h2>Welcome To Our Studio!</h2>
                </div>
                <br />
                <div className="bottom-greeting">
                    <h1>IT'S NICE TO MEET YOU</h1>
                </div>
                <br />
                <div>
                    <button className="tell-more">TELL ME MORE</button>
                </div>
            </main>
        </>
    )
}