import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import * as constant from "../util/constant";
import axios from "../util/axios";

const Register = () => {
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

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

            console.log(response);
        } catch (err) {
            setErrMsg(err?.response);
        }
    };

    return (
        <div className="form-container">
            <div className="form-register">
                <p className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <FontAwesomeIcon icon={faCheck} className={validUsername ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validUsername || !username ? "hide" : "invalid"} />
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            onFocus={() => setUsernameFocus(true)}
                            required
                        />
                        <p className={usernameFocus && username && !validUsername ? "instructions" : "hide"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            onFocus={() => setPasswordFocus(true)}
                        />
                        <p className={passwordFocus && password && !validPassword ? "instructions" : "hide"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => setMatchPassword(e.target.value)}
                            value={matchPassword}
                            onFocus={() => setMatchFocus(true)}
                        />
                        <p id="confirmnote" className={matchFocus && matchPassword && !validMatch ? "instructions" : "hide"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                    <p>
                        Already a user? <Link to="/login">Login</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
}

export default Register;