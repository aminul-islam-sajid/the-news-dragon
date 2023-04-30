import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const {createUser} =useContext(AuthContext);

    const [accepted, setAccepted] = useState
    (false);


    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password =form.password.value;

        console.log(name, photo,email,password);

        createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            console.log(createUser)
        })
        .catch(err =>{
            console.log(err);
        })
    }


    const handelAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='mx-auto w-25'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                onClick={handelAccepted}
                type="checkbox" name="accept" label={<>Accept <Link to='/terms'>terms and Condition</Link> </>}
                 />
            </Form.Group>
            <Button variant="primary" disabled={!accepted} type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-success">
                Already have an Account?
                <Link to="/login">Login</Link>

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