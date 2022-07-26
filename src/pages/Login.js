import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Footer from "../components/Footer";
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

    const handleAdminLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                constant.API_LOGIN,
                JSON.stringify({
                    username: constant.DEMO_ADMIN_USERNAME,
                    password: constant.DEMO_ADMIN_PASSWORD
                })
            );

            const username = constant.DEMO_ADMIN_USERNAME;
            const { roles, accessToken } = response.data;
            setAuth({ username, roles, accessToken })

            navigate("/");
        } catch (err) {
            setErrMsg(err?.message);
        }
    };

    const handleUserLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                constant.API_LOGIN,
                JSON.stringify({
                    username: constant.DEMO_USER_USERNAME,
                    password: constant.DEMO_USER_PASSWORD
                })
            );

            const username = constant.DEMO_USER_USERNAME;
            const { roles, accessToken } = response.data;
            setAuth({ username, roles, accessToken })

            navigate("/");
        } catch (err) {
            setErrMsg(err?.message);
        }
    };

    return (
        <>
            <div className="form-container">
                <div className="form-login">
                    <p className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>
                    <h1>Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <FloatingLabel
                                controlId="floatingInputUsername"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <FloatingLabel
                                controlId="floatingInputPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    <h6><span>OR</span></h6>

                    <div className="button-container">
                        <Button variant="primary" className="button-admin" onClick={handleAdminLogin}>
                            Login as Admin role
                        </Button>

                        <Button variant="primary" className="button-test-user" onClick={handleUserLogin}>
                            Login as User role
                        </Button>
                    </div>

                    <p>
                        Need an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;