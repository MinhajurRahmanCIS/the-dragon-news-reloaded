import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserProfile(name, photo)
                    .then()
                    .catch();
                console.log(createdUser);
                form.reset();
                navigate('/category');
            })
            .catch(err => {
                console.log(err.message);
            });

    }

    const handelAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='mx-auto w-50 border rounded mt-5'>
            <Form onSubmit={handelRegister} className='p-5'>
                <h1 className='text-muted text-center mb-4'>Register your account</h1>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control className='bg-light border border-light' type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='bg-light border border-light' type="text" name='photo' placeholder="Enter your Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='bg-light border border-light' type="email" name='email' placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-light border border-light' type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handelAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms & Condition</Link></>} />
                </Form.Group>

                <Button disabled={!accepted} className='w-100 border border-light' variant="secondary" type="submit">
                    Register
                </Button>
                <Form.Text className='ms-5'>
                    <span className='ms-3'>Already Have An Account ? <Link className="text-success text-decoration-none fw-bold" to='/login'>Login</Link></span>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>


        </Container>
    );
};

export default Register;