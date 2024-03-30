'use client'
import React, { useState } from 'react';

import Style from "../css/Login.module.css";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'text' : 'password');
    };
    return (
        <div className={Style.loginPage}>

            <Link href="/"><Image className={Style.image} src="/FashionNews/logo.svg" alt="logo" width={190} height={40} /></Link>
            <div className={Style.container}>
                <a id={Style.title}>Login</a><br /><br /><br /><br />
                <form className={Style.bodyContent}>
                    <label htmlFor="email" className={Style.label}>User name or Email:</label>
                    <input className={Style.inputE} id="email" name="email" /><br />
                    <label htmlFor="password" className={Style.label}>Password:</label>
                    <div className={Style.fromPassword}>
                        <input className={Style.inputP} type={inputType} id="password" name="password" />
                        <button className={Style.eye} onClick={togglePasswordVisibility}>{showPassword ? <Image src="/login/eye.svg" alt="eye" width={22} height={22} /> : <Image src="/login/eyeOff.svg" alt="eye" width={22} height={22} />}</button></div>

                </form><br />
                <div className={Style.container1}>
                    <Link href="#" className={Style.fgPassword}>Forgot Password?</Link>
                </div>
                <br /><div>
                    <button className={Style.btnSignIn}>Sign in</button>
                </div>
                <br /><div className={Style.linkHere}>
                    <a >Don’t have an account?</a>
                    <a href='/Register' id={Style.here}> Sign up here</a>
                </div>
            </div>

        </div>
    );
};
export default Login;