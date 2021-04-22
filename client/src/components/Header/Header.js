import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Header() {
    const loc = useLocation().pathname;
    return (
        <Nav className="w-100" fill justify variant="tabs" defaultActiveKey={loc}>
            <Nav.Item>
                <Nav.Link id="standard-color" href="/dash" eventKey="/dash">dash</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="standard-color" href="/add" eventKey="/add">add</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="standard-color" href="/settings" eventKey="/settings">settings</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
