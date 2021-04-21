import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import './Authentication.scss';

export default function Login() {
    const [loading, setLoading] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async () => {

    }

    return (
        <div className="standard-background">
            <Card className="w-100" style={{ maxWidth: '400px'}}>
                <Card.Body>
                    <h2 style={{marginBottom: '15px'}}>log in</h2>
                    <GoogleButton style={{marginBottom: '10px'}} className="mx-auto"/>
                    <Form onSubmit={handleSubmit} className="d-flex flex-column text-left" >
                        <Form.Group id="email">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required placeholder={'enter your email here'}></Form.Control>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '20px'}} id="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder={'enter a secure password here'}></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" variant="info" type="submit">log in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <h4 style={{marginTop: '10px'}}>need an account? <Link className="standard-link" to="/signup">sign up</Link></h4>
        </div>
    )
}
