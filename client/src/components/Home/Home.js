import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './Home.scss';

export default function Home() {
    return (
        <div className="standard-background">
            <div className="push-up">            
                <img src={logo} className="App-logo" alt="logo" />
                <header className="standard-header">
                    <h3>welcome to recit.al</h3>
                    <Link className="standard-link" to="/dash">begin</Link>
                </header>
            </div>
        </div>
    )
}
