import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home() {
    return (
        <div className="standard-background">
            <header className="standard-header">
                <h3>welcome to recit.al</h3>
                <Link className="standard-link" to="/dash">begin</Link>
            </header>
        </div>
    )
}
