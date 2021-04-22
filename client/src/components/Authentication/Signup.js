import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.js';
import { Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import './Authentication.scss';

export default function Signup() {
    const { currentUser, signup, googleSignup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setLoading(false);
            return setError('passwords must match');
        }

        try {
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/dash');
        } catch (error) {
            setError('invalid email or password')
        }

        setLoading(false);
    }

    const googleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            setError('');
            await googleSignup();
            history.push('/dash');
        } catch (error) {
            setError('sign up with google failed')
        }

        setLoading(false);
    }

    return (
        <div className="standard-background">
            <div className="push-up-10">
            <Card className="w-100" style={{ maxWidth: '350px'}}>
                <Card.Body>
                    <h2 style={{marginBottom: '15px'}}>sign up</h2>
                    {loading ? 
                        <div className="w-100" style={{height: '300px'}}><Spinner style={{marginTop: '120px'}} className="mx-auto" variant="info" animation="border" /></div>
                        :
                        <div>
                            <GoogleButton onClick={googleSubmit} style={{marginBottom: '10px'}} className="mx-auto"/>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit} className="d-flex flex-column text-left" >
                                <Form.Group id="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required placeholder={'enter your email here'}></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required placeholder={'enter a secure password here'}></Form.Control>
                                </Form.Group>
                                <Form.Group style={{marginBottom: '20px'}} id="password-confirm">
                                    <Form.Label>confirm password</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required placeholder={'enter a matching password'}></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} className="w-100" variant="warning" type="submit">sign up</Button>
                            </Form>
                        </div>
                    }
                </Card.Body>
            </Card>
            <h4 style={{marginTop: '10px'}}>already have an account? <Link className="standard-link" to="/login">log in</Link></h4>
            </div>
        </div>
    )
}
