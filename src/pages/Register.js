import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { UilInfoCircle } from "@iconscout/react-unicons";

import Footer from "../components/Footer";
import * as constant from "../util/constant";
import axios from "../util/axios";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    // validate username when value changes
    useEffect(() => {
        setValidUsername(constant.REGEX_USER.test(username));
    }, [username]);

    // validate password when value changes
    useEffect(() => {
        setValidPassword(constant.REGEX_PASSWORD.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword]);

    // clear error message when dependencies value change
    useEffect(() => {
        setErrMsg("");
    }, [username, password, matchPassword])

    // enable button when all validation passed
    useEffect(() => {
        if (validUsername && validPassword && validMatch)
            setButtonDisabled(false);
    }, [validUsername, validPassword, validMatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                constant.API_REGISTER,
                JSON.stringify({
                    username,
                    password
                })
            );

            const { data: message } = response;

            toast.success(message, {
                autoClose: 5000,
            });

            navigate("/login");
        } catch (err) {
            setErrMsg(err?.response?.data);
        }
    };

    return (
        <>
            <div className="form-container">
                <div className="form-register">
                    <p className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>
                    <h1>Register</h1>
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
                                    onFocus={() => setUsernameFocus(true)}
                                    required
                                    style={{ borderColor: validUsername || !username ? "#CED4DA" : "#FF0000" }}
                                />
                            </FloatingLabel>
                            <p className={usernameFocus && username && !validUsername ? "instructions" : "hide"}>
                                <UilInfoCircle />
                                4 to 24 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
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
                                    onFocus={() => setPasswordFocus(true)}
                                    style={{ borderColor: validPassword || !password ? "#CED4DA" : "#FF0000" }}
                                />
                            </FloatingLabel>
                            <p className={passwordFocus && password && !validPassword ? "instructions" : "hide"}>
                                <UilInfoCircle />
                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <FloatingLabel
                                controlId="floatingInputPassword"
                                label="Confirm Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) => setMatchPassword(e.target.value)}
                                    value={matchPassword}
                                    onFocus={() => setMatchFocus(true)}
                                    style={{ borderColor: validMatch || !matchPassword ? "#CED4DA" : "#FF0000" }}
                                />
                            </FloatingLabel>
                            <p id="confirmnote" className={matchFocus && matchPassword && !validMatch ? "instructions" : "hide"}>
                                <UilInfoCircle />
                                Must match the first password input field.
                            </p>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={buttonDisabled}>
                            Register
                        </Button>

                        <p>
                            Already a user? <Link to="/login">Login</Link>
                        </p>
                    </Form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Register;