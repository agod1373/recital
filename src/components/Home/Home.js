import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home() {
    return (
        <div>
            <header className="home-header">
                <h3>welcome to recit.al</h3>
                <Link className="home-link" to="/dash">begin</Link>
            </header>
        </div>
    )
}
