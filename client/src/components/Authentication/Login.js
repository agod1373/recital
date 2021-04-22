import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext.js';
import './Authentication.scss';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, googleSignup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/dash')
        } catch (error) {
            setError('invalid email/password combination');
        }

        setLoading(false)
    }

    const googleSubmit = async () => {
        setLoading(true);
        try {
            await googleSignup();
            history.push("/dash");
        } catch (error) {
            setError('failed to sign in with google. please try again.')
        }
        setLoading(false);
    }

    return (
        <div className="standard-background">
            <div className="w-100 push-up-10" style={{ maxWidth: '350px'}}>
            <Card>   
                <Card.Body>     
                    <h2 id="primary-color" className="text-center mb-4">log in</h2>
                    {loading ?
                        <div className="auth-spinner"><Spinner id="auth-spin" variant="warning" animation="border" /></div>
                        :
                        <div>
                            {error && <Alert variant="danger">{error}</Alert>}    
                            <div className="auth-buttons">
                            <GoogleButton onClick={googleSubmit} style={{marginBottom: '10px'}} className="mx-auto"/>
                            </div>
                            <Form onSubmit={handleSubmit} className="d-flex flex-column text-left" >
                                <Form.Group id="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} placeholder={'enter your email here'} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} placeholder={'enter password here'} required></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} id="loginbutton" className="w-100 mx-auto" variant="warning" type="submit">log in</Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link className="standard-link" to="/forgot-password">forgot password?</Link>
                            </div>
                        </div>
                        }
                </Card.Body>
            </Card>
            <h4 style={{marginTop: '10px'}}>don't have an account? <Link className="standard-link" to="/signup">sign up.</Link></h4>
            </div>
        </div>
    )
}
