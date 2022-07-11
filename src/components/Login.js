import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import * as constant from "../util/constant";
import useAuth from "../hook/useAuth";
import axios from "../util/axios";

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // clear error message when dependencies value change
    useEffect(() => {
        setErrMsg("");
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                constant.API_LOGIN,
                JSON.stringify({
                    username,
                    password
                })
            );

            const { roles, accessToken } = response.data;
            setAuth({ username, roles, accessToken })

            navigate("/");
        } catch (err) {
            setErrMsg(err?.message);
        }
    };

    return (
        <section>
            <p className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <p>
                    Need an account? <Link to="/register">Register</Link>
                </p>
            </Form>
        </section>
    );
}

export default Login;