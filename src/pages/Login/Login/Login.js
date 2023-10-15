import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(err => {
            console.log(err.message);
        });
    }
    return (
        <Container className='mx-auto w-50 border rounded mt-5'>
            <Form onSubmit={handelLogin} className='p-5'>
            <h1 className='text-muted text-center mb-4'>Login your account</h1>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='bg-light border border-light' type="email" name='email' placeholder="Enter your email address" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-light border border-light' type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>

                <Button className='w-100 border border-light' variant="secondary" type="submit">
                    Submit
                </Button>
                <Form.Text className='ms-5'>
                    <span className='ms-3'>Dont’t Have An Account ? <Link className="text-danger text-decoration-none fw-bold" to='/register'>Register</Link></span>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>


        </Container>
    );
};

export default Login;